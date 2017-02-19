import IModule= angular.IModule;
import IAngularStatic = angular.IAngularStatic;
import {todoListComponent} from "./todo-list.component";
declare var angular:IAngularStatic;

export const todosModule: IModule = angular
    .module('todosModule',[])
    .component('todoList', todoListComponent);