import IComponentOptions = angular.IComponentOptions;

let counter = 0;

class  Task{
        id:number;
        desc:string;
        isDone:boolean;

        constructor(desc:string, isDone:boolean = false){
                this.id = counter++;
                this.desc = desc;
                this.isDone = isDone;
        }
}

class TodoListComponent{
        tasks:Task[] = [];
        desc:string;

        addTask(desc){
                this.tasks.push(new Task(desc));
                this.desc = "";
        }

        get countSelected(){
              return this.tasks.filter(t=>t.isDone).length;
        }

}

export const todoListComponent : IComponentOptions = {
        controller: TodoListComponent,
        template:`
        <inpit>
          <h1>Todo List Component</h1>
          <input type="text" ng-model="$ctrl.desc"/>
          <button ng-click="$ctrl.addTask($ctrl.desc)">Add Task</button>
          <hr>
          <div ng-repeat="task in $ctrl.tasks">
          <input type="checkbox" ng-model="task.isDone" ng-click="$ctrl.countSelected()">
          {{task.desc}}
          </div>
           <hr>
           <h3>Total: {{$ctrl.tasks.length}}</h3>
           <h3>Total: {{$ctrl.countSelected}}</h3>
        </div>
`}