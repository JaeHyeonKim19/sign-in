const util = {
    async printMessage(messageObject){
        messageObject[0].innerHTML = messageObject[1];
    }
}

export {util};