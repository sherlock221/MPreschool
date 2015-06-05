/**
 * Micro 配置
 */


//常量配置
Micro.constant("VERSION",{
    vs : "100"
});

Micro.constant("SERVER", {
    url : {
        uc  : "",
        message : "",
        push : "",
        sop  : ""
    },
    //测试
    testUrl : {
        mp  : "./data",
        file : "http://10.10.68.11:10000/file"
    },
    //预发布
    formalUrl : {
        mp  : "http://10.10.68.11:10000/mp",
        file : "http://10.10.68.11:10000/file"
    }
});

//配置http 拦截器
Micro.config(function($httpProvider){
    $httpProvider.interceptors.push("AjaxInterceptors");
});


Micro.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}])

//启动项
Micro.run(function($rootScope,VERSION){
    $rootScope.VERSION = VERSION;
});
