import {appModule} from './app.module';
import IAngularStatic = angular.IAngularStatic;
declare var angular:IAngularStatic;

angular.bootstrap(document,[
        appModule.name
])