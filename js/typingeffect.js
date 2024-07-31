var i = 0;
var txt = '<br>Makmur berarti sejahtera dan tentram menggambarkan kehidupan anggota<br>yang sanggat senang jiwa dan raga';
var speed = 50;

function typeWriter() {
if (i < txt.length) {
    // Check if the current character is a line break
    if (txt.charAt(i) === "<" && txt.substr(i, 4) === "<br>") {
    document.getElementById("demo").innerHTML += "<br>";
    i += 4; // Skip over the <br> tag
    } else {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    }
    setTimeout(typeWriter, speed);
}
}