// define(function (require) {
//     var $ = require('jquery');
//     var lib = require('./lib');
//     var controller = require('c/c1');
//     var model = require('./model/m1');

//         // 对于基于jquery的且在项目中使用比较广泛的插件，建议将其打包在common.js中去，那么在
//         // 使用过程中不需要额外再引用，直接使用就可以，比如jquery.colorbox.
//         // 否则，需要单独引用模块，如下：
//         // require('../lib/jquery.colorbox');

//     //A fabricated API to show interaction of
//     //common and specific pieces.
//     controller.setModel(model);
//     $(function () {
//         controller.render(lib.getBody());

//         $.colorbox({width:"250px", height:"120px", html:"<h1>jquery.colorbox</h1>"});
//     });
// });

// -----------------------------------------------------------------------------------------------

// define(['jquery', './lib', 'c/c1', './model/m1'], function($, lib, controller, model){
//     //A fabricated API to show interaction of
//     //common and specific pieces.
//     controller.setModel(model);
//     $(function () {
//         controller.render(lib.getBody());

//         $.colorbox({width:"250px", height:"120px", html:"<h1>jquery.colorbox</h1>"});
//     });
// });


// -----------------------------------------------------------------------------------------------


var $ = require('jquery');

var lib = require('m/lib');
var controller = require('c/c1');
var model = require('m/model/m1');

// import style
require('scss/common.scss');
require('scss/index.scss');

    // 对于基于jquery的且在项目中使用比较广泛的插件，建议将其打包在common.js中去，那么在
    // 使用过程中不需要额外再引用，直接使用就可以，比如jquery.colorbox.
    // 否则，需要单独引用模块，如下：
    // require('../lib/jquery.colorbox');

//A fabricated API to show interaction of
//common and specific pieces.
controller.setModel(model);
$(function () {
    controller.render(lib.getBody());

    $.colorbox({width:"250px", height:"120px", html:"<h1>jquery.colorbox</h1>"});
});