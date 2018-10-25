var app = angular.module("app", []);
app.directive("sayHelloWorld", function () {
    return {
        restrict:"AE",
        scope:{
            say:"&",
            zpcsgo:"@",
            my:"="
        },
        template:"<div><input type='text' ng-model='my'/><span>{{zpcsgo}}</span><button ng-click='say({name:data})'>点击</button></div>"
    };
});
app.controller("myCtrl",function ($scope) {
    $scope.zpc="hello";
    $scope.zzz="zpc";
    $scope.sayHello=function (name) {
        alert("hello"+name);
    }
});