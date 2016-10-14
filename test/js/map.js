var square, numbers = [1, 2, 3],
    func = function(a){ return a*a; };

square = numbers.map(func.bind(null, 4));
console.log(numbers, square);
