function english() {
    if (document.getElementById('check').checked) {
        window.location.href = "index.html";
    } else {
        window.location.href = "index-en.html";
    }
}

//botao responsivo
//function animar(){
 //   const btn = document.getElementById('btn-menu')
   // btn.classList.toggle('active')

//}

//menu responsivo
menudiv.addEventListener('click', animar)
function animar(){
    const menudiv = document.getElementById('menu-mobile')
    const btn = document.getElementById('btn-menu')
    menudiv.classList.toggle('open')
    btn.classList.toggle('active')
}