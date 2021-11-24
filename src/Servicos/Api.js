import axios from "axios";


const baseUrl = "https://labeninjas.herokuapp.com/"
const key = "c16ec737-3449-4c8f-b9c9-40e539f06238"

export const getServicos = () => {

    const url = baseUrl + "jobs"
    const request = axios.get(url,{
        headers:{
            "Authorization": key
        }
    })

    request.then((res) => {
        console.log(res.data)
        return res.data.jobs
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const getServicoPorId = (id) =>{
    const url = baseUrl + "jobs/" + id

    axios.get(url,{
        headers:{
            "Authorization": key 
        }
    })
    
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const postServicos = (body) => {

    const url = baseUrl + "jobs"
    const request = axios.post(url,body,{
        headers:{
            "Authorization": key
        }
    })

    request.then((res) => {
        return res.data.message
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const atualizarServicos = (boleano, id) => {

    const url = baseUrl + "jobs/" + id
    const body = {
        "taken":boleano
    }
    axios.post(url, body,{
        headers:{
            "Authorization": key 
        }
    })

    .then((res) => {
       return res.data.message
    })

    .catch((err) => {
        console.log(err)
    })
}

export const deletarServico = (id) => {
    const url = baseUrl + "jobs/" + id

    axios.delete(url,{
        headers:{
            "Authorization": key
        }
    })
    .then((res) => {
        console.log(res.status)
    })
    .catch((err) => {
        console.log(err)
    })
}

