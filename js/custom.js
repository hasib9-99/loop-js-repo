for(i = 1; i <= 20; i++){
    document.write("<div class='one'>")
    for(j = 1; j <= 20; j ++){
        let ruselt = i * j
        console.log(ruselt);
        document.write(i + " x " + j + " = " + ruselt + "</br>")    
    }
    document.write("</div>")
}