angular.module('admin', []).controller('adminController', ['$scope', function ($scope) {
    $scope.existingFlags = {};
    $scope.existingInputs = [];
    $scope.activeTab = "";
    $scope.selectedFlagName = "";
    $scope.initAdminPageMock = function () {
        $scope.existingFlags = {
            'flag1mock' : {
                'label' : 'label-1-mock',
                'name' : 'flag1mock',
                'parent' : [],
                'hidden' : false,
                'description' : 'sample flag 1 mock stuff',
                'color' : '0'
            },
            'flag2mock' : {
                'label' : 'label-2-mock',
                'name' : 'flag2mock',
                'parent' : [],
                'hidden' : false,
                'description' : 'sample flag 2 mock stuff',
                'color' : '1'
            },
            'flag3mock' : {
                'label' : 'label-3-mock',
                'name' : 'flag3mock',
                'parent' : ['flag2mock'],
                'hidden' : false,
                'description' : 'sample flag 3 mock stuff',
                'color' : '2'
            }
        };
        $scope.existingInputs = {
            'input-mock-1' : {
                'label' : 'input-mock1-label',
                'name' : 'input-mock-1',
                'type' : 'select',
                'parent' : [],
                'hidden' : false,
                'description' : 'some useful info about this input',
                'params' : {
                    'selection-name' : ['name1', 'name2', 'name3'],
                    'selection-label' : ['label1-mock', 'label2', 'label3'],
                    'selection-description' : ['description text1', 'description text2', 'description text3'],
                }
            },
            'input-mock-2' : {
                'label' : 'input-mock2-label',
                'name' : 'input-mock-2',
                'type' : 'select',
                'parent' : [],
                'hidden' : false,
                'description' : 'some useful info about this input',
                'params' : {
                    'selection-name' : ['name1', 'name2', 'name3'],
                    'selection-label' : ['label1-mock', 'label2', 'label3'],
                    'selection-description' : ['description text1', 'description text2', 'description text3'],
                }
            },
            'input-mock-3' : {
                'label' : 'input-mock3-label',
                'name' : 'input-mock-3',
                'type' : 'text',
                'parent' : [],
                'hidden' : false,
                'description' : 'some useful info about this text input',
                'params' : {
                    'placeholder' : 'write here something'
                }
            },
            'input-mock-4' : {
                'label' : 'input-mock4-label',
                'name' : 'input-mock-4',
                'type' : 'text',
                'parent' : ['flag3mock'],
                'hidden' : false,
                'description' : 'some useful info about this text input',
                'params' : {
                    'placeholder' : ''
                }
            },
            'input-mock-5' : {
                'label' : 'input-mock5-label',
                'name' : 'input-mock-5',
                'type' : 'text',
                'parent' : ['flag3mock', 'flag1mock'],
                'hidden' : false,
                'description' : 'some useful info about this text input',
                'params' : {
                    'placeholder' : ''
                }
            }
        };
    };
    $scope.flagMap = function (colorId) {
        var map = {
            '0' : 'default',
            '1' : 'warning',
            '2' : 'success'
        };
        return map[colorId];
    }
    $scope.editedInput = {
        'label' : '',
        'name' : '',
        'type' : '',
        'parent' : [],
        'hidden' : false,
        'description' : '',
        'params' : {
        }
    };
    $scope.editedFlag = {
        'label' : '',
        'name' : '',
        'parent' : [],
        'hidden' : false,
        'description' : '',
        'color' : '0'
    };
    $scope.createNewInput = function () {
        if ($scope.activeTab != 'input' && $scope.activeTab != 'flag') {
            $scope.editedInput = {
                'label' : '',
                'name' : '',
                'type' : '',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'params' : {
                }
            };
            $scope.lastActiveTab = $scope.activeTab;
            $scope.activeTab = 'input';
        }
    };
    $scope.createNewFlag = function () {
        if ($scope.activeTab != 'input' && $scope.activeTab != 'flag') {
            $scope.editedFlag = {
                'label' : '',
                'name' : '',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'color' : '0'
            };
            $scope.lastActiveTab = $scope.activeTab;
            $scope.activeTab = 'flag';
        }
    };
    $scope.closeEditForm = function () {
        $scope.activeTab = $scope.lastActiveTab;
    };
    $scope.listExistingFlags = function () {
        $scope.lastActiveTab = $scope.activeTab;
        $scope.activeTab = 'listFlag';
    };
    $scope.listExistingInputs = function () {
        $scope.lastActiveTab = $scope.activeTab;
        $scope.activeTab = 'listInput';
    };
    $scope.setFlagDetail = function (flagName) {
        $scope.selectedFlagName = flagName;
    };
    $scope.setEditedInputType = function (type) {
        $scope.editedInput['type'] = type;
        switch (type) {
            case 'text':
                $scope.editedInput['params'] = {};
                $scope.editedInput['params']['placeholder'] = '';
                break;
            case 'select':
                $scope.editedInput['params'] = {};
                $scope.editedInput['params']['selection-name'] = [];
                $scope.editedInput['params']['selection-label'] = [];
                $scope.editedInput['params']['selection-description'] = [];
                break;
        }
    };
    $scope.addParamToEditedInput = function(params) {
        if (params['selection-name'] != '' || params['selection-label'] != '') {
            $scope.editedInput['params']['selection-name'].push(params['selection-name']);
            $scope.editedInput['params']['selection-label'].push(params['selection-label']);
            $scope.editedInput['params']['selection-description'].push(params['selection-description']);
        }
    };
    $scope.isFlagNameUsed = function (name) {
        if (name in $scope.existingFlags) {
            return true;
        } else {
            return false;
        }
    };
}]);

