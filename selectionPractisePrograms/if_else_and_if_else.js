var args=process.argv.slice(2);

var a=parseInt(args.slice(0));
var b=parseInt(args.slice(1));
var c=parseInt(args.slice(2));

var expression1=a + b * c;
var expression2=a % b + c;
var expression3=c + a / b;
var expression4=a * b + c;

console.log("max expression ->");
if (expression1>expression2 && expression1>expression3 && expression1>expression4) {
    console.log("a + b * c");
} else if(expression2>expression1 && expression2>expression3 && expression2>expression4) {
    console.log("a % b + c");
}else if(expression3>expression1 && expression3>expression2 && expression3>expression4) {
    console.log("c + a / b");
}else if(expression4>expression1 && expression4>expression2 && expression4>expression3) {
    console.log("a * b + c");
}

console.log("min expression ->");
if (expression1<expression2 && expression1<expression3 && expression1<expression4) {
    console.log("a + b * c");
} else if(expression2<expression1 && expression2<expression3 && expression2<expression4) {
    console.log("a % b + c");
}else if(expression3<expression1 && expression3<expression2 && expression3<expression4) {
    console.log("c + a / b");
}else if(expression4<expression1 && expression4<expression2 && expression4<expression3) {
    console.log("a * b + c");
} 
