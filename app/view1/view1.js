'use strict';

angular.module('myApp.view1', ['ngRoute', 'ang-drag-drop', 'dndLists'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.directive('ckeditor', function ($rootScope) {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var editorOptions;
            if (attr.ckeditor === 'minimal') {
                // minimal editor
                editorOptions = {
                    height: 100,
                    toolbar: [
                        { name: 'basic', items: ['Bold', 'Italic', 'Underline'] },
                        { name: 'links', items: ['Link', 'Unlink'] },
                        { name: 'tools', items: ['Maximize'] },
                        { name: 'document', items: ['Source'] },
                    ],
                    removePlugins: 'elementspath',
                    resize_enabled: false
                };
            }

            // enable ckeditor
            var ckeditor = element.ckeditor(editorOptions);

            // update ngModel on change
            ckeditor.editor.on('change', function () {
                ngModel.$setViewValue(this.getData());
            });
        }
    };
})

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.models = {
        selected: null,
        templates: [
            {type: "text", id: 1, text: "Here is a text."},
            {type: "container", id: 1, columns: [[], []]},
            {type: "layout", id: 1, columns: [[], [], []]}
        ],
        dropzones: {
            "List1": [
            ]
        }
    };																																																																																																																																																																																																								

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    $scope.editorFocus = function(item) {
    	var itemId = 'cke-'+item.type+'-'+item.id;
    	console.log(itemId);
    	var focusedEditor = document.getElementById(item.id);
    	console.log(focusedEditor)
    	focusedEditor.setAttribute("contenteditable" , 'true');
    	var rect = focusedEditor.getBoundingClientRect();
		var bodyRect = document.body.getBoundingClientRect();
		$scope.editor_top = rect.top -bodyRect.top;
		$scope.editor_left = rect.left - bodyRect.left;
		//setParentLiDraggablelity(focusedEditor, false);

    };

    $scope.editorBlur = function (item) {
		var itemId = 'cke-'+item.type+'-'+item.id;
		CKEDITOR.disableAutoInline = true;
		var focusedEditor = document.getElementById(item.id);
		focusedEditor.setAttribute("contenteditable" , 'false');
		//setParentLiDraggablelity(focusedEditor, true);
		// var editor = CKEDITOR.inline( itemId );
	};
}])


