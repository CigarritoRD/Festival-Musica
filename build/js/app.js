
document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    crearGaleria();
    navScroll(); 
    scrollNav(); 
}

function navScroll() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
        body.onscroll = function(){
           
        

            if(window.scrollY >= 510){

                header.classList.add('fixed')
            }else{
                header.classList.remove('fixed');
            }
    
        }
        
        
}  

function crearGaleria() {
    const galeria = document.querySelector('.galeria-contenedor');

   for (let i = 1; i <=12; i++) {
        const imagen = document.createElement('picture');
       
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" src="build/img/thumb/${i}.jpg" width="200" height="300"
            alt="imagen galeria">
        `;
        imagen.onclick = function () {
            const imagenGrande = document.createElement('picture');

                imagenGrande.innerHTML = `
                    <source srcset="build/img/grande/${i}.avif" type="image/avif">
                    <source srcset="build/img/grande/${i}.webp" type="image/webp">
                    <img loading="lazy" src="build/img/grande/${i}.jpg" width="200" height="300"
                        alt="imagen galeria">
        `;

            const overlay = document.createElement('div');
            overlay.classList.add('overlay-modal');
            overlay.appendChild(imagenGrande);
            
            const x = document.createElement('p');
                x.textContent ='X';
                x.classList.add('cerrar-modal');
            
                overlay.appendChild(x); 

            const body = document.querySelector('body');
            body.classList.add('blockscroll');
         
            body.appendChild(overlay);
            cerrarModal(overlay, body);
   }
   galeria.appendChild(imagen);
};

// revisa si existe overlay, si existe, llama al padre de overlay y elimina el hijo overlay

function cerrarModal(overlay, body) {
    overlay.addEventListener('click', function () {

        if (overlay) {
            overlay.parentNode.removeChild(overlay);
            body.classList.remove('blockscroll');
            
        }
    })
}

};


