const user = require("../data/user.json");
const userData = Array.from(user.data);

const getUsers = (req, res) => {
    res.json(userData);
}

const getuser = (req, res) => {
    try{
        const {uuid} = req.params;
        if(uuid){
            const response = userData.filter((usr) => usr.login.uuid == uuid);
            if(!response.length) throw "invalid params"
            res.status(200).json(response);
        }
    }catch (e){
        res.status(404).send(e);
    }

}

const searchUser = (req, res) => {
    res.send("searching user");
}

module.exports = {getUsers, getuser, searchUser};
