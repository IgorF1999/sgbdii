
routerApp.controller('userController', function($scope, $http, $state, $stateParams, globalConfig) {
    $scope.saveData = function(user)
    {
        if ($state.current.name === 'create')
        {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/user",
                data: user,
            }).then(function mySuccess(response) {

            }, function myError(response) {

            });
        }
        else if ($state.current.name === 'edit')
        {
            $http({
                method: "POST",
                url: globalConfig.apiAddress + "/user/" + $stateParams.id,
                data: user,
            }).then(function mySuccess(response) {
                $state.go("users");
            }, function myError(response) {

            });
        }
    };

    //alert($state.current.name);
    if ($state.current.name === 'users')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/user"
        }).then(function mySuccess(response) {
            $scope.users = response.data;
        }, function myError(response) {

        });
    }
    else if ($state.current.name === 'edit')
    {
        $http({
            method : "GET",
            url : globalConfig.apiAddress + "/user/" + $stateParams.id
        }).then(function mySuccess(response) {
            $scope.user = response.data;
        }, function myError(response) {

        });
    }

});