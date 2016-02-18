/**
 * Created by olexandr on 18.02.2016.
 */
//app/src/main/transaction.controller.js
angular.module("ngmkdev").controller('TransactionsCtrl', function($scope){
    this.transactions = [
        { amount: 500.00, date: "08/08/2014", description: "Подписка на журнал" },
        { amount: 150.00, date: "07/08/2015", description: "Кокаин" }
    ]
});
