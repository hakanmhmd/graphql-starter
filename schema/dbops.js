module.exports = (mdb) => {
    return {
        getUser(userId) {
            return mdb.collection('data')
                .findOne({userId: Number(userId)})
                .then(res => {
                    return res;
                });
        }
    }
}