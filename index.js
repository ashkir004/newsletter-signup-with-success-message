
let page = document.querySelector('.page');
let [newsletterSubscribePage, newsletterSuccessPage] = page.querySelectorAll('.newsletter, .newsletter-success'); 
let newsletterForm = newsletterSubscribePage.querySelector('.newsletter__form');
let subscribe = newsletterSubscribePage.querySelector('.btn-submit');
let dismissMsg = newsletterSuccessPage.querySelector('.btn-dismiss');

let formData = {}


let toggleHidden = () => {
    [newsletterSubscribePage, newsletterSuccessPage]
        .forEach((el) => el.classList.toggle('hidden'));
}

let showSuccessMsg = (e) => {
    e.preventDefault();

    toggleHidden();

    formData = new FormData(newsletterForm);
    let data = Object.fromEntries(formData);

    let showEmail = newsletterSuccessPage.querySelector('.confirm-msg strong');  
    showEmail.textContent = data.user_email;
}

let dismissSuccessMsg = (e) => {
    formData = {}
    toggleHidden()
}

subscribe.addEventListener('click', showSuccessMsg);
dismissMsg.addEventListener('click', dismissSuccessMsg);


