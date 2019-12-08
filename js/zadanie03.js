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