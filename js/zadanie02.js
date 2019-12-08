function myTable(){
    var newArray1 = [1,3];
    var newArray2 = [3,5];
    var newArray3 = concatArray(newArray1, newArray2);
    
    for(var i= 0; i < newArray3.length; i++){
        document.write(newArray3[i] + '  ');
    }
}


function concatArray(array1, array2){
    
    var newArray = [];

    var i =0;
 
    for(var j= 0; j < array1.length; j++,i++){
         newArray.push(array1[j]);
    }
    for(var j= 0; j < array2.length; j++){
         newArray.push(array2[j]);
    }

    return newArray;
    
}