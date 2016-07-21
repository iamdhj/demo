var Car = function(){
    this.test = 'Car';
    this.setTest = function(name){
        this.test = name;
    };

    this.print = function(){
        console.log(this.test);
    }
};

var Luxury = function(){this.test = 'Luxury';};
Luxury.prototype = new Car();
Luxury.prototype.constructor = Luxury;

var Benz = new Luxury();
Benz.setTest('Benz');
Benz.print();
console.log(Benz.__proto__.name);


var Data = {name: 'Data'},data = Object.create(Data);
console.log(data);