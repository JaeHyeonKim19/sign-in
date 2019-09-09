import {signInHandler} from './signIn/signIn.js';
import {mainHtml} from './mainHtml.js';

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
            const signInButton = '<button type="button" class="main_sign_in_button">로그인하기</button>';
            const data = decodeURI(document.cookie).split('"');
            const name = data[11];
            const nameDiv = `<div>${name}님 안녕하세요. 추가 기능은 준비중 입니다.</div>`;
            const newMainHtml = mainHtml.replace(signInButton, nameDiv);
            document.body.innerHTML = newMainHtml;
        }else{
            document.body.innerHTML = mainHtml;
            signInHandler();
        }
    })
    .catch((data) => {
        alert('에러가 발생했습니다. 다시 시도해주십시오.');
    });
    
}

mainInit();

export {mainInit};