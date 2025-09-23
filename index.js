
let page = document.querySelector('.page');
let [newsletterPage, newsletterSuccessPage] = page.querySelectorAll('.newsletter, .newsletter-success'); 

let subscribe = newsletterPage.querySelector('.btn-submit');
let dismissMsg = newsletterSuccessPage.querySelector('.btn-dismiss');


let toggleHidden = (e) => {
    e.preventDefault();
    
    [newsletterPage, newsletterSuccessPage]
        .forEach((el) => el.classList.toggle('hidden'));
}


subscribe.addEventListener('click', toggleHidden);
dismissMsg.addEventListener('click', toggleHidden);

// let formData = new FormData()