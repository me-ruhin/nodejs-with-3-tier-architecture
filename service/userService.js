const User = require('../models/User')

exports.getallUser = async ()=>{
    const userLists = await User.find()
    return userLists;
}

exports.addNewUse = async(data)=>{
   
    const {name,email,password} = data
    
const user = new User({
    name,email,password
})
const newUser = await user.save()
return newUser;
 

}

exports.updateUser = async(id,data)=>{

    const {name,email,password} = data
    const user = await  User.updateOne({_id:id},{name,email,password})
return user;

}

exports.deleteUser = async (id) =>{

    const hasUserExit = await User.findById(id)
    console.log(hasUserExit)

    if(hasUserExit){
        const deleteUser = await User.deleteOne({_id:id})
        return deleteUser;
        
    }else{
        return new Error('User not found')

    }
  
}