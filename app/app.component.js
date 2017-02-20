"use strict";
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Ros";
    }
    return AppComponent;
}());
exports.appComponent = {
    controller: AppComponent,
    template: "\n\n    <div class=\"panel panel-default\">\n    \n        <div class=\"panel-heading\">\n            <h1>Hello, {{$ctrl.name}}</h1>\n        </div>\n        \n        <div class=\"panel-body\">\n        <todo-list></todo-list>\n        <counter\n        init=\"10\"\n        step=\"3\"\n        max=\"20\"\n        min=\"5\"\n        on-event=\"onEvent()\">\n        </counter>\n    \n    </div>\n    </div>\n    \n" };
//# sourceMappingURL=app.component.js.map