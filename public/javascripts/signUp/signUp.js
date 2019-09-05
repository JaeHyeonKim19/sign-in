import {signUpHtml} from './signUpHtml.js';
import {termModalHtml} from './termModalHtml.js';
import {util} from '../util.js';

const signUpMessageMaker = {
    makeSigUpIdMessageEvent : (idValue, idMessage) => {
        let message = `사용가능한 아이디입니다.`;
        idMessage.style.color = `rgb(90, 194, 102)`;
        if(!/^[a-z0-9-_]{5,20}$/g.test(idValue)){
            idMessage.style.color = `rgb(255, 0, 0)`;
            message = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
        }
        return [idMessage, message];
    },
    makeSignUpPwMessageEvent : (pwValue, pwMessage) => {
        let message = ``;
        pwMessage.style.color = `red`;
        if(!/^.{8,16}$/.test(pwValue)){
            message = `8자 이상 16자 이하로 입력해주세요.`;
        }else if(!/[A-Z]/.test(pwValue)){
            message = `영문 대문자를 최소 1자 이상 포함해주세요.`;
        }else if(!/[0-9]/.test(pwValue)){
            message = `숫자를 최소 1자 이상 포함해주세요.`;
        }else if(!/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(pwValue)){
            message = `특수문자를 최소 1자 이상 포함해주세요.`;
        }else{
            message = `안전한 비밀번호입니다.`;
            pwMessage.style.color = `rgb(90, 194, 102)`;
        }
        return [pwMessage, message];
    },
    makeSignUpPwCheckMessageEvent : (pwCheckValue, pwValue, pwCheckMessage) => {
        let message = `비밀번호가 일치합니다.`;
        pwCheckMessage.style.color = `rgb(90, 194, 102)`;
        if(pwValue===''){
            message = `비밀번호를 입력해주세요.`;
            pwCheckMessage.style.color = `red`;
        }else if(pwCheckValue!==pwValue){
            message = `비밀번호가 일치하지 않습니다.`;
            pwCheckMessage.style.color = `red`;
        }
        return [pwCheckMessage, message];
    },
    makeBirthMessageEvent : (birthYearValue, birthMonthValue, birthDateValue, birthMessage) => {
        let message = ``;
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        const currentMonth = currentTime.getMonth() + 1;
        const currentDate = currentTime.getDate();
        const age = currentYear - birthYearValue + 1;
        if(!(/^[0-9]{4}$/.test(birthYearValue)) || age>99){
            message = `태어난 년도 4자리를 정확하게 입력하세요.`;
        }else if(isNaN(birthMonthValue)){
            message = `월을 선택해주세요.`;
        }else if(birthDateValue<1 || birthDateValue>32 - new Date(birthYearValue, birthMonthValue-1, 32).getDate()){
            message = `태어난 날짜를 다시 확인해주세요.`;
        }else if(age<=15){
            message = `만 14세 이상만 가입 가능합니다.`;
            if(age===15 && currentMonth>=birthMonthValue){
                message = ``;
                if(currentMonth===birthMonthValue && currentDate<=birthDateValue){
                    message = `만 14세 이상만 가입 가능합니다.`;
                }
            }
        }
        return [birthMessage, message];
    },
    makeEmailMessageEvent : (emailValue, emailMessage) => {
        let message = ``;
        if(!/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(emailValue)){
            message = `이메일 주소를 다시 확인해주세요.`;
        }
        return [emailMessage, message];
    },
    makePhoneMessageEvent : (phoneValue, phoneMessage) => {
        let message = ``;
        if(!/^010[0-9]{7,8}$/.test(phoneValue)){
            message = `형식에 맞지 않는 번호입니다.`;
        }
        return [phoneMessage, message];
    }
}

