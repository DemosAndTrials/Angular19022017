"use strict";
var counter = 0;
var Task = (function () {
    function Task(desc, isDone) {
        if (isDone === void 0) { isDone = false; }
        this.id = counter++;
        this.desc = desc;
        this.isDone = isDone;
    }
    return Task;
}());
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.tasks = [];
    }
    TodoListComponent.prototype.addTask = function (desc) {
        this.tasks.push(new Task(desc));
        this.desc = "";
    };
    Object.defineProperty(TodoListComponent.prototype, "countSelected", {
        get: function () {
            return this.tasks.filter(function (t) { return t.isDone; }).length;
        },
        enumerable: true,
        configurable: true
    });
    return TodoListComponent;
}());
exports.todoListComponent = {
    controller: TodoListComponent,
    template: "\n        <inpit>\n          <h1>Todo List Component</h1>\n          <input type=\"text\" ng-model=\"$ctrl.desc\"/>\n          <button ng-click=\"$ctrl.addTask($ctrl.desc)\">Add Task</button>\n          <hr>\n          <div ng-repeat=\"task in $ctrl.tasks\">\n          <input type=\"checkbox\" ng-model=\"task.isDone\" ng-click=\"$ctrl.countSelected()\">\n          {{task.desc}}\n          </div>\n           <hr>\n           <h3>Total: {{$ctrl.tasks.length}}</h3>\n           <h3>Total: {{$ctrl.countSelected}}</h3>\n        </div>\n" };
//# sourceMappingURL=todo-list.component.js.map