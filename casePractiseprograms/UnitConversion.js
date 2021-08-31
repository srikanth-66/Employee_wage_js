var args=process.argv.slice(2);
var value=parseInt(args.slice(0));
var key=parseInt(args.slice(1));

switch (key) {
    case 1:
        console.log(parseInt(args.slice(0))+"<- Feet to Inch ->"+(parseInt(args.slice(0))*12));
        break;
    case 2:
        console.log(parseInt(args.slice(0))+"<- Feet to Meter ->"+(parseInt(args.slice(0))/3.281));
        break;
    case 3:
        console.log(parseInt(args.slice(0))+"<- Inch to Feet ->"+(parseInt(args.slice(0))/12));
        break;
    case 4:
        console.log(parseInt(args.slice(0))+"<- Meter to Feet ->"+(parseInt(args.slice(0))*3.281));
        break;

    default:
        break;
}