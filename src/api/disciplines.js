import axios from "axios";
import { API_URL, setAuthorizationnHeader } from "./constants";

export async function sendSelectedDisciplines(authToken, userId, requestData) {
    const axiosResponse = await axios.post(`${API_URL}/disciplines/selected?studentId=${userId}`, requestData,
        {
            headers: setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}

export async function getRecomendsDisciplinesList(authToken, userId) {
    const axiosResponse = await axios.get(`${API_URL}/recommends?studentId=${userId}`,
        {
            headers: setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}

export async function getSelectedDisciplines(authToken, userId) {
    const axiosResponse = await axios.get(`${API_URL}/disciplines/selected?studentId=${userId}`,
        {
            headers: setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}

export async function getDisciplinesList(authToken, disciplineName) {
    const axiosResponse = await axios.get(`${API_URL}/disciplines?name=${disciplineName}`,
        {
            headers: setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}

