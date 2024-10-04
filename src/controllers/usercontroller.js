import User from '../models/user.js'
import crypto from 'node:crypto'

export const createUser=async(req,res)=>{
    try{
        const userToCreate={
            id:crypto.randomUUID(),
            name:req.body.name,
            age:req.body.age,
            email:req.body.email
        
           }
            const user=await User.create(userToCreate)
        
            res.status(200).json(user)
             }catch(err){
                res.status(500).json(err)
             }
        }
        


export const Getall=async(req,res)=>{
    try{
        const users=await User.findAll()
            res.status(200).json(users) 

    }catch(err){
        res.status(500).json(err)
        
    }
}


export const Deletar=async(req,res)=>{
    try{
    const user=await User.destroy({
        where:{id:req.params.id}
    })
    res.status(201).send({message:`usuario com id ${req.params.id} deletado com sucesso ` })
    }catch(err){
        res.status(500).send({message:err})
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        await User.update(
            { name, age, email }, 
            { where: { id } } 
        );

        const updatedUser = await User.findByPk(id); 
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
