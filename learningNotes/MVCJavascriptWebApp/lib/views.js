
//  视图和模板

var $views = $('#views');
$views.empty();

var $span = $('<span />').html('何珂');
$views.html($span);

// change事件
function addChange(obj){

    obj.change = function(callback){
        
        if( typeof callback == 'function'){
            // callback.apply(obj);
            if( !(this._change instanceof Array) ){
                this._change = [];
            };
            
            this._change.push(callback);

        }else{

            if( !this._change ) return;

            for(var i=0;i<this._change.length;i++){
                this._change[i].apply(this);
            }
        }
    }
}

var obj = {};
obj.name = 'foo';

addChange(obj);

obj.change(function(){
    // 添加更新视图代码
    console.log('change');
    console.log(this.name)
})

// obj.change()

// obj.name = 'heke';
// obj.change()

function User(name){

    this.name = name;
    this._callbacks = {};
}

User.records = [];

User.bind = function(eventName, callback){

    var calls = this._callbacks || (this._callbacks = {});
    this._callbacks[eventName] || (this._callbacks[eventName] = []).push(callback);

}

User.trigger = function(eventName){
    
    var calls = this._callbacks[eventName],
        len = calls.length;

    calls = this._callbacks[eventName];

    if( len ){

        for(i=0;i<len;i++){
            calls[i].apply(this);
        }

    }else{
        console.log('Not find '+eventName+' event!');
    }
}

User.create = function(name){
    
    this.records.push(new this(name));
    this.trigger('change');

}

jQuery(function($){

    User.bind('change', function(){
        
        var tpl = $('#tpls').tmpl(User.records);

        $('#user').empty();
        $('#user').append(tpl);
    })

})
User('heke');

User.bind('change', function(){
    console.log('changed', this.name);
})

User.trigger('change')
// User.change();