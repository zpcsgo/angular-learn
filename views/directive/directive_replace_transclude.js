var app=angular.module("app",[]);
//注射器加载完成所有模块后，执行一次
//如果想在很多指令中去使用，最好缓存一下
app.run(function ($templateCache) {
    $templateCache.put("hello","<div>哈哈</div>");
});
app.directive("helloWorld",function ($templateCache) {
    return{
        restrict:"AEMC",
        //E 作为元素名使用
        // A 作为属性使用
        // C 作为类名使用
        // M 作为注释使用,使用注释注意前后要加空格
        //template:"<div>HelloWorld</div>",
        // templateUrl:"helloWorld.html",//有时候需要大量的标签，显然一个拼接不适用
        template:$templateCache.get("hello"),
        replace:true//指令内部的内容会被替换掉
    };
});
app.directive("zpcSgo",function ($templateCache) {
    return{
        restrict:"AEMC",
        template:"<div>zpcSgo<div ng-transclude></div></div>",
        //ng-transclude  把指令内部嵌套的内容放到这个div中
        transclude:true
    };
});
app.controller("myCtrl",function ($scope) {

});