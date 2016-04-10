/* 
* @Author: anchen
* @Date:   2016-03-16 16:12:45
* @Last Modified by:   anchen
* @Last Modified time: 2016-03-16 16:58:16
*/
var PubSub = {
    subscribe : function(ev, callback){
        var calls = this._callbacks || (this._callbacks = {});
        (this._callbacks[ev] || (this._callbacks[ev] = []) ).push(callback);
        return this;
    },

    publish : function(){
        var args = Array.prototype.slice.call(arguments, 0);
        var ev = args.shift();

        var list, calls, i, len;
        if(!(calls = this._callbacks)) return this;
        if(!(list = this._callbacks[ev])) return this;

        for(var i=0,len=list.length;i<len;i++){
            list[i].apply(this, args);
        }
        return this;
    }
}
// var PubSub = {
// subscribe: function(ev, callback) {
// // 创建 _callbacks 对象，除非它已经存在了
// var calls = this._callbacks || (this._callbacks = {});

// // 针对给定的事件 key 创建一个数组，除非这个数组已经存在
// // 然后将回调函数追加到这个数组中
// ( this._callbacks[ev] || (this._callbacks[ev] = []) ).push(callback);
// return this;
// },
// publish: function() {
// // 将 arguments 对象转换为真正的数组
// var args = Array.prototype.slice.call(arguments, 0);
// // 拿出第 1 个参数，即事件名称
// var ev = args.shift();
// // 如果不存在 _callbacks 对象，则返回
// // 或者如果不包含给定事件对应的数组
// var list, calls, i, l;
// if (!(calls = this._callbacks)) return this;
// if (!(list = this._callbacks[ev])) return this;
// // 触发回调
// for (i = 0, l = list.length; i < l; i++)
// list[i].apply(this, args);
// return this;
// }
// };

// PubSub.subscribe('wem', function(e){
//     console.log('hello', e);
// })

// PubSub.publish('wem');

var MyPubSub = {
    subscribe : function(ev, callback){
        (this[ev] = callback);
    },

    publish : function(ev){
        var args = Array.prototype.slice.call(arguments, 1);
        typeof this[ev] == 'function' && this[ev].apply(null, args);
    },

}

MyPubSub.subscribe('wem', function(a,b,c){
    console.log('wem', a,b,c);
})

MyPubSub.publish('wem',1,2,3);
