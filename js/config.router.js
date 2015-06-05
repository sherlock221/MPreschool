'use strict';


/**
 * 配置路由
 * @sherlock221b
 */
Micro.config(
      function ($stateProvider,   $urlRouterProvider,VERSION) {

          $stateProvider

              .state('app', {
                  url: '/app',
                  abstract : true,
                  templateUrl: 'tpl/app.html?v='+VERSION.vs
              })

              .state("app.fun",{
                  url: '/fun',
                  templateUrl: 'tpl/function/fun.html?v='+VERSION.vs
              })
              .state('app.auth', {
                  url: '/auth',
                  abstract : true,
              })



              //登录页面
              .state('app.auth.login', {
                  url: '/login',
                  views : {
                      "@" : {
                          templateUrl: 'tpl/auth/login.html?v='+VERSION.vs
                      }
                  }
               })

              //注册
              .state('app.auth.register', {
                  url: '/register',
                  views : {
                      "@" : {
                          templateUrl: 'tpl/auth/register.html?v='+VERSION.vs
                      }
                  }
              })

              //首页
              .state('app.fun.index',{
                  url: '/index',
                  templateUrl: 'tpl/function/index/index.html?v='+VERSION.vs,
                  controller : ""
              })

              //自定义菜单
              .state('app.fun.menu',{
                  url: '/menu',
                  templateUrl: 'tpl/function/menu/menu.html?v='+VERSION.vs,
                  controller : ""
              })

              //微官网
              .state('app.fun.micro',{
                  url: '/micro',
                  templateUrl: 'tpl/function/micro/micro.html?v='+VERSION.vs,
                  controller : ""
              })

              //自动回复
              .state('app.fun.reply',{
                  url: '/reply',
                  templateUrl: 'tpl/function/replay/replay.html?v='+VERSION.vs,
                  controller : ""
              })



          //index
          $urlRouterProvider.otherwise('/app/s1/index');

      }
  );


