var app=angular.module("app",[]);
app.directive("helloWorld",function ($templateCache) {
    return{
        restrict:"AEMC",
        template:"<div><h1>鼠标监听事件<h1></div>",
        replace:true,
        link:function (scope,element,attr) {
             //scope指令所在的控制器的作用于
             //element 元素
             //attr  属性
              element.on("click",function (e) {
                  scope.$apply(attr.zpcmethod);
                  //scope.method3();
                  scope.$apply("method3()");
              });
        }
    };
});

app.controller("myCtrl",function ($scope) {
        $scope.method=function () {
            console.log("我点击的是方法");
        };
        $scope.method1=function () {
            console.log("我点击的是方法1");
        };
    $scope.method3=function () {
        console.log("我点击的是方法3");
    }
});