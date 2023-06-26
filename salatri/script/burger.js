// (document).ready(function() {
//     ('.menu__burger').click(function(event) {
//         ('.menu__burger','menu__content').toggleClass('active');
//     });
// });

let menuBtn = document.querySelector('.menuu-btn');
let menu = document.querySelector('.menuu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})