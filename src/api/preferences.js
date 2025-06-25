import axios from "axios";
import { API_URL, setAuthorizationnHeader } from "./constants";

export async function getPreferencePerfilFormQuestions(authToken) {
    const axiosResponse = await axios.get(`${API_URL}/preferences/questions`,
        {
            headers: setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}


export async function sendPreferencePerfilFormResponses(authToken, userId, requestBody) {
    const axiosResponse = await axios.patch(`${API_URL}/users/${userId}/preferences`, requestBody, 
        {
            headers: setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}