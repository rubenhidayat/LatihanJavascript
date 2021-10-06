var duplicateZeros = function(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]==0){
            arr.splice(i+1, 0, 0);
            i=i+1           
        }
    }
    if(arr.length>8){
            arr.splice(arr.length-(arr.length-8));
    }
    
    alert(arr);

}
var x = [1,2,3];
duplicateZeros(x);
// x.splice(2);

// console.log(x);
// if(x.length>8){
//     x.splice(x.length-(x.length-8));
// }

// alert(x);