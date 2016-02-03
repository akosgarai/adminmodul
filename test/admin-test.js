describe('Admin module Unit Tests', function () {
    beforeEach(module('admin'));

    var $controller;
    
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('TEST001 - flag related tests', function () {
        it('it constructs a flag object - should be always green', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : 'flag-test-label',
                'name' : 'flag-test-name',
                'parent' : [],
                'hidden' : false,
                'description' : 'some useful info about this flag',
                'color' : '0'
            };
            $scope.flag = expected;
            expect($scope.flag).toEqual(expected); 
        }); 
        it('it constructs a flag object with one parent - should be always green', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : 'flag-test-label',
                'name' : 'flag-test-name',
                'parent' : ['parent-name-1'],
                'hidden' : false,
                'description' : 'some useful info about this flag',
                'color' : '0'
            };
            $scope.flag = expected;
            expect($scope.flag).toEqual(expected); 
        }); 
        it('it constructs a flag object with multiple parents - should be always green', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : 'flag-test-label',
                'name' : 'flag-test-name',
                'parent' : ['parent-name-1', 'parent-name-3'],
                'hidden' : false,
                'description' : 'some useful info about this flag',
                'color' : '0'
            };
            $scope.flag = expected;
            expect($scope.flag).toEqual(expected); 
        }); 
    });
    describe('TEST002 - input related tests', function () {
        it('it constructs an input object with type: text - should be always green', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : 'input-test-label',
                'name' : 'input-test-name',
                'type' : 'text',
                'parent' : [],
                'hidden' : false,
                'description' : 'some useful info about this input',
                'params' : {
                    'placeholder' : 'input-test-placeholder'
                }
            };
            $scope.input = expected;
            expect($scope.input).toEqual(expected); 
        }); 
        it('it constructs an input object with type: select - should be always green', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : 'input-test-label',
                'name' : 'input-test-name',
                'type' : 'select',
                'parent' : [],
                'hidden' : false,
                'description' : 'some useful info about this input',
                'params' : {
                    'selection-name' : ['name1', 'name2', 'name3'],
                    'selection-label' : ['label1', 'label2', 'label3'],
                    'selection-description' : ['description text1', 'description text2', 'description text3'],
                }
            };
            $scope.input = expected;
            expect($scope.input).toEqual(expected); 
        }); 
    });
    describe('TEST003 - create new flag process', function () {
        it('it constructs an empty flag object - click to new flag button', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : '',
                'name' : '',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'color' : '0'
            };
            $scope.createNewFlag();
            expect($scope.editedFlag).toEqual(expected); 
        }); 
    });
    describe('TEST004 - init function test (mocked)', function () {
        it('it constructs an empty flag object - click to new flag button', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expectedFlags = {
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
            var expectedInputs = {
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
            $scope.initAdminPageMock();
            expect([$scope.existingFlags, $scope.existingInputs]).toEqual([expectedFlags, expectedInputs]); 
        }); 
    });
    describe('TEST005 - create new input process', function () {
        it('it constructs an empty input object - click to new flag button', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : '',
                'name' : '',
                'type' : '',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'params' : {
                }
            };
            $scope.createNewInput();
            expect($scope.editedInput).toEqual(expected); 
        }); 
        it('it checks the type related params of the flags (selected: text)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : '',
                'name' : '',
                'type' : 'text',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'params' : {
                    'placeholder' : ''
                }
            };
            $scope.createNewInput();
            $scope.setEditedInputType('text');
            expect($scope.editedInput).toEqual(expected); 
        }); 
        it('it checks the type related params of the flags (selected: select)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : '',
                'name' : '',
                'type' : 'select',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'params' : {
                    'selection-name' : [],
                    'selection-label' : [],
                    'selection-description' : []
                }
            };
            $scope.createNewInput();
            $scope.setEditedInputType('select');
            expect($scope.editedInput).toEqual(expected); 
        }); 
        it('try to add a new selectable param to a select input', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : '',
                'name' : '',
                'type' : 'select',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'params' : {
                    'selection-name' : ['test-name-1'],
                    'selection-label' : ['test-label-1'],
                    'selection-description' : ['test-descriontion-1']
                }
            };
            $scope.createNewInput();
            $scope.setEditedInputType('select');
            $scope.addParamToEditedInput({'selection-name': 'test-name-1', 'selection-label' : 'test-label-1', 'selection-description' : 'test-descriontion-1'});
            expect($scope.editedInput).toEqual(expected); 
        }); 
        it('it checks the type related params of the flags (selected: select)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            var expected = {
                'label' : '',
                'name' : '',
                'type' : 'select',
                'parent' : [],
                'hidden' : false,
                'description' : '',
                'params' : {
                    'selection-name' : [],
                    'selection-label' : [],
                    'selection-description' : []
                }
            };
            $scope.createNewInput();
            $scope.setEditedInputType('select');
            expect($scope.editedInput).toEqual(expected); 
        }); 
    });
    describe('TEST006 - validate new flagname', function () {
        it('it checks the validation of the flagname - client side validation with new name', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.initAdminPageMock();
            expect($scope.isFlagNameUsed('flag4mock')).toEqual(false); 
        }); 
        it('it checks the validation of the flagname - client side validation with used name', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.initAdminPageMock();
            expect($scope.isFlagNameUsed('flag2mock')).toEqual(true); 
        }); 
    });
    describe('TEST007 - navbar related tests', function () {
        it('it checks the the active tab after clicking the New Flag button', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.createNewFlag();
            expect($scope.activeTab).toEqual("flag"); 
        }); 
        it('it checks the the active tab after clicking the New Input button', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.createNewInput();
            expect($scope.activeTab).toEqual("input"); 
        }); 
        it('it checks the the active tab after clicking the List Flag button', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.listExistingFlags();
            expect($scope.activeTab).toEqual("listFlag"); 
        }); 
        it('it checks the the active tab after clicking the List Input button', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.listExistingInputs();
            expect($scope.activeTab).toEqual("listInput"); 
        }); 
        it('it checks the the active tab after clicking the Close button (last active tab was listFlag)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.lastActiveTab = 'listFlag';
            $scope.closeEditForm();
            expect($scope.activeTab).toEqual("listFlag"); 
        }); 
        it('it checks the the active tab after clicking the Close button (last active tab was listInput)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.lastActiveTab = 'listInput';
            $scope.closeEditForm();
            expect($scope.activeTab).toEqual("listInput"); 
        }); 
        it('it checks the the active tab after clicking the New Input button (active tab was flag before)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.activeTab = 'flag';
            $scope.createNewInput();
            expect($scope.activeTab).toEqual("flag"); 
        }); 
        it('it checks the the active tab after clicking the New Input button (active tab was input before)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.activeTab = 'input';
            $scope.createNewInput();
            expect($scope.activeTab).toEqual("input"); 
        }); 
        it('it checks the the active tab after clicking the New Flag button (active tab was flag before)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.activeTab = 'flag';
            $scope.createNewFlag();
            expect($scope.activeTab).toEqual("flag"); 
        }); 
        it('it checks the the active tab after clicking the New Flag button (active tab was input before)', function () {
            var $scope = {};
            var controller = $controller('adminController', { '$scope' : $scope});
            $scope.activeTab = 'input';
            $scope.createNewFlag();
            expect($scope.activeTab).toEqual("input"); 
        }); 
    });
});
