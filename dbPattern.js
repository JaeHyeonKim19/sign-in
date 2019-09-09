const dbPattern = {
    member(id, pwd, name, birth, gender, email, phone, interest){
        return {
            id : id,
            pwd : pwd,
            name : name,
            birth : birth,
            gender : gender,
            email : email,
            phone : phone,
            interest : interest
        };
    },
    session(sessionId, id, name, createDate, expireDate){
        return {
            sessionId : sessionId,
            id : id,
            name : name,
            createDate : createDate,
            expireDate : expireDate
        };
    }
}

module.exports = dbPattern;