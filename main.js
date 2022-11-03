function cambiar(){
    let text = document.getElementById('titular');
    text.style.color = "red";
    text.style.textAlign = "center";

}

function crearDiv(){
    let box = document.createElement("div");
    box.innerText = "Javascript permite crear páginas dinámicas.";
    // bloque.setAttribute("style", 'background:red; color: white; text-align: center')
    box.style.backgroundColor = "red";
    box.style.textAlign = "center";
    box.style.color = "white";
    // box.classList.add('subtitulo');
    
    document.body.appendChild(box);
}

function borrarDiv(){
    let rmv = document.getElementById('subtitulo');
    if (rmv) {
        rmv.remove();
    }

}

function ponerPie(fig){
    let text = fig.querySelector('figcaption');
    let img = fig.querySelector('img');
    if (fig.innerText ==''){
        text.innerText = img.alt;
    }
    else{
        text.innerText = '';
    }
}

function fuentesImg(){
    let images = document.querySelectorAll("img");
    images.forEach((image) => {
        document.getElementById('fuentes').appendChild(document.createElement('div')).innerText = image.src;
    });

}    

function togleClase(){
    let header = document.getElementById('titular');
    if (header.classList == "") {
        header.classList = "activo";
    } else {
        header.classList = "";        
    }

}

function intercalar(){
    let header = document.getElementById('titular');
    let newDiv = header.closest('header').appendChild(document.createElement('div'));
    newDiv.innerText = "Página Modelo";
    newDiv.classList = "destacar";
    console.log(newDiv);
}

function cambiaImg(){
    let centralImg = document.getElementsByClassName("carrusel")[0];
    centralImg.setAttribut("data-img") = 1;
    // if (centralImg.getAttribute(data-img) == 0) {
        
    // } else {
        
    // }
    console.log(centralImg);
}

function toggle(){

}