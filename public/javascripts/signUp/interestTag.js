const interestTag = {
    makeTagFrame : (interest) => {
        return /*html*/ `
        <div class="tag">
            <span class='tag_value'>${interest}</span>
            <div class="tag_close">&times;</div>
        </div>
        `;
    },
    tags : [],
    insertTagHandler : () => {
        const tagWrapper = document.getElementById('tag_wrapper');
        const interestInput = document.querySelector('#tag_input');
        let interestInputValue = ``;
        tagWrapper.addEventListener('keyup', (e) => {
            if(e.key===','){
                interestInputValue = interestInput.value;
                interestInputValue = interestInputValue.substring(0, interestInputValue.length-1);
                interestTag.tags.push(interestInputValue);
                interestTag.listTags(interestInput, tagWrapper);
            }
        });
    },
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
        interestInput.value = '';
        interestTag.removeTagHandler(interestInput, tagWrapper);
    },
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
    }
}

export {interestTag};