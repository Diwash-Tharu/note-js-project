import e from 'express';
import mongoose , { Schema } from 'mongoose';
import jtw from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const userSchema = new Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            index:true
            // this is used for the serarchause for index true 
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            index:true
        },
        avatar:{
            type:String,
            trim:true,
            required:true,
            
        },
        coverImage:{
            type:String,
            trim:true,
            
        }, 
        watchHistory : [
            {
                type:Schema.Types.ObjectId,
                ref:'Video'
            }
        ],
        password:{
            type:String,
            required:[true, 'Password is required'],
            trim:true
        },
        refreshToken:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(err){
        next(err);
    }
});

userSchema.methods.isPasswordCorrect= async function(password)
{
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function(){
    return jwt.sign({_id:this._id,
    userName:this.userName,
    email:this.email,
    fullName:this.fullName,
    }, 
    process.env.ACCESS_TOKEN_SECRET, 
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRES
    });
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({_id:this._id,
  
        }, 
        process.env.REFRESH_TOKEN_SECRET, 
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRES
        });

export const User = mongoose.model('User', userSchema);