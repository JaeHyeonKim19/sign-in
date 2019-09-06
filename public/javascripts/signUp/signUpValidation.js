import {util} from '../util.js';

const signUpMessageMaker = {
    makeSigUpIdMessage : (idValue, idMessage) => {
        let message = `사용가능한 아이디입니다.`;
        idMessage.style.color = `rgb(90, 194, 102)`;
        if(!/^[a-z0-9-_]{5,20}$/g.test(idValue)){
            idMessage.style.color = `rgb(255, 0, 0)`;
            message = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
        }
        return [idMessage, message];
    },
    makeSignUpPwMessage : (pwValue, pwMessage) => {
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
    makeSignUpPwCheckMessage : (pwCheckValue, pwValue, pwCheckMessage) => {
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
    makeBirthMessage : (birthYearValue, birthMonthValue, birthDateValue, birthMessage) => {
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
    makeEmailMessage : (emailValue, emailMessage) => {
        let message = ``;
        if(!/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(emailValue)){
            message = `이메일 주소를 다시 확인해주세요.`;
        }
        return [emailMessage, message];
    },
    makePhoneMessage : (phoneValue, phoneMessage) => {
        let message = ``;
        if(!/^010[0-9]{7,8}$/.test(phoneValue)){
            message = `형식에 맞지 않는 번호입니다.`;
        }
        return [phoneMessage, message];
    },
    makeInterestMessage(interestMessage){
        const tags = document.querySelectorAll('.tag');
        let message = ``;
        const tagCount = tags.length;
        if(tagCount<3) message = `3개 이상의 관심사를 입력하세요.`;
        return [interestMessage, message];
    }
}

const signUpValidationHandler = {
    signUpIdMessageHandler : () => {
        const idInput = document.querySelector('#id_input');
        const idMessage = document.querySelector('#id_message');
        let idValue = ``;
        idInput.addEventListener('blur', () => {
            idValue = idInput.value;
            util.printMessage(signUpMessageMaker.makeSigUpIdMessage(idValue, idMessage));
        });
    },
    signUpPwMessageHandler : () => {
        const pwInput = document.querySelector('#pw_input');
        const pwMessage = document.querySelector('#pw_message');
        let pwValue = ``;
        pwInput.addEventListener('blur', () => {
            pwValue = pwInput.value;
            util.printMessage(signUpMessageMaker.makeSignUpPwMessage(pwValue, pwMessage));
        });
    },
    signUpPwCheckMessageHandler : () => {
        const pwCheckInput = document.querySelector('#pw_check_input');
        const pwInput = document.querySelector('#pw_input');
        const pwCheckMessage = document.querySelector('#pw_check_message');
        let pwCheckValue = ``;
        let pwValue = ``;
        pwCheckInput.addEventListener('blur', () => {
            pwCheckValue = pwCheckInput.value;
            pwValue = pwInput.value;
            util.printMessage(signUpMessageMaker.makeSignUpPwCheckMessage(pwCheckValue, pwValue, pwCheckMessage));
        });
    },
    birthMessageHandler : () => {
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
                util.printMessage(signUpMessageMaker.makeBirthMessage(birthYearValue, birthMonthValue, birthDateValue, birthMessage));
            });
        });
    },
    emailMessageHandler : () => {
        const emailInput = document.querySelector('#email_input');
        const emailMessage = document.querySelector('#email_message');
        let emailValue = ``;
        emailInput.addEventListener('blur', () => {
            emailValue = emailInput.value;
            util.printMessage(signUpMessageMaker.makeEmailMessage(emailValue, emailMessage));
        });
    },
    phoneMessageHandler : () => {
        const phoneInput = document.querySelector('#phone_input');
        const phoneMessage = document.querySelector('#phone_message');
        let phoneValue = ``;
        phoneInput.addEventListener('blur', () => {
            phoneValue = phoneInput.value;
            util.printMessage(signUpMessageMaker.makePhoneMessage(phoneValue, phoneMessage));
        });
    },
    interestMessageHandler(){
        const interestMessage = document.querySelector('#interest_message');
        const interestInput = document.querySelector('#tag_input');
        interestInput.addEventListener('blur', () => {
            util.printMessage(signUpMessageMaker.makeInterestMessage(interestMessage));
        });
    }
}

export {signUpValidationHandler};