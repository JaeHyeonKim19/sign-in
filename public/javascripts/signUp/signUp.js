import {signUpHtml} from './signUpHtml.js';
import {signUpValidationHandler} from './signUpValidation.js';
import {termModal} from './termModal.js';
import {interestTag} from './interestTag.js';
import {reset} from './reset.js';

const signUpHandler = () => {
    const signUpLink = document.querySelector('.sign_up');
    signUpLink.addEventListener('click', () => {
        document.body.innerHTML = signUpHtml;
        // sign up events
        for(let handler in signUpValidationHandler){
            signUpValidationHandler[handler]();
        }
        termModal.termModalPopupHandler();
        interestTag.tagHandler();
        reset.registerResetEvent();
    });
}

export {signUpHandler};