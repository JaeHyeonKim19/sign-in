const util = {
    /**
     * Make message into DOM object.
     * 
     * @param {Array} messageObject Array which is including DOM ojbect and message.
     */
    async printMessage(messageObject){
        messageObject[0].innerHTML = messageObject[1];
    }
}

export {util};