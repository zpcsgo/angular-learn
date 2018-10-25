var app=angular.module("app",[]);
app.directive("superMan",function () {
    return {
        scope:{},//独立的作用域
        restrict:"AE",
        controller:function ($scope) {
            //controll主要用于暴露一些公共的方法给其他指令使用
            $scope.arr=[];
            //this指的是controller
            this.addStrength=function () {
                $scope.arr.push("力量");
            };
            this.addSpeed=function () {
                $scope.arr.push("速度");
            };
            this.addMagic=function () {
                $scope.arr.push("魔法");
            };
        },
        link:function (scope,element,attr) {
            element.bind("click",function () {
                console.log(scope.arr);
            });
        }
    };
});
app.directive("strength",function () {
    return{
        require:"^superMan",
        link:function (scope,element,attr,superManCtrl) {
            superManCtrl.addStrength();
        }
    };
});
app.directive("speed",function () {
    return{
        require:"^superMan",
        link:function (scope,element,attr,superManCtrl) {
            superManCtrl.addSpeed();
        }
    };
});
app.directive("magic",function () {
    return{
        require:"^superMan",
        link:function (scope,element,attr,superManCtrl) {
            superManCtrl.addMagic();
        }
    };
});
app.controller("myCtrl",function ($scope) {

});