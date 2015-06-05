MPreschool.controller("SelfMenuCtrl",function($rootScope,$scope,MenuSev,Util,SERVER,VERSION){

    //当前环境
    $rootScope.url = SERVER.testUrl;



    $scope.menus = [];



    $scope.sort = false;


    //按钮排序
    $scope.sortMenu = function(){
        $scope.sort = true;
    }

    //取消
    $scope.closeSort = function(){
        $scope.sort = false;
    }

    //完成
    $scope.finishSort = function(){

    }



    $scope.addMenu = function(){
        //弹出
        $rootScope.dialog("tpl/function/menu/addMenu.html","SelfMenuAddCtrl");
    }

    var getMenu = function(){
        MenuSev.getMenu().then(function(res){
            if(res.rtnCode != "000000"){
                $rootScope.toastError(res.msg);
                return;
            }
            $scope.menus = res.bizData;

        },function(){

        });
    }


    var updateMenu  = function(){
        MenuSev.updateMenu().then(function(res){
            if(res.rtnCode != "000000"){
                $rootScope.toastError(res.msg);
                return;
            }
            else{
                $rootScope.toastSuccess("更新成功!");
            }
        },function(){

        });
    }


    //更新按钮
    $scope.update = function(){

    }


    //loadMenu
    getMenu();
});