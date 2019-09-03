const signInHtml = `
<div class="wrapper">
    <header>
        <div class="logo"></div>
    </header>
    <div class="content">
        <div class="sign_in_wrapper">
            <form name="sign_in" class="sign_in_form">
                <div class="sign_in_id_wrapper">
                    <div class="id_input_area">
                        <input type="text" placeholder="아이디" class="id_inputbox">
                    </div>
                    <div class="sign_in_id_message"></div>
                </div>
                <div class="pw_input_area">
                    <input type="password" placeholder="비밀번호" class="pw_inputbox">
                </div>
                <button class="login_button">로그인</button>
                <a class="sign_up" href="#">회원가입</a>
            </form>
        </div>
    </div>
    <footer>
        <div class="footer_content"></div>
    </footer>
</div>
`;

const signUpHtml = `
<div class="wrapper">
    <header>
        <div class="title">회원가입</div>
    </header>
    <div class="content">
        <div class="sign_up_wrapper">
            <form class="sign_up_form">
                <div class="component_wrapper">
                    <label>아이디</label>
                    <div class="info">
                        <input id="id_input" class="input">
                    </div>
                    <div id="id_message" class="message"></div>
                </div>
                <div class="component_wrapper">
                    <label>비밀번호</label>
                    <div class="info">
                        <input type="password" id="pw_input" class="input">
                    </div>
                    <div id="pw_message" class="message"></div>
                </div>
                <div class="component_wrapper">
                    <label>비밀번호 재확인</label>
                    <div class="info">
                        <input type="password" id="pw_check_input" class="input">
                    </div>
                    <div id="pw_check_message" class="message"></div>
                </div>
                <div class="component_wrapper">
                    <label>이름</label>
                    <div class="info">
                        <input class="input">
                    </div>
                    <div id="name_message" class="message"></div>
                </div>
                <div class="component_wrapper">
                    <label>생년월일</label>
                    <div class="birth_input_wrapper">
                        <div class="birth_year">
                            <input placeholder="년도(4자)" id="birth_year_input">
                        </div>
                        <div class="birth_month">
                            <select class="birth_month_dropmenu">
                                <option>월</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="birth_date">
                            <input placeholder="일" id="birth_date_input">
                        </div>
                    </div>
                    <div id="birth_message" class="message"></div>
                </div>
                <div class="component_wrapper">
                    <label>성별</label>
                    <div class="info">
                        <select class="gender_dropmenu">
                            <option>성별</option>
                            <option value="M">남</option>
                            <option value="F">여</option>
                        </select>
                    </div>
                    <div id="gender_dropmenu_message" class="message"></div>
                </div>  
                <div class="component_wrapper">
                    <label>이메일</label>
                    <div class="info">
                        <input id="email_input" class="input">
                    </div>
                    <div id="email_message" class="message"></div>
                </div>
                <div class="component_wrapper">
                    <label>휴대폰</label>
                    <div class="info">
                        <input placeholder="- 없이 입력해주세요. 예) 0101231234" id="phone_input" class="input">
                    </div>
                    <div id="phone_message" class="message"></div>
                </div>
                <div class="component_wrapper">
                    <label>관심사</label>
                    <div class="info">
                        <input class="input">
                    </div>
                    <div id="interest_message" class="message"></div>
                </div>
                <div class="agreement_wrapper">
                    <a class="term_link" href="#">약관에 동의합니다.</a>
                    <input type="checkbox" disabled=true id="term_checkbox">
                    <label for="term_checkbox"></label>
                </div>
                <div class="button_wrapper">
                    <button id="init">초기화</button>
                    <button id="sign_up_button">가입하기</button>
                </div>
            </form>
        </div>
    </div>
    <footer>
        <div class="footer_content"></div>
    </footer>
</div>
`;

