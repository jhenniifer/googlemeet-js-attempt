const close = document.getElementById('close')
const open = document.getElementById('open')
openIcon =  document.getElementById('open-icon')

open.addEventListener('click', function (){
  document.getElementById('modal').style.display = 'block'
  openIcon.classList.add('change__color')
// document.getElementById('modal').classList.remove('remove');
})

close.addEventListener('click', function (){
  document.getElementById('modal').style.display = 'none'
  openIcon.classList.remove('change__color')
// document.getElementById('modal').classList.add('remove');
})