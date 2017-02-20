import IComponentOptions = angular.IComponentOptions;

class AppComponent{
    name:string = "Ros";
    onEvent:"";
}

export const appComponent:IComponentOptions = {
    controller: AppComponent,
    template:`

    <div class="panel panel-default">
    
        <div class="panel-heading">
            <h1>Hello, {{$ctrl.name}}</h1>
        </div>
        
        <div class="panel-body">
        <todo-list></todo-list>
        <counter
        init="10"
        step="3"
        max="20"
        min="5"
        on-event="onEvent()">
        </counter>
    
    </div>
    </div>
    
`}