const term = `개인정보 수집 및 이용에 대한 안내

정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

1. 수집하는 개인정보의 항목
최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.
- 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사

2. 개인정보의 수집 및 이용 목적
가. 컨텐츠 제공, 특정 맞춤 서비스 제공
나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재

3. 개인정보의 보유 및 이용기간
이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

가. 회사 내부 방침에 의한 정보보유 사유
- 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)
보존 항목 : 가입인증 휴대폰 번호
보존 이유 : 부정 가입 및 이용 방지
보존 기간 : 6개월
※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.

나. 관련법령에 의한 정보보유 사유
상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. 
- 계약 또는 청약철회 등에 관한 기록
보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
보존 기간 : 5년
- 소비자의 불만 또는 분쟁처리에 관한 기록
보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
보존 기간 : 3년
- 웹사이트 방문기록
보존 이유 : 통신비밀보호법
보존 기간 : 3개월`;

const termModalHtml = `
<div class="term_modal_wrapper">
    <div class="close_wrapper">
        <div class="x">&times;</div>
    </div>
    <div class="term_label_wrapper">
        <label class="term_label">개인정보 수집 및 이용에 대한 안내</label>
    </div>
    <div class="term_wrapper">
        <textarea class="term_box" disabled=true>${term}</textarea>
    </div>
    <div class="agreement_button_wrapper">
        <button id="agreement_button">동의</button>
    </div>
</div>
<div class="layer">
</div>
`;

