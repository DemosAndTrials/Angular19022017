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
    TodoListComponent.prototype.removeTask = function (task) {
        console.log(task);
        var i = this.tasks.indexOf(task);
        this.tasks.splice(i, 1);
        console.log(i);
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
    template: "\n        <inpit>\n          <h1>Todo List Component</h1>\n           <div class=\"form-inline\">\n             <input type=\"text\" ng-model=\"$ctrl.desc\" class=\"form-control\"/>\n             <button ng-click=\"$ctrl.addTask($ctrl.desc)\" class=\"btn btn-primary\">Add Task</button>\n          </div>\n          <hr>\n         \n          <div ng-repeat=\"task in $ctrl.tasks\">\n            \n            <form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <div class=\"input-group-addon\"><input type=\"checkbox\" ng-model=\"task.isDone\" ng-click=\"$ctrl.countSelected()\"></div>\n      <input type=\"text\" class=\"form-control\" value=\"{{task.desc}}\" disabled>\n      <div class=\"input-group-addon\"><button type=\"button\" class=\"close danger\" aria-label=\"Close\" ng-click=\"$ctrl.removeTask(task)\"><span aria-hidden=\"true\">&times;</span></button></div>\n    </div>\n  </div>\n \n</form>\n\n          </div>\n          \n           <hr>\n           <h3>Total: <span class=\"badge\">{{$ctrl.tasks.length}}</span> Selected: <span class=\"badge\">{{$ctrl.countSelected}}</span></h3>\n          \n           \n        </div>\n"
};
//# sourceMappingURL=todo-list.component.js.map