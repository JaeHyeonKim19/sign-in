import {term} from './term.js';

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

export {termModalHtml};