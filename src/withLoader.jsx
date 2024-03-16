import React, { useState } from "react";

const withLoader = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000)

        return (
            <div>
                {isLoading ? <p>Loading...</p> : <WrappedComponent {...props}/>}
            </div>
        )
    }
}

export default withLoader;