const interestTag = {
    /**
     * Make tag html.
     *
     * @param {String} interest interest value.
     * @return {String} Return tag html format.
     */
    makeTagFrame(interest){
        return /*html*/ `
        <div class="tag">
            <span class='tag_value'>${interest}</span>
            <div class="tag_close">&times;</div>
        </div>
        `;
    },
    tags : [],
    /**
     * Register tag event.
     */
    tagHandler(){
        const tagWrapper = document.getElementById('tag_wrapper');
        const interestInput = document.querySelector('#tag_input');
        let interestInputValue = ``;
        let previousValue = ``;
        tagWrapper.addEventListener('keyup', (e) => {
            if(e.key===','){
                interestInputValue = interestInput.value;
                interestInputValue = interestInputValue.substring(0, interestInputValue.length-1);
                if(interestInputValue==='') {
                    interestInput.value='';
                    return;
                }
                const interestMessage = document.querySelector('#interest_message');
                if(!interestTag.isTagDuplicated(interestInputValue)){
                    interestTag.tags.push(interestInputValue);
                    interestTag.listTags(interestInput, tagWrapper);
                    interestInput.value = '';
                    interestMessage.innerHTML = ``;
                }else{
                    interestMessage.innerHTML = `이미 입력한 관심사입니다.`;
                    interestInput.value = interestInputValue;
                }
            }else if((e.key==='Backspace' || e.key==='Delete') && interestTag.isPreviousInputEmpty(previousValue)){
                interestTag.modifyPreviousTag(interestInput, tagWrapper);
            }
            previousValue = interestInput.value;
        });
    },
    /**
     * Delete existing inerest tags and rearrange tags.
     *
     * @param {Object} interestInput DOM object of interest input.
     * @param {Object} tagWrapper Dom object of tag wrapper.
     */
    listTags(interestInput, tagWrapper){
        const existingTags = tagWrapper.querySelectorAll('.tag');
        let tagHTML = ``;
        for(let tag of existingTags){
            tag.parentElement.removeChild(tag);
        }
        for(let tag of interestTag.tags){
            tagHTML = interestTag.makeTagFrame(tag); 
            interestInput.insertAdjacentHTML('beforebegin', tagHTML);
        }
        const interestHiddenInput = document.querySelector('#interest_input');
        interestHiddenInput.value = JSON.stringify(interestTag.tags);
        interestTag.removeTagHandler(interestInput, tagWrapper);
    },
    /**
     * Add event to x.
     *
     * @param {Object} interestInput DOM object of interest input.
     * @param {Object} tagWrapper Dom object of tag wrapper.
     */
    removeTagHandler(interestInput, tagWrapper){
        const existingTagClose = tagWrapper.querySelectorAll('.tag_close');
        for(let tagClose of existingTagClose){
            tagClose.addEventListener('click', () => {
                const tag = tagClose.parentElement;
                const tagValue = tag.querySelector('.tag_value').innerHTML;
                const index = interestTag.tags.indexOf(tagValue);
                interestTag.tags.splice(index, 1);
                interestTag.listTags(interestInput, tagWrapper);
            });
        }
    },
    /**
     * Check duplication of tags.
     *
     * @param {String} interestInputValue String which is extracted from interest input.
     */
    isTagDuplicated(interestInputValue){
        let isDuplicated = false;
        for(let tag of interestTag.tags){
            if(tag===interestInputValue) isDuplicated = true;
        }
        return isDuplicated
    },
    /**
     * Return last tag to interest input.
     *
     * @param {Object} interestInput DOM object of interest input.
     * @param {Object} tagWrapper Dom object of tag wrapper.
     */
    modifyPreviousTag(interestInput, tagWrapper){
        const inputValue = interestTag.tags.pop();
        interestInput.value = inputValue;
        interestTag.listTags(interestInput, tagWrapper);
    },
    /**
     * Return true if value of interest input isn't null.
     *
     * @param {String} previousValue Existing input value.
     * @return {boolean} Return true if value of interest input isn't null.
     */
    isPreviousInputEmpty(previousValue){
        return !previousValue;
    }
}

export {interestTag};