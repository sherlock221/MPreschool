/**
 * @desc 全局ctrl
 * @auth sherlock221b
 */

MPreschool.controller("MainCtrl",function($rootScope,$scope,$modal,SERVER,$state,Util,toastrConfig,toastr,VERSION){

    //当前环境
    SERVER.url = SERVER.testUrl;

    //toast
    toastrConfig.positionClass = "toast-bottom-center";
    toastrConfig.maxOpened = 1;
    $rootScope.toastSuccess = function(content,timeOut){
        toastr.success(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }
    $rootScope.toastError = function(content,timeOut){
        toastr.error(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }
    $rootScope.toastInfo = function(content,timeOut){
        toastr.info(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }

    //go state
    $rootScope.goState = function(name){
        if($rootScope.settingLayer){
            $rootScope.settingLayer = false;
        }
        $state.go(name);
    }

    //弹窗
    $rootScope.dialog = function(templateUrl,controllerName){
        var option = {};
        if(controllerName){
            option = {
                templateUrl: templateUrl,
                controller  : controllerName
            };
        }
        else{
            option = {
                templateUrl: templateUrl
            };
        }
        var modalInstance = $modal.open(option);
        return modalInstance;
    }

    //提示
    $rootScope.confirm = function(ev,title,content,ok,cancel) {
    };



});