const signUpValidationRegister = {
    registerSignUpIdMessageEvent : () => {
        const idInput = document.querySelector('#id_input');
        const idMessage = document.querySelector('#id_message');
        let idValue = ``;
        idInput.addEventListener('blur', () => {
            idValue = idInput.value;
            util.printMessage(signUpMessageMaker.makeSigUpIdMessageEvent(idValue, idMessage));
        });
    },
    registerSignUpPwMessageEvent : () => {
        const pwInput = document.querySelector('#pw_input');
        const pwMessage = document.querySelector('#pw_message');
        let pwValue = ``;
        pwInput.addEventListener('blur', () => {
            pwValue = pwInput.value;
            util.printMessage(signUpMessageMaker.makeSignUpPwMessageEvent(pwValue, pwMessage));
        });
    },
    registerSignUpPwCheckMessageEvent : () => {
        const pwCheckInput = document.querySelector('#pw_check_input');
        const pwInput = document.querySelector('#pw_input');
        const pwCheckMessage = document.querySelector('#pw_check_message');
        let pwCheckValue = ``;
        let pwValue = ``;
        pwCheckInput.addEventListener('blur', () => {
            pwCheckValue = pwCheckInput.value;
            pwValue = pwInput.value;
            util.printMessage(signUpMessageMaker.makeSignUpPwCheckMessageEvent(pwCheckValue, pwValue, pwCheckMessage));
        });
    },
    registerBirthMessageEvent : () => {
        const birthYearInput = document.querySelector('#birth_year_input');
        const birthMonthMenu = document.querySelector('.birth_month_dropmenu');
        const birthDateInput = document.querySelector('#birth_date_input');
        const birthMessage = document.querySelector('#birth_message');
        const birthInput = [birthYearInput, birthMonthMenu, birthDateInput];
        let birthYearValue, birthMonthValue, birthDateValue = ``;
        birthInput.forEach((element) => {
            element.addEventListener('blur', () => {
                birthYearValue = birthYearInput.value;
                birthMonthValue = Number(birthMonthMenu.options[birthMonthMenu.selectedIndex].value);
                birthDateValue = Number(birthDateInput.value);
                util.printMessage(signUpMessageMaker.makeBirthMessageEvent(birthYearValue, birthMonthValue, birthDateValue, birthMessage));
            });
        });
    },
    registerEmailMessageEvent : () => {
        const emailInput = document.querySelector('#email_input');
        const emailMessage = document.querySelector('#email_message');
        let emailValue = ``;
        emailInput.addEventListener('blur', () => {
            emailValue = emailInput.value;
            util.printMessage(signUpMessageMaker.makeEmailMessageEvent(emailValue, emailMessage));
        });
    },
    registerPhoneMessageEvent : () => {
        const phoneInput = document.querySelector('#phone_input');
        const phoneMessage = document.querySelector('#phone_message');
        let phoneValue = ``;
        phoneInput.addEventListener('blur', () => {
            phoneValue = phoneInput.value;
            util.printMessage(signUpMessageMaker.makePhoneMessageEvent(phoneValue, phoneMessage));
        });
    }
}

const termModal = {
    registerTermModalPopupEvent : () => {
        const termLink = document.querySelector('.term_link');
        termLink.addEventListener('click', () => {
            document.body.insertAdjacentHTML('beforeend', termModalHtml);
            termModal.registerTermModalCloseEvent();
            termModal.registerTermAgreeEvent();
        });
    },
    registerTermModalCloseEvent : () => {
        const xDiv = document.querySelector('.x');
        xDiv.addEventListener('click', () => {
            termModal.deleteModalPopup();
        });
    },
    registerTermAgreeEvent : () => {
        const agreementButton = document.querySelector('#agreement_button');
        agreementButton.addEventListener('click', () => {
            termModal.deleteModalPopup();
            document.getElementById("term_checkbox").checked = true;
        });
    },
    deleteModalPopup : () => {
        const modalPopup = document.querySelector('.term_modal_wrapper');
        const layer = document.querySelector('.layer');
        modalPopup.remove();
        layer.remove();
    }
}

const interestTag = {
    makeTagFrame : (interest) => {
        const tagFrame = `
        <div class="tag">
            <span>${interest}</span>
            <div class="tag_close">&times;</div>
        </div>
        `;
        return tagFrame;
    },
    insertTagEvent : () => {
        const tagWrapper = document.getElementById('tag_wrapper');
        const interestInput = document.querySelector('#tag_input');
        let interestInputValue = ``;
        let tag = ``;
        tagWrapper.addEventListener('keyup', (e) => {
            if(e.key===','){
                interestInputValue = interestInput.value;
                interestInputValue = interestInputValue.substring(0, interestInputValue.length-1);
                tag = interestTag.makeTagFrame(interestInputValue);
                interestInput.insertAdjacentHTML('beforebegin', tag);
                interestInput.value = '';
            }
        });

    }
}

const registerSignUpEvent = () => {
    const signUpLink = document.querySelector('.sign_up');
    signUpLink.addEventListener('click', () => {
        document.body.innerHTML = signUpHtml;
        // sign up events
        for(let register in signUpValidationRegister){
            signUpValidationRegister[register]();
        }
        termModal.registerTermModalPopupEvent();
        interestTag.insertTagEvent();
    });
}

export {registerSignUpEvent};