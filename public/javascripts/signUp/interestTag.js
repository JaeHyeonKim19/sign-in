const interestTag = {
    makeTagFrame : (interest) => {
        const tagFrame = `
        <div class="tag">
            <span>${interest}</span>
            <div class="tag_close">&times;</div>
        </div>
        `;
        return tagFrame;
    },
    insertTagHandler : () => {
        const tagWrapper = document.getElementById('tag_wrapper');
        const interestInput = document.querySelector('#tag_input');
        let interestInputValue = ``;
        let tag = ``;
        tagWrapper.addEventListener('keyup', (e) => {
            if(e.key===','){
                interestInputValue = interestInput.value;
                interestInputValue = interestInputValue.substring(0, interestInputValue.length-1);
                tag = interestTag.makeTagFrame(interestInputValue);
                interestInput.insertAdjacentHTML('beforebegin', tag);
                interestInput.value = '';
            }
        });

    }
}

export {interestTag};