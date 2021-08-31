var args = process.argv.splice(2);
var sum=0;
for(var i=1;i<parseInt(args);i++){
    sum=sum+(1/i)
}
console.log(args.slice(0)+" <-> "+sum); 
