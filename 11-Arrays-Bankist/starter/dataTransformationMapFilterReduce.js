'use strict';
// we want create new arrays from other arrays

// 1) map(similare to forEach but it create a new array based on the original one )
// 2) filter (create a new array based on the original one contain only element that pass the test)
// 3) reduce(all elements of the original array to one single value (some ,avg...))
// 4)channing between them

// 1) map(similare to forEach but it create a new array based on the original one )
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd=1.1;
const movementUSD=movements.map(mov=> mov*eurToUsd)
console.log(movements);//(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementUSD);//(8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

const movementsDescriptions=movements.map((mov,i,arr)=>{
    if(mov>0) {
        return `Movement ${i+1}: You deposited ${mov}`;
    } else {
        return `Movement ${i+1}: You withdrew ${Math.abs(mov)}`;
    }
    
})
console.log(movementsDescriptions);//(8) ['Movement 1: You deposited 200', 'Movement 2: You deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You deposited 70', 'Movement 8: You deposited 1300']

// 2) filter (create a new array based on the original one contain only element that pass the test)
const deposite=movements.filter(function(mov){
    return mov>0;
});


console.log(deposite);//(5) [200, 450, 3000, 70, 1300]

// 3) reduce(all elements of the original array to one single value (some ,avg...))

console.log(movements);
// accumulator ->SNOWBALL
const balance=movements.reduce(function(acc,cur,i,arr){
    return acc+cur;
},0);
console.log(balance);//3840

// OR
let balance2=0;
for(const mov of movements) balance2+=mov;
console.log(balance2)//3840

// get the maximum
const maxValue=movements.reduce((acc,curr)=>curr>acc?curr:acc,movements[0]);
console.log(maxValue);//3000

// 4)channing between them

const depositMount=movements.filter(mov=>mov>0).map(mov=>mov*1.1).reduce((acc,curr)=>acc+=curr,0);
console.log(depositMount);//5522.000000000001
