import {URL} from './../../constants';

export default class AuthService{
    static Login(email,password){
        return new Promise((resolve,reject)=>{
            fetch(`${URL}/users/login`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            }).then(res=>res.json()).then(info=>{
                if(info.status=='success'){
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    }

    static Verify(email){
        return new Promise((resolve,reject)=>{
            fetch(`${URL}/users/verifyEmail`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email
                })
            }).then(res=>res.json()).then(info=>{
                console.warn(info)
                if(info.status=='success'){
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    }

    static Register(name,verificationCode,email,password,phoneNumber,college){
        return new Promise((resolve,reject)=>{
            fetch(`${URL}/users/register`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:name,
                    verificationCode:verificationCode,
                    email:email,
                    password:password,
                    phoneNumber:phoneNumber,
                    college:college
                })
            }).then(res=>res.json()).then(info=>{
                if(info.status=='success'){
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    }
}