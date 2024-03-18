const User = require("../models/user");
const bcrypt = require('bcrypt');

class UserService{
    async getAll (){
        const users = User.find();
        return users;
    }
    async login (username,email){
        User.findOne({ username: username, email:email }, (err, user) => {
            if (err) {
              console.log("Error");
            } else {
              var payload = {
                id: user.id,
                expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
              };
        
              var token = jwt.encode(payload, "99c0003a218b94e0eba0260cc1ec5a1767976ba39fb279a38cc0c2ebca6ed388");
        
              res.json({ token: token });
            }
          });
    };
    
    async register (user){
        User.register({
            email:user.email,
            username:usesr.username
        }),
        function(err,msg){
            if(err){
                return err;
            }else{
                return "Successful";
            }
        }

    }
}
module.exports = new UserService();