import {signInHtml} from './signInHtml.js';
import {signUpHandler} from '../signUp/signUp.js';
import {util} from '../util.js';
import {mainInit} from '../main.js';

const makeSignInIdMessage = (idValue, idMessage) => {
    let message = ``;
    if(idValue==='') {
        message = `아이디를 입력해주세요.`;
    }
    return [idMessage, message];
}

const signInIdMessageHandler = () => {
    const idInputBox = document.querySelector('.id_inputbox');
    const idMessage = document.querySelector('.sign_in_id_message');
    let idValue = ``;
    idInputBox.addEventListener('blur', () => {
        idValue = idInputBox.value;
        util.printMessage(makeSignInIdMessage(idValue, idMessage));
    })
}

const signInButtonHandler = () => {
    const loginButton = document.querySelector('.login_button');
    loginButton.addEventListener('click', signInButtonHandlerCallBack);
}

const signInButtonHandlerCallBack = async () => {
    const id = document.querySelector('.id_inputbox').value;
    const pwd = document.querySelector('.pw_inputbox').value;
    const loginInform = [id, pwd];
    const currentUrl = document.location.href;
    await fetch(currentUrl, {
        method: 'POST',
        headers: {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            type : 'signIn',
            data : loginInform
        })
    })
    .then(response => response.json())
    .then(json => {
        if(json.result){
            alert('로그인이 완료되었습니다.');
            mainInit();
        }else{
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    })
    .catch((data) => {
        alert('에러가 발생했습니다. 다시 시도해주십시오.');
    });
}

const signInHandler = () => {
    const signInButton = document.querySelector('.main_sign_in_button');
    signInButton.addEventListener('click', signInHandlerCallBack);
}

const signInHandlerCallBack = () => {
    document.body.innerHTML = signInHtml;
    // sign in events
    signInIdMessageHandler();
    signInButtonHandler();
    signUpHandler();
}

export {signInHandler, signInHandlerCallBack};
