const bigestSumOfTwoElements = ( arr ) => {
    if ( arr.length === 0 ) {
        return false;
    } 
        return arr.sort( ( a, b ) => {
            return b - a;
        } ).slice( 0, 2 ).reduce( ( a, b ) => {
            return a+b;
        }, 0 );
    };
    console.log(bigestSumOfTwoElements([1,2,3,4]));
    console.log(bigestSumOfTwoElements([]));
    console.log(bigestSumOfTwoElements([15,2,35,4]));
    console.log(bigestSumOfTwoElements([67]));
