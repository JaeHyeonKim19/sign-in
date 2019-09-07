const signInHtml = /* html */`
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
                <a class="sign_up" href="#signup">회원가입</a>
            </form>
        </div>
    </div>
    <footer>
        <div class="footer_content"></div>
    </footer>
</div>
`;

export {signInHtml};