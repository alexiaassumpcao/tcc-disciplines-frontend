import { useEffect, useState } from "react";
import ConfirmSignUpPage from "../containers/ConfirmSignUpPage";
import SignUp from "./SignUp";

export default function SignUpPage(props) {
    const [fileProccessData, setFileProccessData] = useState(undefined)
    const [isConfirmPage, setIsConfirmPage] = useState(false)

    return (
        <>
            {(isConfirmPage === true) ? 
            <>
                {fileProccessData ? 
                        <ConfirmSignUpPage 
                        fileProccessData={fileProccessData}
                        setIsConfirmPage={setIsConfirmPage}
                        props={props}
                    />
                    :
                    <h2>Loading...</h2>
                }
                
                </>
                :
                <SignUp 
                    setFileProccessData={setFileProccessData}
                    setIsConfirmPage={setIsConfirmPage}
                    props={props}
                    fileProccessData={fileProccessData}
                />
            }
        </>
    )
}