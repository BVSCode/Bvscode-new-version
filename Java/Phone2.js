burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
homeselectresp = document.querySelector('.home-select-resp')


burger.addEventListener('click', ()=>{
   navbar.classList.toggle('h-nav');

   setTimeout(() => {
      navlist.classList.toggle('v-class');
   }, 100);
   
})