import './styles.scss';
import 'angular';
import 'angular-material';
import { AppComponent } from './app/app.component';
import ExistingNameService from './app/existing-name/existing-name.service';

angular.module('NameService', ['ngMaterial'])
.component('appComponent', AppComponent)
.service(ExistingNameService.name, ExistingNameService);

angular.bootstrap(document, ['NameService']);