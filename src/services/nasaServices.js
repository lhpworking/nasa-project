import { api } from "../constants/api"

export const nasaServices = {
    getAPOD(date = "") {
        return api.get(`/planetary/apod?api_key=${import.meta.env.VITE_SOME_KEY}&date=${date}`)
    },
}