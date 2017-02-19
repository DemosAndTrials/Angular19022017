import IComponentOptions = angular.IComponentOptions;

class AppComponent{
    name:string = "Ros";
    onEvent:"";
}

export const appComponent:IComponentOptions = {
    controller: AppComponent,
    template:`
    <div>
    <h1>Hello, {{$ctrl.name}}</h1>
    <todo-list></todo-list>
<counter
init="10"
step="3"
max="20"
min="5"
on-event="onEvent()"
></counter>
    </div>
`}