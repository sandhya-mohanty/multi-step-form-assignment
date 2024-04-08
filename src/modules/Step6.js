
import { useState } from "react";
import Loader from "../components/Loader";
import Step7 from "./Step7";
 
function Step6() {
    const [isLoading, setIsLoading] = useState(true);
 
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return (
        <div
            style={{
                textAlign: "center",
                margin: "auto",
            }}>
           
            {isLoading ? (
                <div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <div>
                   <Step7/>
                </div>
            )}
        </div>
    );
}
 
export default Step6;