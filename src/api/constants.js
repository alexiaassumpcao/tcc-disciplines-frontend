export const API_URL = "http://localhost:3001"
export const HEADERS = {
    "Content-Type": "application/json",
    "Accept": "*/*"
}
export function setAuthorizationnHeader(authToken) {
    if (authToken === "") {
        return HEADERS
    } else {
        var h = HEADERS
        h.authorization = `Bearer ${authToken}`
        return h
    }
}