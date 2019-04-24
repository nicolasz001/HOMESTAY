import Axios from "axios"

const VUE_APP_API_URL = process.env.VUE_APP_API_URL

const axios = Axios.create({
    baseURL : VUE_APP_API_URL,
    timeout : 10000,
})

export default axios
