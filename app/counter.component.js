"use strict";
var CounterComponent = (function () {
    function CounterComponent() {
        this.value = 0;
    }
    Object.defineProperty(CounterComponent.prototype, "init", {
        set: function (val) {
            this.value = val;
        },
        enumerable: true,
        configurable: true
    });
    CounterComponent.prototype.onUp = function () { this.value += this.step; };
    CounterComponent.prototype.onDown = function () { this.value -= this.step; };
    ;
    return CounterComponent;
}());
exports.counterComponent = {
    controller: CounterComponent,
    bindings: {
        init: '<',
        step: '<'
    },
    template: "\n    <div>\n        <button ng-click=\"$ctrl.onUp()\">Up</button>\n        {{$ctrl.value}}\n         <button ng-click=\"$ctrl.onDown()\">Down</button>\n    </div>\n" };
//# sourceMappingURL=counter.component.js.map