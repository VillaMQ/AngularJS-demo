let app = angular.module('app', []); // without brakets calls prev module

// let app = angular.module('app', []).run(['$rootScope', function (root) {
//   root.taxPercent = .15;
// }]);

app.controller('user', ['$scope', '$rootScope', function (s, root) {
  // this.name = "Omar Villanueva";
  root.taxPercent = .15;
  s.name = "Omar Villanueva";
  s.alias = 'Villa';
  s.count = 1;
  s.fib = 1;
}]);

app.controller('job', ['$scope', function (s) {
  s.salary = 1000;
  s.getTotal = function () {
    return s.salary * 12;
  }
}]);

app.controller('taxes', ['$scope', '$rootScope', function (s, r) {
  s.getTaxes = function (sal) {
    return sal * r.taxPercent;
  }
  s.counter01 = function () {
    s.count += s.count;
  }

  s.last = 1;
  s.fibonacci = function () {
    let keep = s.last
    s.last = s.fib;
    s.fib = s.fib + keep;
  }

}]);

    //ng-bind >> one-way
    //ng-model >> two-way
    //ng-click >> one-time
