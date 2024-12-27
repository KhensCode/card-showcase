document.addEventListener('DOMContentLoaded' , () => {
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click' , ()=> {
const card = closeButton.parentElement;
card.remove();
})
})
