function divide() {
    var txt;
    txt = document.getElementById('a').value;
    var text = txt.split(".");
    var str = text.join('.</br>');
    document.write(str);
}