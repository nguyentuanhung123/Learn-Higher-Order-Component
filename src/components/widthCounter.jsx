import { useState } from "react"

const widthCounter = (OldComponent, incrementBy = 1) => {

    return function EnhancedComponent(props){

        const [count, setCount] = useState(0);

        return(
            <OldComponent {...props} count={count} incrementCount={() => setCount(count + incrementBy)} name='widthCounter' />
        )
    }
}

export default widthCounter;

// const NewComponent = widthCounter(oldComponent);
// <NewComponent />

