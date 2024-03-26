import widthCounter from "./widthCounter"

const HoverCounter = (props) => {

    //const [count, setCount] = useState(0);
    const {count, incrementCount} = props;

    return (
        <div>
            <button onMouseOver={incrementCount}>Hover me</button>
            <h2>Count is: {count} </h2>
        </div>
    )
}

export default widthCounter(HoverCounter, 5);
