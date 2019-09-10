import {util} from '../util.js';
import {signInHandlerCallBack} from '../signIn/signIn.js';

const signUpMessageMaker = {
    /**
     * Make warning message of sign up id.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeSigUpIdMessage : async () => {
        const idInput = document.querySelector('#id_input');
        const idMessage = document.querySelector('#id_message');
        const idValue = idInput.value;
        let result = true;
        let message = `사용가능한 아이디입니다.`;
        idMessage.style.color = `rgb(90, 194, 102)`;
        if(!/^[a-z0-9-_]{5,20}$/g.test(idValue)){
            idMessage.style.color = `rgb(255, 0, 0)`;
            message = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
            result = false;
        }else{
            const currentUrl = document.location.href;
            await fetch(currentUrl, {
                method: 'POST',
                headers: {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    type : 'duplication',
                    id : idValue
                })
            })
            .then(response => response.json())
            .then(json => {
                if(json.result){
                    idMessage.style.color = `rgb(255, 0, 0)`;
                    message = `이미 사용중인 아이디입니다.`;
                    result = false;
                }
            })
            .catch((data) => {
                idMessage.style.color = `rgb(255, 0, 0)`;
                message = `현재 서버와의 통신이 불가능합니다. 다시 시도해주세요.`;
                result = false;
            });
        }
        return [idMessage, message, result];
    },
    /**
     * Make warning message of sign up password.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeSignUpPwMessage : () => {
        const pwInput = document.querySelector('#pw_input');
        const pwMessage = document.querySelector('#pw_message');
        const pwValue = pwInput.value;
        let result = false;
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
            result = true;
            pwMessage.style.color = `rgb(90, 194, 102)`;
        }
        return [pwMessage, message, result];
    },
    /**
     * Make warning message of sign up password check.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeSignUpPwCheckMessage : () => {
        const pwCheckInput = document.querySelector('#pw_check_input');
        const pwInput = document.querySelector('#pw_input');
        const pwCheckMessage = document.querySelector('#pw_check_message');
        const pwCheckValue = pwCheckInput.value;
        const pwValue = pwInput.value;
        let result = true;
        let message = `비밀번호가 일치합니다.`;
        pwCheckMessage.style.color = `rgb(90, 194, 102)`;
        if(pwValue===''){
            message = `비밀번호를 입력해주세요.`;
            pwCheckMessage.style.color = `red`;
            result = false;
        }else if(pwCheckValue!==pwValue){
            message = `비밀번호가 일치하지 않습니다.`;
            pwCheckMessage.style.color = `red`;
            result = false;
        }
        return [pwCheckMessage, message, result];
    },
    /**
     * Make warning message of sign up name.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeNameMessage : () => {
        const nameInput = document.querySelector('#name_input');
        const nameMessage = document.querySelector('#name_message');
        const nameInputValue = nameInput.value;
        let result = true;
        let message = ``;
        if(nameInputValue===''){
            message = `이름을 입력하세요`;
            result = false;
        }
        return [nameMessage, message, result];
    },
    /**
     * Make warning message of sign up birth.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeBirthMessage : () => {
        const birthMessage = document.querySelector('#birth_message');
        const birthYearInput = document.querySelector('#birth_year_input');
        const birthMonthMenu = document.querySelector('.birth_month_dropmenu');
        const birthDateInput = document.querySelector('#birth_date_input');
        const birthYearValue = birthYearInput.value;
        const birthMonthValue = Number(birthMonthMenu.options[birthMonthMenu.selectedIndex].value);
        const birthDateValue = Number(birthDateInput.value);
        let result = true;
        let message = ``;
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        const currentMonth = currentTime.getMonth() + 1;
        const currentDate = currentTime.getDate();
        const age = currentYear - birthYearValue + 1;
        if(!(/^[0-9]{4}$/.test(birthYearValue)) || age>99){
            message = `태어난 년도 4자리를 정확하게 입력하세요.`;
            result = false;
        }else if(isNaN(birthMonthValue)){
            message = `월을 선택해주세요.`;
            result = false;
        }else if(birthDateValue<1 || birthDateValue>32 - new Date(birthYearValue, birthMonthValue-1, 32).getDate()){
            message = `태어난 날짜를 다시 확인해주세요.`;
            result = false;
        }else if(age<=15){
            message = `만 14세 이상만 가입 가능합니다.`;
            result = false;
            if(age===15 && currentMonth>=birthMonthValue){
                message = ``;
                result = true;
                if(currentMonth===birthMonthValue && currentDate<=birthDateValue){
                    message = `만 14세 이상만 가입 가능합니다.`;
                    result = false;
                }
            }
        }
        return [birthMessage, message, result];
    },
    /**
     * Make warning message of sign up gender.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeGenderMessage : () => {
        const genderMessage = document.querySelector('#gender_dropmenu_message');
        const genderMenu = document.querySelector('.gender_dropmenu');
        const genderValue = genderMenu.options[genderMenu.selectedIndex].value;
        let result = true;
        let message = ``;
        if(genderValue!=='M' && genderValue!=='F'){
            message = `성별을 선택해주세요.`;
            result = false;
        }
        return [genderMessage, message, result]
    },
    /**
     * Make warning message of sign up email.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeEmailMessage : () => {
        const emailMessage = document.querySelector('#email_message');
        const emailInput = document.querySelector('#email_input');
        const emailValue = emailInput.value;
        let result = true;
        let message = ``;
        if(!/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(emailValue)){
            message = `이메일 주소를 다시 확인해주세요.`;
            result = false;
        }
        return [emailMessage, message, result];
    },
    /**
     * Make warning message of sign up phone.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makePhoneMessage : () => {
        const phoneMessage = document.querySelector('#phone_message');
        const phoneInput = document.querySelector('#phone_input');
        const phoneValue = phoneInput.value;
        let result = true;
        let message = ``;
        if(!/^010[0-9]{7,8}$/.test(phoneValue)){
            message = `형식에 맞지 않는 번호입니다.`;
            result = false;
        }
        return [phoneMessage, message, result];
    },
    /**
     * Make warning message of sign up interest.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeInterestMessage(){
        const interestMessage = document.querySelector('#interest_message');
        const tags = document.querySelectorAll('.tag');
        let result = true;
        let message = ``;
        const tagCount = tags.length;
        if(tagCount<3) {
            message = `3개 이상의 관심사를 입력하세요.`;
            result = false;
        }
        return [interestMessage, message, result];
    },
    /**
     * Make warning message of sign up agreement.
     *
     * @return {Array} [idMessage, message, result] Return DOM object, string, boolean.
     */
    makeAgreementMessage(){
        const agreementMessage = document.querySelector('#agreement_message');
        const checkbox = document.querySelector('#term_checkbox');
        const isChecked = checkbox.checked;
        let message = ``;
        if(!isChecked) message = `약관에 동의해주세요.`;
        return [agreementMessage, message, isChecked];
    }
}

