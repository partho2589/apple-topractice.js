function GPANumber ( number){
    if ( number > 100){
        result = ' Sorry sir, Your number is incorrect'
    }
     else if ( number >= 80 ){
       result = 'A+'
 
    }
    else if ( number >= 70){
        result = 'A'
    }
    else if ( number >= 60){
        result = 'A-'
    }
    else if ( number >= 50){
        result = 'B'
    }
    else if ( number >= 40){
        result = 'C'
    }
    else if ( number >= 33){
        result = 'D'
    }
    else { result = 'F'}
    return result;
}

console.log ( GPANumber( 100));