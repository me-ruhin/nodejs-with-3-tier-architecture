const userService = require('../service/userService')

exports.getHandeler = async (req,res)=>{

  const userLists = await userService.getallUser()
  if(!userLists){res.send('</p>User not found </p>')}

  res.send(userLists)

}

exports.postHandeler = async(req,res)=>{
    // console.log(req.body)

 const user = await userService.addNewUse(req.body)

 console.log(user)

}

exports.putHandeler = async (req,res)=>{

        // console.log(req.body)

    const user = await userService.updateUser(req.params.id,req.body)

    console.log(user)

}


exports.deleteHandeler = async (req,res)=>{

    const deleteUser = await userService.deleteUser(req.params.id)

    if(deleteUser instanceof Error){
        res.status(404).send(deleteUser.message)
    }else{
        res.status(200).send('User successfully deleted')
    }
 
}