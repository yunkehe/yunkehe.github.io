
(function($){
    var $ = $;
    var mod = {};

    mod.loadFun = function(func){
        $($.proxy(func, this));
    }

    mod.loadFun(function(){
        this.views = $('#views');
    });

    mod.asset = function(){};

    mod.load(function(){
        this.views.find('.asset').click(
            $.proxy(this.assetsClick, this);
        )
    });

})(jQuery)

(function($, exports){

    var mod = function(includes){
        if(includes) {
            this.include(includes);
        }
    };

    mod.fn = mod.prototype;

    mod.fn.proxy = function(func){
        return $.proxy(func, this);
    };

    mod.fn.load = function(func){
        $(this.proxy(func, this));
    };

    mod.fn.include = function(obj){
        $.extend(this, obj);
    }

    exports.Controller = mod;

})(jQuery, window);

var exports = this;
(function($){
    var mod = {};
    mod.create = function(includes){
    var result = function(){
        this.init.apply(this, arguments);
    };
    result.fn = result.prototype;
    result.fn.init = function(){};
    result.proxy = function(func){ return $.proxy(func, this); };
    result.fn.proxy = result.proxy;
    result.include = function(ob){ $.extend(this.fn, ob); };
    result.extend = function(ob){ $.extend(this, ob); };
    if (includes) result.include(includes)
        return result;
    };

    exports.Controller = mod;

})(jQuery);


(function($, Controller){

    var mod = new Controller;

    mod.toggleClass = function(e){
        this.view.toggleClass('over', e.data);
    };

    mod.load = function(){
        this.view = $('#view');
        this.view.mouserover(this.proxy(this.toggleClass), true);
        this.view.mouserover(this.proxy(this.toggleClass), false);
    };

})($, Controller)

// 遍历所有选择器
var exports = this;
jQuery(function($){

    exports.SearchView = Controller.create({


        elements = {
            'input[type=search]' : 'searchInput',
            'form' : 'searchForm'
        },

        init : function(element){
            this.el = $(element);
            this.refreshElements();
            this.searchInput.submit(this.proxy(this.search));
        },

        $ : function(selector){
            return $(selector, this.el);
        },

        search : function(){
            console.log('Searching' + this.searchInput.val() );
        },

        refreshElements : function(){
            for(var key in this.elements){
                this[this.elements[key]] = this.$(key);
            }
        }

    }) 

    };

    new SearchView('#user');
})

jQuery(function($){

    exports.searchView = Controller.create({

        events : {
            'submit form' : 'search'
        },

        eventSpliter : /^(\w+)\s*(.*)$/,

        init : function(){
            this.delegateEvents();
        },

        delegateEvents : function(){

            var me = this;

            for(var key in this.events ){
                var methodName = this.events[key];
                var method = this.proxy(me[methodName]);

                var match = key.match(me.eventSpliter);
                var eventName = match[1],
                    selector = match[2];

                if( selector ){
                    this.el.delegate(selector, eventName, method);
                }else{
                    this.el.bind(eventName, method);
                }
            }
        },

        search : function(){}

    })
})

// 状态机
var Events = {

    bind : function(){

        if( !this.o ){
            this.o = $({});
        };

        this.o.bind.apply(this.o, arguments);
    },

    trigger : function(){

        if( !this.o ){
            this.o = $({});
        };

        this.o.trigger.apply(this.o, arguments);
    }
}

var StateMachine = function(){};
StateMachine.fn = StateMachine.prototype;

$.extend(StateMachine.fn, Events);

StateMachine.fn.add = function(controller){

    this.bind('change', function(e, current){

        if(controller == current){
            controller.activate();

        }else{
            controller.deactivate();
        }
    });

    controller.active = $.proxy(function(){

        this.trigger('change', controller);

    }, this)
}

var con1 = {

    activate : function(){
        alert('con1激活');
    },

    deactivate : function(){
        alert('con1关闭')
    }
}

var con2 = {

    activate : function(){
        alert('con2激活');
    },

    deactivate : function(){
        alert('con2关闭')
    }
}

var stateMachine = new StateMachine;

stateMachine.add(con1);
stateMachine.add(con2);

con1.active();