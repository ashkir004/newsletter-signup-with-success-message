
let page = document.querySelector('.page');
let [newsletterSubscribePage, newsletterSuccessPage] = page.querySelectorAll('.newsletter, .newsletter-success'); 
let newsletterForm = newsletterSubscribePage.querySelector('.newsletter__form');
let subscribe = newsletterSubscribePage.querySelector('.btn-submit');
let dismissMsg = newsletterSuccessPage.querySelector('.btn-dismiss');
let email = newsletterSubscribePage.querySelector('.form-row #email');

let formData = {};

function updateUI() {
    formData = new FormData(newsletterForm);
    let data = Object.fromEntries(formData);

    let showEmail = newsletterSuccessPage.querySelector('.confirm-msg strong');  
    showEmail.textContent = data.user_email;
}

function toggleHidden() {
    [newsletterSubscribePage, newsletterSuccessPage]
        .forEach((el) => el.classList.toggle('hidden'));
}

function showSuccessMsg() {
    toggleHidden();
    updateUI();
}

function dismissSuccessMsg() {
    formData = {};
    toggleHidden();
    
    email.value = '';
    email.focus();
}

email.addEventListener('input', () => {
    if (email.validity.valid) {
        subscribe.disabled=false;
    } else {
        subscribe.disabled=true;
    }
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.validity.valid) {
        showSuccessMsg();
    } else {
        email.focus();
    }
});

dismissMsg.addEventListener('click', dismissSuccessMsg);
