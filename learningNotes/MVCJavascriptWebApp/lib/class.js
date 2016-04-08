/* 
* @Author: anchen
* @Date:   2016-03-16 10:45:19
* @Last Modified by:   anchen
* @Last Modified time: 2016-03-16 14:17:28
*/

/**
 * 构建类
 */

function Class(parent){
    var kclass = function(parent){
        this.init.apply(this,arguments);
    };

    if(parent){
        var Subclass = function(){};
        Subclass.prototype = parent.prototype;
        kclass.prototype = new Subclass;
    }

    kclass.prototype.init = function(){};

    kclass.fn = kclass.prototype;
    kclass.fn.parent = kclass;
    kclass._super = kclass.__proto__;

    kclass.proxy = function(func){
        var self = this;
        return(function(){
            return func.apply(self, arguments);
        });
    }

    kclass.extend = function(obj){
        var extended = obj.extended;
        for(var i in obj){
            kclass[i] = obj[i];
        }
        if(extended){ extended(kclass) };
    }

    kclass.include = function(obj){
        var included = obj.included;

        for(var i in obj){
            kclass.fn[i] = obj[i];
        }

        if(included){ included(kclass) };
    }

    return kclass;
}

/**
 * 委托
 */

function proxy(func, context){
    return (function(){
        func.apply(context, arguments);
    })
}
