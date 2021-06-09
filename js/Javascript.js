let menu = document.querySelector(".menu-mobile");
let menuContent = document.querySelector(".menu nav ul");
let arrow = document.querySelectorAll(".img-arrow");
let scroll= document.querySelector(".contents-info");
let cont = 0;

menu.addEventListener("click", () =>{
    cont++;
    if(cont == 1){
        menu.style.float = 'right';
        menuContent.style.display = 'block';
        cont++;
    }else if(cont >= 2){
        menuContent.style.display = 'none';
        cont=0;
    }
})

window.addEventListener('resize', (e)=>{

    if(window.innerWidth >= 1000){
        menuContent.style.display = 'flex';
        console.log("cheguei");
    }

})

/* Scroll no carrosel blocos dos banners */

scroll.addEventListener("wheel", (e) => {
    e.preventDefault();

    if(e.deltaY > 0){
        e.target.scrollBy(300, 0);
    }
    else {
        e.target.scrollBy(-300, 0);
    }
});

/* Clique na seta do carrosel */

for(let i = 0; i <= arrow.length; i++){
    arrow[i].addEventListener("click", (e) => {
        if(arrow[i].parentNode.classList.contains("arrow-left")){
            scroll.scrollBy(-300, 0);
        }else{
            scroll.scrollBy(300, 0);
        }
    });
}
