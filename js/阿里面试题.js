function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}

Foo.getName();//=>2 把FOO作为对象,找其私有属性
getName();//=>4 执行全局下的GET-NAME
Foo().getName();//=>1 先把FOO作为普通函数执行,把执行的结果调取GET-NAME在执行
getName();//=>1
new Foo.getName();//=>先获取Foo.getName的值(假设B),然后再new B()相当于创建B的实例 =>2  (new Foo.getName;一样的)
new Foo().getName();//=>new Foo()获取实例，把得到的实例在调取GET-NAME  =>3
new new Foo().getName();
//=>var f=new Foo()
//=>new f.getName();  =>new (f.getName)(); =>3

//obj.getX();//=>先获取obj的getX的属性值，然后把获取的值执行