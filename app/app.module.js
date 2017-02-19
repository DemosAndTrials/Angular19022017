"use strict";
var app_component_1 = require("./app.component");
var counter_component_1 = require("./counter.component");
var todos_module_1 = require("./todos/todos.module");
exports.appModule = angular
    .module('app.module', [
    todos_module_1.todosModule.name
])
    .component('salesforceApp', app_component_1.appComponent)
    .component('counter', counter_component_1.counterComponent);
//# sourceMappingURL=app.module.js.map