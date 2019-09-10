import {interestTag} from './interestTag.js';

const reset = {
    /**
     * Add reset event when click reset button.
     */
    registerResetEvent(){
        const resetButton = document.querySelector('#init');
        resetButton.addEventListener('click', () => {
            reset.resetForm();
        });
    },
    /**
     * Reset all value of item in form.
     */
    resetForm(){
        const form = document.querySelector('.sign_up_form');
        const tagWrapper = document.getElementById('tag_wrapper');
        const interestInput = document.querySelector('#tag_input');
        const messages = document.querySelectorAll('.message');
        form.reset();
        interestTag.tags = [];
        interestTag.listTags(interestInput, tagWrapper);
        for(let message of messages){
            message.innerHTML = '';
        }
    }
}

export {reset};