const validationEvents = {
    printMessage : (messageObject) => {
        messageObject[0].innerHTML = messageObject[1];
    },
    registerSignInIdMessageEvent : () => {
        const idInputBox = document.querySelector('.id_inputbox');
        let idValue = ``;
        idInputBox.addEventListener('blur', () => {
            idValue = idInputBox.value;
            validationEvents.printMessage(validationEvents.makeSignInIdMessage(idValue));
        })
    },
    makeSignInIdMessage : (idValue) => {
        const idMessage = document.querySelector('.sign_in_id_message');
        let message = ``;
        if(idValue==='') {
            message = `아이디를 입력해주세요.`;
        }
        return [idMessage, message];
    },
    registerSignUpIdMessageEvent : () => {
        const idInput = document.querySelector('#id_input');
        let idValue = ``;
        idInput.addEventListener('blur', () => {
            idValue = idInput.value;
            validationEvents.printMessage(validationEvents.makeSigUpIdMessageEvent(idValue));
        });
    },
    makeSigUpIdMessageEvent : (idValue) => {
        const idMessage = document.querySelector('#id_message');
        let message = `사용가능한 아이디입니다.`;
        idMessage.style.color = `rgb(90, 194, 102)`;
        if(!/^[a-z0-9-_]{5,20}$/g.test(idValue)){
            idMessage.style.color = `rgb(255, 0, 0)`;
            message = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
        }
        return [idMessage, message];
    },
    registerSignUpPwMessageEvent : () => {
        const pwInput = document.querySelector('#pw_input');
        let pwValue = ``;
        pwInput.addEventListener('blur', () => {
            pwValue = pwInput.value;
            validationEvents.printMessage(validationEvents.makeSignUpPwMessageEvent(pwValue));
        });
    },
    makeSignUpPwMessageEvent : (pwValue) => {
        const pwMessage = document.querySelector('#pw_message');
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
    registerSignUpPwCheckMessageEvent : () => {
        const pwCheckInput = document.querySelector('#pw_check_input');
        const pwInput = document.querySelector('#pw_input');
        let pwCheckValue = ``;
        let pwValue = ``;
        pwCheckInput.addEventListener('blur', () => {
            pwCheckValue = pwCheckInput.value;
            pwValue = pwInput.value;
            validationEvents.printMessage(validationEvents.makeSignUpPwCheckMessageEvent(pwCheckValue, pwValue));
        });
    },
    makeSignUpPwCheckMessageEvent : (pwCheckValue, pwValue) => {
        const pwCheckMessage = document.querySelector('#pw_check_message');
        let message = `비밀번호가 일치합니다.`;
        pwCheckMessage.style.color = `rgb(90, 194, 102)`;
        if(pwCheckValue!==pwValue){
            message = `비밀번호가 일치하지 않습니다.`;
            pwCheckMessage.style.color = `red`;
        }
        return [pwCheckMessage, message];
    },
    registerBirthMessageEvent : () => {
        const birthYearInput = document.querySelector('#birth_year_input');
        const birthMonthMenu = document.querySelector('.birth_month_dropmenu');
        const birthDateInput = document.querySelector('#birth_date_input');
        const birthInput = [birthYearInput, birthMonthMenu, birthDateInput];
        let birthYearValue, birthMonthValue, birthDateValue = ``;
        birthInput.forEach((element) => {
            element.addEventListener('blur', () => {
                birthYearValue = birthYearInput.value;
                birthMonthValue = Number(birthMonthMenu.options[birthMonthMenu.selectedIndex].value);
                birthDateValue = Number(birthDateInput.value);
                validationEvents.printMessage(validationEvents.makeBirthMessageEvent(birthYearValue, birthMonthValue, birthDateValue));
            });
        });
    },
    makeBirthMessageEvent : (birthYearValue, birthMonthValue, birthDateValue) => {
        const birthMessage = document.querySelector('#birth_message');
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
    registerEmailMessageEvent : () => {
        const emailInput = document.querySelector('#email_input');
        let emailValue = ``;
        emailInput.addEventListener('blur', () => {
            emailValue = emailInput.value;
            validationEvents.printMessage(validationEvents.makeEmailMessageEvent(emailValue));
        });
    },
    makeEmailMessageEvent : (emailValue) => {
        const emailMessage = document.querySelector('#email_message');
        let message = ``;
        if(!/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(emailValue)){
            message = `이메일 주소를 다시 확인해주세요.`;
        }
        return [emailMessage, message];
    },
    registerPhoneMessageEvent : () => {
        const phoneInput = document.querySelector('#phone_input');
        let phoneValue = ``;
        phoneInput.addEventListener('blur', () => {
            phoneValue = phoneInput.value;
            validationEvents.printMessage(validationEvents.makePhoneMessageEvent(phoneValue));
        });
    },
    makePhoneMessageEvent : (phoneValue) => {
        const phoneMessage = document.querySelector('#phone_message');
        let message = ``;
        if(!/^010[0-9]{7,8}$/.test(phoneValue)){
            message = `형식에 맞지 않는 번호입니다.`;
        }
        return [phoneMessage, message];
    }
}

const termModalEvents = {
    registerTermModalPopupEvent : () => {
        const termLink = document.querySelector('.term_link');
        termLink.addEventListener('click', () => {
            document.body.insertAdjacentHTML('beforeend', termModalHtml);
            termModalEvents.registerTermModalCloseEvent();
            termModalEvents.registerTermAgreeEvent();
        });
    },
    registerTermModalCloseEvent : () => {
        const xDiv = document.querySelector('.x');
        xDiv.addEventListener('click', () => {
            termModalEvents.deleteModalPopup();
        });
    },registerTermAgreeEvent : () => {
        const agreementButton = document.querySelector('#agreement_button');
        agreementButton.addEventListener('click', () => {
            termModalEvents.deleteModalPopup();
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

const registerSignInEvent = () => {
    const signInButton = document.querySelector('.main_sign_in_button');
    signInButton.addEventListener('click', () => {
        document.body.innerHTML = signInHtml;
        // sign in events
        validationEvents.registerSignInIdMessageEvent();
        registerSignUpEvent();
    });
}

const registerSignUpEvent = () => {
    const signUpLink = document.querySelector('.sign_up');
    signUpLink.addEventListener('click', () => {
        document.body.innerHTML = signUpHtml;
        // sign up events
        validationEvents.registerSignUpIdMessageEvent();
        validationEvents.registerSignUpPwMessageEvent();
        validationEvents.registerSignUpPwCheckMessageEvent();
        validationEvents.registerBirthMessageEvent();
        validationEvents.registerEmailMessageEvent();
        validationEvents.registerPhoneMessageEvent();
        termModalEvents.registerTermModalPopupEvent();
    });
}

registerSignInEvent();