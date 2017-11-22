// Function.prototype.call = function call(context) {
//     //=>call方法中的this:fn  call
//
//     //[native code]
//     //1、把指定函数中的THIS指向CONTEXT [把THIS中的THIS关键字指向CONTEXT]
//     //2、把指定函数执行 [把THIS执行]
//     this();
//
// };
// //=>以下都是让CALL方法执行
// // fn.call(opp);
// // fn.__proto__.call()
// // Function.prototype.call();

function fn1() {
    console.log(1);
}
function fn2() {
    console.log(2);
}

fn1.call(fn2);
/*
 * fn1.call：fn1这个Function的实例通过__proto__找到Function.prototype上的call方法,然后让call方法执行（传递fn2这个实参）
 *
 * 执行CALL的时候,CALL中的THIS:FN1,所以此处是把FN1执行,让FN1中的THIS指向FN2(只不过我们的FN1中不需要使用THIS) =>1
 */

fn1.call.call.call(fn2);
/*
 * fn1.call.call.call：依然是找到原型上的CALL方法,并且让CALL执行
 *   CALL中的THIS:fn1.call.call[原型上的CALL]
 *   CALL中的CONTEXT:FN2
 *
 *   让 [原型上的CALL(FN1.CALL.CALL)] 中的THIS指向 FN2
 *   让 [原型上的CALL(FN1.CALL.CALL)] 执行
 *      第二次执行原型上的CALL,只不过此时CALL中的THIS是FN2
 *          让FN2中的THIS指向UNDEFINED
 *          让FN2执行
 * =>2
 */

Function.prototype.call(fn2);
/*
 * 找到原型上的CALL方法,让CALL方法执行
 *   CALL执行：
 *   =>THIS:Function.prototype
 *   =>CONTEXT:fn2
 *
 *   把Function.prototype中的THIS关键字变为fn2
 *   让Function.prototype执行
 *
 * =>无输出
 */
Function.prototype.call.call.call(fn2);
/*
 * 等价于fn1.call.call.call(fn2)
 */
