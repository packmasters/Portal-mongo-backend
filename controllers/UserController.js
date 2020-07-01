const User = require('../models/User')
const callback = require('../utils/utils').callback

async function signUp(username,password,res){
        try {
            const user = new User({username,password})
            await user.save()
            const token = await user.generateAuthToken()
            return callback(res,null,200,{ user: user._id, token })
        } catch (error) {
            return callback(res,error,500,null)
        }
    }
    
    async function login(username,password,res){
        try {
            const user = await User.findByCredentials(username, password)
            if (!user) {
                callback(res,'Login failed! Check authentication credentials',400,null)
            }
            else{
                const token = await user.generateAuthToken()
                callback(res,null,200,{ user: user._id, token })
            }
        } catch (error) {
            callback(res,error,500,null)
        }
    }

    module.exports = {signUp,login}