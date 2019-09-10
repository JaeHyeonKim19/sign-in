import {signInHandler} from './signIn/signIn.js';
import {mainHtml} from './mainHtml.js';
/**
 * Check cookie's validation and render main page.
 */
const mainInit = () => {
    const currentUrl = document.location.href;
    fetch(currentUrl, {
        method: 'POST',
        headers: {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            type : 'cookieCheck',
            data : document.cookie
        })
    })
    .then(response => response.json())
    .then(json => {
        if(json.result){
            const signInButton = '<button type="button" class="main_sign_in_button">로그인</button>';
            const name = json.name;
            const nameDiv = /* html */`<div>${name}님 안녕하세요. 추가 기능은 준비중 입니다.</div>
            <button type="button" class="main_sign_out_button">로그아웃</button>
            `;
            const newMainHtml = mainHtml.replace(signInButton, nameDiv);
            document.body.innerHTML = newMainHtml;
            signOutHandler();
        }else{
            document.body.innerHTML = mainHtml;
            signInHandler();
        }
    })
    .catch((data) => {
        alert('에러가 발생했습니다. 다시 시도해주십시오.');
    });
    
}

/**
 * Register event which is trying sign in when click button.
 */
const signOutHandler = () => {
    const signOutButton = document.querySelector('.main_sign_out_button');
    signOutButton.addEventListener('click', () => {
        const currentUrl = document.location.href;
        fetch(currentUrl, {
            method: 'POST',
            headers: {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                type : 'signOut',
                data : document.cookie
            })
        })
        .then(response => response.json())
        .then(json => {
            alert('로그아웃 되었습니다.');
            document.body.innerHTML = mainHtml;
            signInHandler();
        })
        .catch((data) => {
            alert('에러가 발생했습니다. 다시 시도해주십시오.');
        });
    });
}

mainInit();

export {mainInit};