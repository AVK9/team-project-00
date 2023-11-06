import throttle from 'lodash.throttle';
import IMask from 'imask';
const STORAGE_KEY = 'feedback-form-state';

let isValid = false;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;


  const refs = {
      sabmitFormBtn: document.querySelector('.btn-push-modal'),
      formRentYacht: document.querySelector('#form-rent-yacht')
    // closeModalBtn: document.querySelector("[data-modal-close]"),
    // modal: document.querySelector("[data-modal]"),
};
const { name, email, tel, comment } = refs.formRentYacht.elements;
let dataSet = {};

refs.formRentYacht.addEventListener('input', throttle(onInputHandler, 500));
function onInputHandler(e) {
    dataSet[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataSet));
    console.log(dataSet);
}
    // console.log(name.value);
function validateInput() {
       if (!name.value) {
         isValid = false;
         name.classList.add('error-border');
    } else {
         name.classList.remove('error-border');
    };
    if (!emailPattern.test(email.value)) {
        isValid = false;
        email.classList.add('error-border');
    } else {
       email.classList.remove('error-border');
    };
 if (!phonePattern.test(tel.value)) {
         isValid = false;
        tel.classList.add('error-border');
    } else {
        tel.classList.remove('error-border');
    };
  }

refs.sabmitFormBtn.addEventListener("click", onSabmitForm);
function onSabmitForm(e) {
    e.preventDefault();
    console.log(refs.sabmitFormBtn);
    validateInput();
    // submitForm(e);
  }

//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     if (isValid) {
//       refs.modal.classList.toggle("is-hidden");
//       if (!refs.modal.classList.contains("is-hidden")) {
//         playSoundIfFieldsFilled();
//       }
//     }
//   }

//   function submitForm(event) {
//     event.preventDefault();
//     if (isValid) {
//       // Your submission logic here (you can make an API call or any other actions needed)
//       // ...

//       // Play melody after submission
//       playMelody();

//       // Clear form inputs after successful submission
//       clearFormInputs();

//       // Show the modal or do any other actions you want after successful submission
//       toggleModal();
//     }
//   }

//   function clearFormInputs() {
//     const form = document.getElementById("rent-yacht-form");
//     form.reset();
//   }


//   function playMelody() {
//     // Replace this with your sound-playing logic for the melody
//     // For simplicity, we'll assume an HTML5 audio element with ID "clickSound"
//     const clickSound = document.getElementById("clickSound");
//     clickSound.currentTime = 0;
//     clickSound.play();
//   }

//   function playSoundIfFieldsFilled() {
//     const inputName = document.getElementById("user-name");
//     const inputEmail = document.getElementById("user-email");
//     const inputPhone = document.getElementById("user-phone");

//     const inputNameValue = inputName.value.trim();
//     const inputEmailValue = inputEmail.value.trim();
//     const inputPhoneValue = inputPhone.value.trim();
//   }



// const phoneEl = document.getElementById('user-tel');
const maskOptionsPhone = {
    mask: '+38(000)000-00-00',
    lazy: true
} 
const maskPhone = new IMask(tel, maskOptionsPhone);