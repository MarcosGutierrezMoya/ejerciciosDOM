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

function toggleClase(){
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
    let centralDivImg = document.getElementsByClassName("carrusel")[0];
    let centralImg = centralDivImg.firstElementChild;
    let images = document.querySelectorAll("img");

    if (centralDivImg.getAttribute("data-img") == 0) {
        centralDivImg.setAttribute("data-img",1);
        centralImg.src = images[1].src;
    }
    else if (centralDivImg.getAttribute("data-img") == 1) {
        centralDivImg.setAttribute("data-img",2);
        centralImg.src = images[2].src;
    }
    else {
        centralDivImg.setAttribute("data-img",0);
        centralImg.src = images[0].src;
    }
}

function toggle(){
    let menu = document.getElementsByClassName("botones")[0];
    let buttons = menu.children;
    if (buttons[1].style.display != "none") {
        for (let i = 1; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
    } else {
        for (let i = 1; i < buttons.length; i++) {
            buttons[i].style.display = "inline-block";
        }
    }

    // let buttons = menu.childNodes;
    // if (buttons[3].style.display != "none") {
    //     for (let i = 3; i < buttons.length; i+=2) {
    //         buttons[i].style.display = "none";
    //     }
    // } else {
    //     for (let i = 3; i < buttons.length; i+=2) {
    //         buttons[i].style.display = "inline-block";
    //     }
    // }
}