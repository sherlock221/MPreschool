/**
 * @sherlock221b
 */
MPreschool
    .factory("MenuSev", function ($q,$http,SERVER) {
        var Menu = {


            getMenu : function(){
                var defer = $q.defer();
                $http.get(SERVER.url.mp+"/menu/getMenu",{
                    params : {
                    }
                },{headers:{"is-json-data":1}})
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return defer.promise;
            },

            deleteMenu : function(){
                var defer =  $q.defer();
                $http.post(SERVER.url.mp+"/menu/deleteMenu",{
                },{headers:{"is-json-data":1}})
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });

                return  defer.promise;
            },
            updateMenu : function(menu){
                var defer =  $q.defer();
                $http.post(SERVER.url.mp+"/menu/updateMenu",{
                        menu : menu
                },{headers:{"is-json-data":1}})
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return  defer.promise;

            }

        }


        return Menu;

    });


