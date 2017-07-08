class ExistingNameService {
  static $inject = ['$http']
  constructor($http) {
    this.$http = $http;
    this.checkName = this.checkName.bind(this);
  }

  getExistingNames () {
    let promise = new Promise((resolve, reject)=>{
      this.$http.get('existing-villain-names.json')
        .then((repsonse)=>{
          resolve(repsonse.data);
        });
    });
    return promise;
  }

  checkName (firstName, lastName) {

    let promise = new Promise((resolve, reject)=>{
      this.getExistingNames()
      .then((names)=>{
        let matchedNames = names.filter((val)=> {
          if (val.fullname.toLowerCase() === (firstName + ' ' + lastName).toLowerCase()) {
            return val.repsonse;
          }
          return false;
        });
        resolve(matchedNames);
      });
    });

    return promise;
  }

}

export default ExistingNameService;