function intarestMany(taka, year, persent){
    var persent = taka * (10 / 100)
    var years = persent * year;
    var intarest = taka + years;
    // var totalTaka = intarest + taka;
    return intarest;

}
console.log(intarestMany(100000, 1,));