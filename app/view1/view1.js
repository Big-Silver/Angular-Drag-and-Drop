'use strict';

angular.module('myApp.view1', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.directive('ckEditor', function () {
    return {
        require: '?ngModel',
        link: function (scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0]);
            if (!ngModel) return;
            ck.on('instanceReady', function () {
                ck.setData(ngModel.$viewValue);
            });
            function updateModel() {
                scope.$apply(function () {
                ngModel.$setViewValue(ck.getData());
            });
        }
        ck.on('change', updateModel);
        ck.on('key', updateModel);
        ck.on('dataReady', updateModel);

        ngModel.$render = function (value) {
            ck.setData(ngModel.$viewValue);
        };
      }
    };
})

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  // $scope.editorOptions = {
  //   language: 'en',
  //   allowedContent: true,
  //   entities: false
  // };
  // $scope.models = {
	// 	selected: false,
	// 	templates: {
	// 		contents: [
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				info: 'img/content/content-block-text.png',
	// 				module: angular.copy($scope.itemModules.text),
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_text',
	// 								id: $scope.set_next_itemId('cnt_text'),
	// 								module: angular.copy($scope.itemModules.text)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				tooltip_txt: "Text"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				info: 'img/content/content-block-pic.png',
	// 				module: angular.copy($scope.itemModules.image),
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				tooltip_txt: "image"
	// 			},
	// 			// {
	// 			// 	type: 'row_multi_col_wrapper',
	// 			// 	id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 			// 	info: 'img/content/content-block-video.png',
	// 			// 	module: angular.copy($scope.itemModules.video),
	// 			// 	columns: [
	// 			// 		{
	// 			// 			columnStyles: angular.copy($scope.baseStyles.column),
	// 			// 			columnContents : [
	// 			// 				{
	// 			// 					type: 'cnt_video',
	// 			// 					id: $scope.set_next_itemId('cnt_video'),
	// 			// 					module: angular.copy($scope.itemModules.video)
	// 			// 				}
	// 			// 			]
	// 			// 		}
	// 			// 	],
	// 			// 	tooltip_txt: "video"
	// 			// },
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				info: 'img/content/content-block-button.png',
	// 				module: angular.copy($scope.itemModules.button),
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_button',
	// 								id: $scope.set_next_itemId('cnt_button'),
	// 								module: angular.copy($scope.itemModules.button)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				tooltip_txt: "Button"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				info: 'img/content/content-block-social.png',
	// 				module: angular.copy($scope.itemModules.social),
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_social',
	// 								id: $scope.set_next_itemId('cnt_social'),
	// 								module: angular.copy($scope.itemModules.social)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				tooltip_txt: "Social"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				info: 'img/content/content-block-divider.png',
	// 				module: angular.copy($scope.itemModules.divider),
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_divider',
	// 								id: $scope.set_next_itemId('cnt_divider'),
	// 								module: angular.copy($scope.itemModules.divider)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				tooltip_txt: "Divider"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				info: 'img/content/content-block-html.png',
	// 				module: angular.copy($scope.itemModules.html),
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_html',
	// 								id: $scope.set_next_itemId('cnt_html'),
	// 								module: angular.copy($scope.itemModules.html)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				tooltip_txt: "Html"
	// 			}				

	// 		],
	// 		rows: [
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-full-width-pic.png'
	// 				},
	// 				tooltip_txt: "Image"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_text',
	// 								id: $scope.set_next_itemId('cnt_text'),
	// 								module: angular.copy($scope.itemModules.text)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-full-width-text.png'
	// 				},
	// 				tooltip_txt: "Text"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_button',
	// 								id: $scope.set_next_itemId('cnt_button'),
	// 								module: angular.copy($scope.itemModules.button)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-full-width-btn.png'
	// 				},
	// 				tooltip_txt: "Button"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_text',
	// 								id: $scope.set_next_itemId('cnt_text'),
	// 								module: angular.copy($scope.itemModules.text)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_text',
	// 								id: $scope.set_next_itemId('cnt_text'),
	// 								module: angular.copy($scope.itemModules.text)
	// 							}
	// 						]
	// 					},
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-2-text.png'
	// 				}, 
	// 				tooltip_txt: "Text / Text"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-2-pics.png'
	// 				} ,
	// 				tooltip_txt: "Image / Image"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_text',
	// 								id: $scope.set_next_itemId('cnt_text'),
	// 								module: angular.copy($scope.itemModules.text)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-text-pic.png'
	// 				} ,
	// 				tooltip_txt: "Text / Image"
	// 			}, 				
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_text',
	// 								id: $scope.set_next_itemId('cnt_text'),
	// 								module: angular.copy($scope.itemModules.text)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-2-pis-text.png'
	// 				} , 
	// 				tooltip_txt: "Image / Image /Text"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-3-pics.png'
	// 				} , 
	// 				tooltip_txt: "Image / Image / Image"
	// 			},
	// 			{
	// 				type: 'row_multi_col_wrapper',
	// 				id: $scope.set_next_itemId('row_multi_col_wrapper'),
	// 				module: {
	// 					editTpl: 'pnl_container.html'
	// 				},
	// 				columns: [
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					},
	// 					{
	// 						columnStyles: angular.copy($scope.baseStyles.column),
	// 						columnContents : [
	// 							{
	// 								type: 'cnt_image',
	// 								id: $scope.set_next_itemId('cnt_image'),
	// 								module: angular.copy($scope.itemModules.image)
	// 							}
	// 						]
	// 					}
	// 				],
	// 				info: {
	// 					icon: 'img/rows/layout-4-pics.png'
	// 				} , 
	// 				tooltip_txt: "Image / Image / Image / Image"
	// 			}
	// 		]
	// 	}
  //   };

  // $scope.test = function() {
  //   console.log($scope.itemModules.text);
  // };

  // $scope.itemModules = {
	// 	text: {
	// 		editTpl: 'pnl_text.html',
	// 		attrs: {
	// 			"content": 'Have A Wonderful Day.'
	// 		},
	// 		style: {
	// 			"color": null,
	// 			"linkColor": null,
	// 			"fontFamily": null,
	// 			'textAlign': 'center',
	// 			"lineHeight": "16",
	// 			"outerPaddings": setPaddings([30,0,30,0])
	// 		}
	// 	},
  //   image: {
	// 		editTpl: 'pnl_image.html',
	// 		attrs: {
	// 			"filename": null,
	// 			"src": '',
	// 			"href": '',
	// 			"alt": "Image",
	// 		},
	// 		style: {
	// 			"width": "100%",
	// 			"textAlign": "center",
	// 			"outerPaddings": setPaddings([0,0,0,0])
	// 		}
	// 	},
  // };
  // $scope.baseStyles = {
	// 	container: {
	// 		"backgroundColor": "#fff"
	// 	},
	// 	content: {
	// 		"width": {
	// 			"size": 600,
	// 			"measurementType": "px"
	// 		},
	// 		"color": "#333",
	// 		"fontSize": "14",
	// 		"fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
	// 		"backgroundColor": "transparent",
	// 		"linkColor": "#0059FF"
	// 	},
	// 	column: angular.extend(
	// 		{
	// 			"backgroundColor": "rgba(0,0,0,0)"
	// 		},
	// 		setPaddings([0,0,0,0]),
	// 		setBorders()
	// 	)
	// };

  // function setPaddings(params) {
	// 	if (!params || params.length != 4) params = [0,0,0,0];

	// 	return {
	// 		"paddingTop": params[0],
	// 		"paddingRight": params[1],
	// 		"paddingBottom": params[2],
	// 		"paddingLeft": params[3]
	// 	}
	// }
  // function setBorders(params) {
	// 	if (!params || params.length != 4) params = [{width: 0, style: 'solid', color: 'rgba(0,0,0,0)'}, {width: 0, style: 'solid', color: 'rgba(0,0,0,0)'}, {width: 0, style: 'solid', color: 'rgba(0,0,0,0)'}, {width: 0, style: 'solid', color: 'rgba(0,0,0,0)'}];

	// 	return {
	// 		"borderTop": {width: params[0].width, style: params[0].style, color: params[0].color}, // transparent
	// 		"borderRight": {width: params[1].width, style: params[1].style, color: params[1].color},
	// 		"borderBottom": {width: params[2].width, style: params[2].style, color: params[2].color},
	// 		"borderLeft": {width: params[3].width, style: params[3].style, color: params[3].color},
	// 	}
	// };

  // $scope.set_copied_itemIds = function(list) {
	// 	list.id = 1;

	// 	if (angular.isDefined(list.columns)) {
	// 		for (var i = 0; i < list.columns.length; i++) {
	// 			if (angular.isDefined(list.columns[i].columnContents[0])) {
	// 				list.columns[i].columnContents[0].id = 1;
	// 			}
	// 		}
	// 	}
	// };

  // $scope.set_next_itemId = function(type) {
	// 	return $scope.mailSettings.last_itemIds[ type ]++;
	// };

  // $scope.mailSettings = {
	// 	last_itemIds: {
	// 		'cnt_text': 0,
	// 		'cnt_image': 0,
	// 		'cnt_button': 0,
	// 		'cnt_social': 0,
	// 		'cnt_divider': 0,
	// 		'cnt_html' :0,
	// 		'row_multi_col_wrapper': 0
	// 	},
	// 	tpl_bodyStyles: {
	// 		'container': angular.copy($scope.baseStyles.container),
	// 		'content': angular.copy($scope.baseStyles.content)
	// 	}
	// };

}])


