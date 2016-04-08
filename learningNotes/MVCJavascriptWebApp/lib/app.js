/* 
* @Author: anchen
* @Date:   2016-03-16 10:47:27
* @Last Modified by:   anchen
* @Last Modified time: 2016-03-16 14:20:22
*/

var Person = new Class,
    Animal = new Class;

Person.prototype.init = function(){
    console.log('Person init')
};

Person.fn = Person.prototype;

Person.fn.getId = function(){
    alert(this.name);
}

var ORMModule = {
    save : function(){alert('ORMModule')}
}

Person.include({
    fnFind : function(){ alert('function fnFind')},
    fnExists : function(){ alert('function fnExists')},
    included : function(kclass){ 
        console.log(kclass, 'was included');
    }
})

Person.include(ORMModule);
Animal.include(ORMModule);
Animal.include({
    breath : function(){ console.log('Animal breath') }
})

var Cat = new Class(Animal);
var cat = new Cat;
    cat.breath();

var person = new Person,
    animal = new Animal,
    cat = new Cat;

var Button = new Class;

Button.include({
    init : function(element){
        var self = this;
        this.element = jQuery(element);
        this.element.click(Button.proxy(this.click));
    },
    click : function(e){
        console.log(e.currentTarget.value)
    }
})

var button1 = new Button('#btn1');
var button2 = new Button('#btn2');