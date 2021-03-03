
let buttonRefuse = document.querySelector('.refuse');
let modal = document.querySelector('.modal-wrapper');
let close= document.querySelector('.link-back')


buttonRefuse.addEventListener("click",function (){
  modal.classList.add('show')
});
close.addEventListener("click",function () {
  modal.classList.remove('show')
});
