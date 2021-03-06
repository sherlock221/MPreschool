/**
 * Micro 配置
 */


//常量配置
MPreschool.constant("VERSION",{
    vs : "100"
});

MPreschool.constant("SERVER", {
    url : {
        file : "",
        mp  : ""
    },
    //测试
    testUrl : {
        mp  : "/MPreschool/data",
        file : "http://10.10.68.11:10000/file"
    },
    //预发布
    formalUrl : {
        mp  : "http://10.10.68.11:10000/mp",
        file : "http://10.10.68.11:10000/file"
    }
});

//配置http 拦截器
MPreschool.config(function($httpProvider){
    $httpProvider.interceptors.push("AjaxInterceptors");
});


MPreschool.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}])

//启动项
MPreschool.run(function($rootScope,VERSION){
    $rootScope.VERSION = VERSION;
});
