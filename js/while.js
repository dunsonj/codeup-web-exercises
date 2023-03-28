//while

var i = 2;

while (i <= 65536) {
    console.log(+i);
    i *= 2;
}

//do-while



var allCones = Math.floor(Math.random() * 50) + 50;
var i = 6;

do {

  var clientSale =  Math.floor(Math.random(i) * 5) + 1;
    console.log('the amount of cones sold were: ' + clientSale);
    i++;
} while (i <6);
