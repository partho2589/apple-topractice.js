// sum
var number1 =10;
var number2 = 20;
var sum = number1 + number2;
// console.log(sum);
// array
var numbers =[20, 30, 40, 50, 60, 70, 80, 90, 100];
// numbers.push(110);
// numbers.pop();
var count = numbers.length;
// console.log(count);

// Detarmining the  area of a rectangle
function rectangleAreaDtem(length, width){
     var rectangleArea = length * width;
     return rectangleArea;
}
var length =12;
var width =8;
var RectangleArea =rectangleAreaDtem(length, width);
// console.log(RectangleArea);

// Detarmining the area of triangle

function dtarTriangleArea(base, height){
    let triangleArea = 0.5 * base * height;
    return triangleArea;
}

// console.log(dtarTriangleArea(20, 40));

// Detarmining the area of a circle

function dtarCircleArea( r){
    let circleArea= 3.1416 * r * r;
    return circleArea;
}
// console.log(dtarCircleArea ( 2))

// Convert to Centigrade at Fahrenheit temperature
function centigradeTemp(fahrenheit){
    let centigrad = ((fahrenheit - 32) * 5) / 9;
    return centigrad;
}
// console.log(centigradeTemp( 100));

function fahrenheitTem( centigrad){
    let fahrengeit= ((9 * centigrad) / 5 ) + 32 ;
    return fahrengeit;
}
// console.log(fahrenheitTem(37.77777777777778));

//Determine the largest of the three numbers

function largestNumber(a, b, c){

    // if(a > b && a > b){
    //   console.log( 'lergest Number a');
    //   }
    // if ( b > a && b > c){
    //     console.log('largest Number b')
    // }
    // if (c > a && c > b){
    //     console.log('largest Number c')
    // }
    
    //   return ;
}
// console.log(largestNumber( 90, 30, 20));

function largestTreeNumber ( a, b, c){
    var largesN = [a > b && a >c || b > a && b > c || c > a && c > b];
    if ( largesN){
        // console.log('largest ',);
    }
    // else{console.log(false)}
//  return largesN;
}
// console.log( largestTreeNumber( 30, 20, 40));


function treeleargestM(a, b, c){
     big =0;
    if(a > c){
        big=  a;
    }else{big=b;
    }
    if( c > big){
        big = c;
    }
    return big;
}
// console.log(treeleargestM(20, 150, 100));


function largestNumber( number1, number2, number3){
    largest =0;
    if (number1 > number2){
        largest = number1;
    }
    else{
        largest = number2;
    }
    if(number3 > largest){
        largest = number3;
    }
    return largest;
}
console.log(largestNumber(20, 50, 30));




