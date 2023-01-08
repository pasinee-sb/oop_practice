const color = "red";
const obj= {};
obj.color = "#3723FF";
obj[color] = "#3723FF";
obj["color"] = "blue";

for (let [key,val] of Object.entries(obj)){
    console.log(key, val)
}

const add = (x,y) => x+y;
const divide = (x,y)=> x/y;
const multiply = (x,y)=> x*y;
const minus = (x,y)=>x-y;

const rightTriangle = {
    a : 9,
    b: 12,
    getArea : function(){
        return this.a * this.b /2;
    },
    getHypotenuse(){
        return Math.sqrt(this.a**2 + this.b**2);
    }
};

// function Triangle(a,b) {
// this.a =a;
// this.b = b;
// this.getArea = function(){
//     return this.a * this.b /2;
// };
// this.getHypotenuse =function(){
//     return Math.sqrt(this.a**2 + this.b**2);
// };
// }
// const t1 = new Triangle(3,4);
// const t2 = new Triangle(4,5);

// Array.prototype.push = function(val){
// console.log(`So you want to add ${val}?`);
// console.log("don't feel like it");
// }

class Triangle {
    constructor (a,b,c){
        for (let side of [a,b,c]){
        if(!Number.isFinite(side)|| side<=0){
            throw new Error ('Sides must be positive numbers!')
        }
    }
        this.a = a;
        this.b = b;
        this.c =c;
    }
    greet(){
        console.log("hi from the triangle");
    }
    display ( ) {
        console.log(`triangle with the size of ${this.a} and ${this.b} and ${this.c}`);
    }
    getArea(){
        const {a,b,c} = this;
const s =(a+b+c)/2;
return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    isBig(){
        return this.getArea() > 50;
    }
}
// const tri1 = new Triangle(3,4,5);

// const tri2 = new Triangle(4,5,6);
// const tri3 = new Triangle(30,40,50);
class RightTriangle extends Triangle {
    constructor (a,b,c){
       
       
    if (a*a + b*b !== c*c){
        throw Error("The C side isn't right");
    }
      super(a,b,c)
    }
   
}

