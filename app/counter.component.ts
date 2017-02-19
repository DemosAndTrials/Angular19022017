import IComponentOptions = angular.IComponentOptions;

class CounterComponent{
    value:number = 0;
    step:number;

    set init(val){
        this.value = val;
    }
    onUp(){ this.value += this.step;}
    onDown(){ this.value -= this.step;};
}

export const counterComponent:IComponentOptions = {
    controller: CounterComponent,
    bindings:{
      init: '<',
      step: '<'
    },
    template:`
    <div>
        <button ng-click="$ctrl.onUp()">Up</button>
        {{$ctrl.value}}
         <button ng-click="$ctrl.onDown()">Down</button>
    </div>
`}