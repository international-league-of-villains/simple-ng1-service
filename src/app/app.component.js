import ExistingNameService from './existing-name/existing-name.service';

class AppComponentCtrl {
  static $inject = ['$scope', ExistingNameService.name]
  title = 'Villain Name Filter'
  nameFail = '';
  nameSuccess = '';
  constructor ($scope, existingNameService) {
    existingNameService.checkName('doctor', 'evil')
      .then((res)=>{
        this.nameFail = res[0];
        $scope.$digest();
      })
      .catch((err) => {
        //...no error handling here
      });

      existingNameService.checkName('Villian', 'Hero')
      .then((res)=>{
        if (res.length < 1) {
          this.nameSuccess = {
            repsonse: 'Proceed...'
          };
        }
        $scope.$digest();
      })
      .catch((err) => {
        //...no error handling here
      });

  }
}

export const AppComponent = {
  template: `<h2>{{$ctrl.title}}</h2>
  <div>
  <p><h3>If you selected Doctor Evil, the service would respond:</h3></p> 
  <p>{{::$ctrl.nameFail.repsonse}}</p>
  </div>
  <div>
  <p><h3>If you selected a valid name, the service would respond:</h3></p> 
  <p>{{::$ctrl.nameSuccess.repsonse}}</p>
  </div>`,
  controller: AppComponentCtrl
}