// var acc = document.getElementsByClassName("accordion");

// function init(acc){
    var acc = document.getElementsByClassName("accordion");
    // init(acc); 
    var i;
    // alert(acc.length);

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
//}

// class ItcModal {
//     #template = '<div class="itc-modal-backdrop"><div class="itc-modal-content"><div class="itc-modal-header"><div class="itc-modal-title">{{title}}</div><span class="itc-modal-btn-close" title="Закрыть">×</span></div><div class="itc-modal-body">{{content}}</div>{{footer}}</div></div>';
// }


// btn.addEventListener("click", function () {
//     modal.classList.add("modal_active");

//     closeBtn.addEventListener("click", closeModal);

//     function closeModal() {
//         modal.classList.remove("modal_active");

//         closeBtn.removeEventListener("click", closeModal);

//         modal.removeEventListener("click", hideModal);
//     }

//     modal.addEventListener("click", hideModal);

//     //Закрытие при клике вне зоны модального окна
//     function hideModal(event) {
//         if (event.target === modal) {
//             closeModal();
//         }
//     }
// });
//     const cookies = document.getElementById("cookies");
//     const cookiesBtn = document.getElementById("cookies__btn");

//     cookiesBtn.addEventListener("click", function () {
//         cookies.style.display = "none";
        
//     });


// Модальное окно 2 вариант
const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");

cookiesBtn.addEventListener("click", function () {
    cookies.style.display = "none";
});
