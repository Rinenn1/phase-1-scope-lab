var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    console.log(customerName);
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer (){
    bestCustomer = 'maybe bob'
}
//const overwriteBestCustomer = () => bestCustomer = 'maybe bob'


const leastFavoriteCustomer = 'surely bob';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'surely not bob';
}

changeLeastFavoriteCustomer();

