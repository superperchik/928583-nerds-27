var modalFeedback = document.querySelector('.modal-feedback');
var buttonOpenFeedback = document.querySelector('.js-open-feedback-form');
var buttonCloseModal = document.querySelector('.modal-close');

buttonOpenFeedback.addEventListener('click', function (event) {
    event.preventDefault();
    modalFeedback.classList.add('modal-feedback-show');
});

buttonCloseModal.addEventListener('click', function (event) {
   event.target.parentElement.classList.remove('modal-feedback-show');
});