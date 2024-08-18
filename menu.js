let elementosLista = document.querySelectorAll('.list_button--click');

elementosLista.forEach(elemento=>{
    elemento.addEventListener('click', ()=>{
        elemento.classList.toggle('arrow');
        
        let height = 0;

        let menu = elemento.nextElementSibling;
        if(menu.clientHeight == 0){
            height = menu.scrollHeight;
        }

        menu.style.height = height + "px";
    })
})