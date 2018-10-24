var app=angular.module("app",[]);
app.directive("zpcSgo",function ($templateCache) {
    return{
        restrict:"AEMC",
        template:"<div>指令执行的三个阶段<div ng-transclude></div></div>",
        //ng-transclude  把指令内部嵌套的内容放到这个div中
         transclude:true,
        // compile:function () {
        //
        // },//指令会自己去执行，如果要自定义则也要运行默认的compile
        // link:function () {
        //
        // }//指令自己会执行，在这主要是操作dom
    };
});
app.controller("myCtrl",function ($scope) {

});