document.write("<h1>1 to 20 Namtha use for loop</h1>")
for(i = 1; i <= 20; i++){
    document.write("<div class='one'>")
    for(j = 1; j <= 10; j ++){
        let ruselt = i * j
        console.log(ruselt);
        document.write(i + " x " + j + " = " + ruselt + "</br>")    
    }
    document.write("</div>")
}
document.write("<h1>1 to 20 Namtha use while loop</h1>")
let a = 0;
while(a <= 19) {
    a++
    let b = 1;
    document.write("<div class='two'>")
    while(b <= 10){
        let ruselt2 = a * b
        console.log(ruselt2);
        document.write(a + " x " + b + " = " + ruselt2 + "</br>")
        b++
    }
    document.write("</div>")
}