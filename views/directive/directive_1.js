var app=angular.module("app",[]);

app.directive("helloWorld",function () {
    return{
      restrict:"AEMC",
        //E 作为元素名使用
        // A 作为属性使用
        // C 作为类名使用
        // M 作为注释使用,使用注释注意前后要加空格
        template:"<div>HelloWorld</div>",
        replace:true
    };
});

app.controller("myCtrl",function ($scope) {

});