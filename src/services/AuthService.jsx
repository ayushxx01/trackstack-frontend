import { useNavigate } from "react-router-dom";

const base = '/api/users'

export const login = async (email,password)=> {

    try {
        const res = await fetch(`${base}/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        })

        return res.json();
    }
    catch(err){
        console.error(err);
    }
}

export const register = async (username,email,password) => {
    console.log(username,email,password);
    try {
        const res = await fetch(`${base}/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })

        return res.json();
    }
    catch(err){
        console.error(err);
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    
}