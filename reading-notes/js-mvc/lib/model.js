/* 
* @Author: anchen
* @Date:   2016-03-17 17:18:18
* @Last Modified by:   anchen
* @Last Modified time: 2016-03-21 17:25:56
*/

var assertEqual = function(val1, val2, msg) {
    if (val1 !== val2){
        console.log(msg || (val1 + " does not equal " + val2));
    }else if(val1 === val2){
        console.log('val1 is equal with val2');
    }
};

Math.guid = function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    }).toUpperCase();
};

var Model = {
    inherited : function(){},
    created : function(){},

    prototype : {
        init : function(){}
    },

    create : function(){
        var object = Object.create(this);
        object.parent = this;
        object.fn = object.prototype = Object.create(this.prototype);

        object.created();
        this.inherited(object);

        return object;
    },

    init : function(){
        var instance = Object.create(this.prototype);
        instance.parent = this;
        instance.init.apply(instance, arguments);

        return instance;
    },

    extend : function(o){
        $.extend(this, o);
        typeof o.extended == 'function' && o.extended(this);
    },

    include : function(o){
        $.extend(this.prototype, o);
        typeof o.included == 'function' && o.included(this);
    }
}

jQuery.extend(Model.prototype,{
    init : function(obj){
        if(obj){
            this.load(obj);
        }
    },

    load : function(obj){
        for(var attr in obj){
            this[attr] = obj[attr];
        }
    }
})

Model.records = {};

Model.include({
    newRecord : true,

    create : function(){
        if(!this.id){
            this.id = Math.guid();
        }

        this.newRecord = false;
        this.parent.records[this.id] = this;
    },

    destroy : function(){
        delete this.parent.records[this.id];
    }

})


Model.include({
    update : function(){
        this.parent.records[this.id] = this;
    }
})

Model.include({
    save : function(){
        this.newRecord ? this.create() : this.update();
    }
})

Model.extend({
    find : function(id){
        return this.records[id] || ('Unkown record');
    }
})

Model.extend({
    created : function(){
        this.records = {};
        this.attributes = [];
    }
})

Model.extend({
    populate : function(values){
        this.records = {};
        for(var i=0,len=values.length;i<len;i++){
            var record = values[i];
            record.newRecord = false;
            this.records[record.id] = record;
        }
    }
})

Model.include({
    attributes : function(){
        var result = {};
        for(var i in this.parent.attributes){
            var attr = this.parent.attributes[i];
            result[attr] = this[attr];
        }
        result.id = this.id;
        return result;
    }
})

var Model.LocalStorage = {
    saveLocal : function(name){
        var results = [];
        for(var i in this.records){
            results.push(this.records[i]);
        }
        localStorage[name] = JSON.stringify(results);
    },

    loadLocal : function(name){
        var result = JSON.parse(localStorage[name]);
        this.populate(result);
    }
}

var Asset = Model.create();

Asset.extend({
    find : function(id){
        return this.records[id].dup() || 'Unkown record';
    }
})

Asset.include({
    create : function(){
        this.newRecord = false;
        this.parent.records[this.id] = this.dup();
    },

    update : function(){
        this.parent.records[this.id] = this.dup();
    },

    dup : function(){
        return jQuery.extend(true, {}, this);
    }
})

var Model.LocalStorage = {
    saveLocal : function(name){
        var results = [];
        for(var i in this.records){
            results.push(this.records[i]);
        }
        localStorage[name] = JSON.stringify(results);
    },

    loadLocal : function(name){
        var result = JSON.parse(localStorage[name]);
        this.populate(result);
    }
}

Asset.extend(Model.LocalStorage);

Model.include({
    createRemote : function(url, callback){
        $.$.post(url, this.attributes(), function(data, textStatus, xhr) {
            /*optional stuff to do after success */
        });
    },

    updateRemote : function(url, callback){
        $.$.ajax({
            url: url,
            type: 'PUT',
            data: this.attributes(),
            success : callback(){

            }
        })
        
        
    }
})

Asset.init({'name':'json.txt'}).createRemote('/asset');

var asset = Asset.init();

// test
asset.name = "same, same";
asset.id = 1
asset.save();
var asset2 = Asset.init();
asset2.name = "but different";
asset2.id = 2;
asset2.save();
assertEqual( Asset.find(1).name, "same, same" );
asset2.destroy();


