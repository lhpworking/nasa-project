import axios from "axios"
import qs from "query-string"

export const api = axios.create({
    baseURL: import.meta.env.VITE_HOST,
    paramsSerializer: (params) => qs.stringify({
        ...params,
        API_KEY: import.meta.env.VITE_SOME_KEY,
    })

})

axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})