function leapyear(year)
{
    var check= (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if(check===true){
        console.log("leap year");
    }else{
        console.log("not leap year");
    }
}

var args=process.argv.slice(2);
console.log(parseInt(args.slice(0)));
leapyear(parseInt(args.slice(0)));
