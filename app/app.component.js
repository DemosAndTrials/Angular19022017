"use strict";
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Ros";
    }
    return AppComponent;
}());
exports.appComponent = {
    controller: AppComponent,
    template: "\n    <div>\n    <h1>Hello, {{$ctrl.name}}</h1>\n    <todo-list></todo-list>\n<counter\ninit=\"10\"\nstep=\"3\"\nmax=\"20\"\nmin=\"5\"\non-event=\"onEvent()\"\n></counter>\n    </div>\n" };
//# sourceMappingURL=app.component.js.map