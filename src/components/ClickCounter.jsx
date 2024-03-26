import widthCounter from "./widthCounter"
import widthName from "./widthName";

const ClickCounter = (props) => {

    //const [count, setCount] = useState(0);
    const {count, incrementCount, name} = props;

    return (
        <div>
            <button onClick={incrementCount}>Click me</button>
            <h2>Count is: {count} </h2>
            <h2>Name is: {name}</h2>
        </div>
    )
}

export default widthName(widthCounter(ClickCounter, 10));
