function time()
{
today=new Date();
h=today.getHours();
h=("0" + h).slice(-2);
m=today.getMinutes();
m=("0" + m).slice(-2);
document.getElementById('timeH').innerHTML=h+":"+m;
setTimeout('time()',500);
}


function abrir(URL) {
    window.open(URL, 'janela', 'width=auto, height=auto, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}

function abrir2() {
    URL="https://uol.com.br";
    window.open(URL, 'janela', 'width=660, height=510, top=100, left=699, scrollbars=yes, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}

function msg() {
    alert("E-mail encaminhado..");
}