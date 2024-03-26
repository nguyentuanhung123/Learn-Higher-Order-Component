import widthCounter from "./widthCounter"

const ClickTwo = (props) => {

    //const [count, setCount] = useState(0);
    const {count, incrementCount} = props;

    return (
        <div>
            <button onClick={incrementCount}>Click me</button>
            <h2>Count is: {count} </h2>
        </div>
    )
}

export default widthCounter(ClickTwo);
