import IAngularStatic = angular.IAngularStatic;
import {appComponent} from "./app.component";
import {counterComponent} from "./counter.component";
import {todosModule} from "./todos/todos.module";

declare var angular:IAngularStatic;

export const appModule = angular
    .module('app.module',[
        todosModule.name
    ])
    .component('salesforceApp',appComponent)
    .component('counter',counterComponent);