import axios from 'axios'
import { API_URL } from '../utils/API_url'

export const login = async(email,password)=>{
    try{
        const response = await axios.post(`${API_URL.login}`,{
            email:email,
            password:password,
            rememberMe:true,
            timezoneOffset:0
        })
        return response;

    }
    catch(error){
        console.error(error)
        throw error
    }
}

export const getData = async()=>{
    try{

        const response = await axios.get('https://api.enfinitesmartschool.com/api/Student/app/dashboard-info/?id=51bdb011-69c3-430b-b610-f51b3651aeb2')
        return response;

    }
    catch(error){
        console.error(error)
        throw error
    }
}