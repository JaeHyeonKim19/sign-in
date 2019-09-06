import {termModalHtml} from './termModalHtml.js';

const termModal = {
    termModalPopupHandler : () => {
        const termLink = document.querySelector('.term_link');
        termLink.addEventListener('click', () => {
            document.body.insertAdjacentHTML('beforeend', termModalHtml);
            termModal.termModalCloseHandler();
            termModal.termAgreeHandler();
        });
    },
    termModalCloseHandler : () => {
        const xDiv = document.querySelector('.x');
        xDiv.addEventListener('click', () => {
            termModal.deleteModalPopup();
        });
    },
    termAgreeHandler : () => {
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

export {termModal};