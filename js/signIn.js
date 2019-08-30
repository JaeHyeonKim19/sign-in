const events = {
    printSignInIdMessage : () => {
        const idInputArea = document.querySelector('.id_inputbox');
        idInputArea.addEventListener('blur', () => {
            const idMessage = document.querySelector('.id_message');
            const idValue = idInputArea.value;
            if(idValue==='') 
                idMessage.innerHTML = `아이디를 입력해주세요.`;
            else
                idMessage.innerHTML = '';
        })
    },
    printSignUpIdMessage : () => {

    }
}

events.printSignInIdMessage();