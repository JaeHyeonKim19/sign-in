const signUpHtml = /*html*/`
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
                        <input id="name_input" class="input">
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
                <div class="tag_component_wrapper">
                    <label>관심사</label>
                    <div id="tag_wrapper" class="info">
                        <input id="tag_input" class="input">
                    </div>
                    <div id="interest_message" class="message"></div>
                </div>
                <div class="agreement_wrapper">
                    <a class="term_link" href="#">약관에 동의합니다.</a>
                    <input type="checkbox" disabled=true id="term_checkbox">
                    <label for="term_checkbox"></label>
                </div>
                <div class="button_wrapper">
                    <button type="button" id="init">초기화</button>
                    <button type="button" id="sign_up_button">가입하기</button>
                </div>
            </form>
        </div>
    </div>
    <footer>
        <div class="footer_content"></div>
    </footer>
</div>
`;

export {signUpHtml};