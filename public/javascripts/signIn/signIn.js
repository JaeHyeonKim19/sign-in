import {signInHtml} from './signInHtml.js';
import {registerSignUpEvent} from '../signUp/signUp.js';
import {util} from '../util.js';

const makeSignInIdMessage = (idValue, idMessage) => {
    let message = ``;
    if(idValue==='') {
        message = `아이디를 입력해주세요.`;
    }
    return [idMessage, message];
}

const registerSignInIdMessageEvent = () => {
    const idInputBox = document.querySelector('.id_inputbox');
    const idMessage = document.querySelector('.sign_in_id_message');
    let idValue = ``;
    idInputBox.addEventListener('blur', () => {
        idValue = idInputBox.value;
        util.printMessage(makeSignInIdMessage(idValue, idMessage));
    })
}

const registerSignInEvent = () => {
    const signInButton = document.querySelector('.main_sign_in_button');
    signInButton.addEventListener('click', () => {
        document.body.innerHTML = signInHtml;
        // sign in events
        registerSignInIdMessageEvent();
        registerSignUpEvent();
    });
}

export {registerSignInEvent};