import { createContext, useState } from "react";
import { loginUser, getStudent } from "../api/users";
import { useCookies } from "react-cookie";

const AuthContext = createContext({})
const CookieName = 'authToken'

export const AuthProvider= ({ children }) => {
    const [user, setUser] = useState({})
    const [preferenceId, setPreferenceId] = useState(null)
    const [preferenceName, setPreferenceName] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies([CookieName])

    async function Login(requestBodyData) {
        const axiosResponse = await loginUser(requestBodyData)
        setCookie(CookieName, axiosResponse.data.authToken)
        setUser(axiosResponse.data)
        setPreferenceId(axiosResponse.data.preferenceId)
        setPreferenceName(axiosResponse?.data?.preference?.name)
        return axiosResponse
    }

    async function RefreshUserInfo() {
        const axiosResponse = await getStudent(cookies.authToken, user?.id)
        setUser(axiosResponse.data)
        console.log("My user: ", user)
        setPreferenceName(axiosResponse?.data?.preference?.name)
        return axiosResponse
    }

    function Logout() {
      removeCookie(CookieName)
    }

    function GetAuthToken() {
      return cookies.authToken
    }

    return (
      <AuthContext.Provider value={{ signed: Boolean(user), Login, Logout, GetAuthToken, user, RefreshUserInfo, setPreferenceId, preferenceId, setPreferenceName, preferenceName }}>
        {children}
      </AuthContext.Provider>
    );
   };

export default AuthContext;