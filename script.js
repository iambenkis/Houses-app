let loadMore = document.querySelector('.more');
let crntitem = 4;
let items = document.querySelectorAll('.item');
let pops = document.querySelectorAll('.popup-content');
let container = document.querySelector('.modal-container')
let leaves = document.querySelectorAll('.leave')
 
// menu deroulant 

let menu = document.querySelector('.menu')
let nav_menu = document.querySelector('.nav-list')
let imgs = document.querySelectorAll('.item-img')
let description = document.querySelectorAll('.description')
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

imgs.forEach((img ,index )=> {
        img.addEventListener('click',function(){ 
           pops[index].classList.add('active') 
           container.classList.add('active')
        })
} )

const leavePop = () => {
        pops.forEach(pop => {
                pop.classList.remove('active')
                container.classList.remove('active');
        })
}

leaves.forEach(leave =>{
        leave.addEventListener('click',leavePop);
})


 
 