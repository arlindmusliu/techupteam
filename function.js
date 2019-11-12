/*var catName = "Quincy";
var qouts;

var catName = "Beau";

function catTalk(){
    "use strict";

    catName = "Oliver";
    qoute= catName + "says Meow!"
    {
        catTalk();
    }
}
*/
/*function checkScope()
{
    "use strict";
    let i= "function scope"
    if(true)
    {
       let  i="block scope";
        console.log ("Block socpe i is: ", i);
    }
        console.log("Function scope i is: ", i);
        return i;
    
}

checkScope(); */

/*function printManyTimes(str){
    "use strict";

    const SENTENCE = str + "is cool!";

    for (let i= 0; i< str.length; i+=2){
        console.log ( SENTENCE );
    }
    }
printManyTimes("freeCodeCamp");*/

/*const s= [5, 7, 2];
function editInPlace() {
    "use strict";

    //s = [2,5,7];
    s[0]=2;
    s[1]=5;
    s[2]=7;
}
editInPlace();
console.log(s);*/

/*function freezeObj (){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();*/


//const magic =  () => new Data();

/*const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [2, 4, 5])); */

/*const incremet = (function(){
    return function increment(number, value=1){
    return number + value;
};
})();
console.log (incremet(5,2));
console.log (incremet(5)); */

/*const sum =  (function(){
    return function sum(...args) {
       // const args = [x, y, z ];
        return args.reduce((a, b) => a+b, 0);
     };
})();
console.log (sum(1, 2, 3, 4));*/





 



