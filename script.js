let loadMore = document.querySelector('.more');
let crntitem = 4;
let items = document.querySelectorAll('.item');
 
// menu deroulant 

let menu = document.querySelector('.menu')
let nav_menu = document.querySelector('.nav-list')
let ismore = 0;

loadMore.addEventListener('click',() => { 
        //items[crntitem+1].classList.add('load-more'); 
    
        ismore ? ismore = 0: ismore =1; 
                for(let i = crntitem; i< crntitem + 4 ;i++){
                        items[i].style.display = 'inline-block'
                }
                crntitem +=4;    
console.log(ismore)
})



let myMenu;
menu.addEventListener('click',() => {
        myMenu = !myMenu;
        myMenu?
        nav_menu.style.display = 'flex':
        nav_menu.style.display = 'none'
})

 