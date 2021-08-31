var array=[];
for(var i=0;i<5;i++){
    array[i]=(Math.floor(Math.random()*900))+99;
}

console.log(array);
array.sort();
console.log("max no ->"+array[array.length-1]+" min no is ->"+array[0]); 
