import {termModalHtml} from './termModalHtml.js';

const termModal = {
    /**
     * Register making term modal popup event.
     */
    termModalPopupHandler : () => {
        const termLink = document.querySelector('.term_link');
        termLink.addEventListener('click', () => {
            document.body.insertAdjacentHTML('beforeend', termModalHtml);
            termModal.termModalCloseHandler();
            termModal.termAgreeHandler();
        });
    },
    /**
     * Register closing term modal popup event.
     */
    termModalCloseHandler : () => {
        const xDiv = document.querySelector('.x');
        xDiv.addEventListener('click', () => {
            termModal.deleteModalPopup();
        });
    },
    /**
     * Register event which is making agreement value to true.
     */
    termAgreeHandler : () => {
        const agreementButton = document.querySelector('#agreement_button');
        agreementButton.addEventListener('click', () => {
            termModal.deleteModalPopup();
            document.getElementById("term_checkbox").checked = true;
        });
    },
    /**
    * Register event which is closing term modal popup.
    */
    deleteModalPopup : () => {
        const modalPopup = document.querySelector('.term_modal_wrapper');
        const layer = document.querySelector('.layer');
        modalPopup.remove();
        layer.remove();
    }
}

export {termModal};