let carA = {
    mark: 'Ford',
    color: 'red',
    type: {
        motor: 3.0,
        fuel: 'benzin'
    }
};


let carB = {
    mark: 'Mercedes',
    color: 'green',
    type: {
        motor: 3.2,
        fuel: 'diesel'
    }
};

// console.log (carA);
// console.log (carB);

carB.type= carA.type;

console.log (carB.type);