const signUpValidationHandler = {
    /**
     * Register printing sign up id warning message event.
     */
    signUpIdMessageHandler : () => {
        const idInput = document.querySelector('#id_input');
        idInput.addEventListener('blur', async () => {
            await util.printMessage(await signUpMessageMaker.makeSigUpIdMessage());
        });
    },
    /**
     * Register printing sign up password warning message event.
     */
    signUpPwMessageHandler : () => {
        const pwInput = document.querySelector('#pw_input');
        pwInput.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makeSignUpPwMessage());
        });
    },
    /**
     * Register printing sign up password checking warning message event.
     */
    signUpPwCheckMessageHandler : () => {
        const pwCheckInput = document.querySelector('#pw_check_input');
        pwCheckInput.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makeSignUpPwCheckMessage());
        });
    },
    /**
     * Register printing sign up name warning message event.
     */
    nameMessageHandler : () => {
        const nameInput = document.querySelector('#name_input');
        nameInput.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makeNameMessage());
        });
    },
    /**
     * Register printing sign up birth warning message event.
     */
    birthMessageHandler : () => {
        const birthYearInput = document.querySelector('#birth_year_input');
        const birthMonthMenu = document.querySelector('.birth_month_dropmenu');
        const birthDateInput = document.querySelector('#birth_date_input');
        const birthInput = [birthYearInput, birthMonthMenu, birthDateInput];
        birthInput.forEach((element) => {
            element.addEventListener('blur', () => {
                util.printMessage(signUpMessageMaker.makeBirthMessage());
            });
        });
    },
    /**
     * Register printing sign up gender warning message event.
     */
    genderMessageHandler : () => {
        const genderMenu = document.querySelector('.gender_dropmenu');
        genderMenu.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makeGenderMessage());
        });
    },
    /**
     * Register printing sign up email warning message event.
     */
    emailMessageHandler : () => {
        const emailInput = document.querySelector('#email_input');
        emailInput.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makeEmailMessage());
        });
    },
    /**
     * Register printing sign up phone warning message event.
     */
    phoneMessageHandler : () => {
        const phoneInput = document.querySelector('#phone_input');
        phoneInput.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makePhoneMessage());
        });
    },
    /**
     * Register printing sign up interest warning message event.
     */
    interestMessageHandler : () => {
        const interestInput = document.querySelector('#tag_input');
        interestInput.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makeInterestMessage());
        });
    },
    /**
     * Register sign up event.
     */
    confirmValidator : () => {
        const signUpButton = document.querySelector('#sign_up_button');
        signUpButton.addEventListener('click', () => {
            const result = finalConfirm();
            if(result){
                const form = document.querySelector('.sign_up_form');
                const inform = [];
                for(let input of form){
                    inform.push(input.value);
                }
                const currentUrl = document.location.href;
                fetch(currentUrl, {
                    method: 'POST',
                    headers: {
                        Accept : "application/json",
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        type : 'signUp',
                        data : inform
                    })
                })
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    alert('회원가입 완료! 로그인 해주세요.');
                    signInHandlerCallBack();
                })
                .catch((data) => {
                    alert('에러가 발생했습니다. 다시 시도해주십시오.');
                });
            }
        });
    }
}
/**
 * Check all of validation before sign up.
 */
const finalConfirm = async () => {
    let messageObject = [];
    let result = true;
    for(let messageMaker in signUpMessageMaker){
        messageObject = await signUpMessageMaker[messageMaker]();
        util.printMessage(messageObject);
        if(result===true) result = messageObject[2];
    }
    return result;
}

export {signUpValidationHandler, signUpMessageMaker};