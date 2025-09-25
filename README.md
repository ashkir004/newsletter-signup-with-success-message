# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Mobile States
![](/screenshots/mobile.png)
![](/screenshots/mobile-error-state.png)
![](/screenshots/mobile-success.png)

#### Tablet States
![](/screenshots/tablet.png)
![](/screenshots/tablet-success.png)
![](/screenshots/tablet-error.png)

#### Desktop States
![](/screenshots/desktop.png)
![](/screenshots/desktop-error-state.png)
![](/screenshots/desktop-active-state.png)
![](/screenshots/desktop-success.png)


### Links

- Solution URL: [https://github.com/ashkir004/newsletter-signup-with-success-message](https://github.com/ashkir004/newsletter-signup-with-success-message)
- Live Site URL: [https://newsletter-sign-up-form-ashkir004.netlify.app/](https://newsletter-sign-up-form-ashkir004.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup with proper form structure
- CSS custom properties (CSS variables) for consistent theming
- CSS Flexbox and Grid for responsive layouts
- Mobile-first responsive design approach
- Vanilla JavaScript for form validation and state management
- HTML5 form validation with custom JavaScript enhancements

### What I learned

This project taught me valuable lessons about client-side form validation and state management:

**Form State Management with FormData API:**
```javascript
function updateUI() {
    formData = new FormData(newsletterForm);
    let data = Object.fromEntries(formData);
    let showEmail = newsletterSuccessPage.querySelector('.confirm-msg strong');  
    showEmail.textContent = data.user_email;
}
```

**HTML5 Validation**
```javascript
email.addEventListener('input', () => {
    if (email.validity.valid) {    
        subscribe.disabled = false;
    } else {
        subscribe.disabled = true;
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
```

### Continued development

Key areas I want to focus on in future projects:

- **Advanced Form Validation:**
  - Custom error messaging systems
  - Server-side validation integration

- **CSS Enhancements:**
  - CSS animations for state transitions

- **Accessibility Improvements:**

### Useful resources

- [MDN Form Validation Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Comprehensive guide to HTML5 form validation and the Constraint Validation API.


## Author

- Frontend Mentor - [@ashkir004](https://www.frontendmentor.io/profile/ashkir004)
- GitHub - [ashkir004](https://github.com/ashkir004)


