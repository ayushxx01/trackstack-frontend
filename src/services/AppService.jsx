import { data } from "react-router-dom"

const base = '/api/applications'

export const createApp = async (data)=> {
    try {
        const res = await fetch(`${base}/create`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })

        return res.json();
    }
    catch(err){
        console.error(err);
    }
}

export const getApps = async () => {
    try {
        const res = await fetch(`${base}/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`  
            },
            
        })
        return res.json();
    }
    catch(err){
        console.error(err);
    }
}

export const deleteApp = async (id) => {
    try {
        const res = await fetch(`${base}/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`  
            }
        })
        return res.json();
    }
    catch(err){
        console.error(err);
    }
}

export const updateApp = async (id,data) => {
    try {
        const res = await fetch(`${base}/update/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`  
            },
            body: JSON.stringify(data)
        })
        return res.json();
    }
    catch(err){
        console.error(err);
    }
}