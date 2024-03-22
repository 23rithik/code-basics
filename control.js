// ternary operator
let x=6;
// x<10 failed otherwise pass
console.log(x<10?'failed':'pass');
// loops
// for loop
for (let index = 1; index <= 5; index++) 
{
    console.log(index);
    
}
let fruits=["apple","mango","grapes","orange","banana"];
for(let i=0;i<=4;i++)
{
    console.log(fruits[i]);
}
// for of loop for Array
for(x of fruits)
{
    console.log(x);
}
// for each
fruits.forEach(element => 
{
    console.log("for each");
    console.log(element);
});
let person={name:'rithik',age:20};
// for in
for (x in person) 
{
    console.log(person[x]);
}
// while loops entry controlled loops
let j=0;
while(j<5)
{
    console.log(j+1);
    j++;
}
let i=0;
while(i<=fruits.length)
{
    console.log(fruits[i]);
    i++;
}
// do while exit controlled loop
let p=0;
do {
    console.log(p);
    p++;
} while (p<=5);