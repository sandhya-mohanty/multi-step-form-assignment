import { useState } from "react";
import Loader from "../components/Loader";
import Step7 from "./Step7";

function Step6() {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <div className="text-center mx-auto">
            {isLoading ? (
                <div className="w-100 mx-auto">
                    <Loader />
                </div>
            ) : (
                <div>
                    <Step7 />
                </div>
            )}
        </div>
    );
}

export default Step6;
