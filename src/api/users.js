import axios from "axios";
import { API_URL, HEADERS, setAuthorizationnHeader } from "./constants";

export async function updateUser(authToken, userId, studentId, requestBodyData) {
    const axiosResponse = await axios.patch(`${API_URL}/users/${userId}/students/${studentId}`, requestBodyData,
        {
            headers:setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}

export async function loginUser(requestBodyData) {
    const axiosResponse = await axios.post(`${API_URL}/users/auth`, requestBodyData,
        {
            headers: HEADERS,
        });
    return axiosResponse
}


export async function getStudent(authToken, userId) {
    const axiosResponse = await axios.get(`${API_URL}/users/${userId}?type=student`,
        {
            headers: setAuthorizationnHeader(authToken),
        });
    return axiosResponse
}

export async function createStudent(requestBodyData) {
    const axiosResponse = await axios.post(`${API_URL}/users?type=student`, requestBodyData,
        {
            headers: HEADERS,
        });
    return axiosResponse
}

export async function sendFile(formData) {
    const response = await fetch(`${API_URL}/files`, {
      method: 'POST',
      body: formData,
    })
    const jsonResponse = await response.json();
    
    return jsonResponse
}