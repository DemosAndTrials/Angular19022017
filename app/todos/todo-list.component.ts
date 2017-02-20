import IComponentOptions = angular.IComponentOptions;

let counter = 0;

class Task {
    id: number;
    desc: string;
    isDone: boolean;

    constructor(desc: string, isDone: boolean = false) {
        this.id = counter++;
        this.desc = desc;
        this.isDone = isDone;
    }
}

class TodoListComponent {
    tasks: Task[] = [];
    desc: string;

    addTask(desc) {
        this.tasks.push(new Task(desc));
        this.desc = "";
    }

    removeTask(task) {
        console.log(task)
        var i = this.tasks.indexOf(task);
        this.tasks.splice(i, 1);
        console.log(i);
    }

    get countSelected() {
        return this.tasks.filter(t => t.isDone).length;
    }

}

export const todoListComponent: IComponentOptions = {
    controller: TodoListComponent,
    template: `
        <inpit>
          <h1>Todo List Component</h1>
           <div class="form-inline">
             <input type="text" ng-model="$ctrl.desc" class="form-control"/>
             <button ng-click="$ctrl.addTask($ctrl.desc)" class="btn btn-primary">Add Task</button>
          </div>
          <hr>
         
          <div ng-repeat="task in $ctrl.tasks">
            
            <form class="form-inline">
  <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon"><input type="checkbox" ng-model="task.isDone" ng-click="$ctrl.countSelected()"></div>
      <input type="text" class="form-control" value="{{task.desc}}" disabled>
      <div class="input-group-addon"><button type="button" class="close danger" aria-label="Close" ng-click="$ctrl.removeTask(task)"><span aria-hidden="true">&times;</span></button></div>
    </div>
  </div>
 
</form>

          </div>
          
           <hr>
           <h3>Total: <span class="badge">{{$ctrl.tasks.length}}</span> Selected: <span class="badge">{{$ctrl.countSelected}}</span></h3>
          
           
        </div>
`
}