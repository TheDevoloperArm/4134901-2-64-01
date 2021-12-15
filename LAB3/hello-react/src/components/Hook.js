import React, {useState, useEffect} from "react";

function Hook() {
    const [color, setColor] = useState("red");
    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(1);
    const [car, setCar] = useState({
        brand: "Mazda",
        year: 2012,
        color: "red"
    });

    const updateCarColor = () =>{
        setCar ((previousState) => {
            return {...previousState, color:"green"}
        });
    };

    useEffect(() => {
        document.title = 'change Stege ${count} : ${color}';
        setTimeout(() => {
            setMulti(() => count*2);
        }, 1000);
    }, [count]);

    return (
        <>
            <p>Color is {color}</p>
            <button onclik={() => setColor("blue")}>Change</button>
            <p>Count is {count}</p>
            <p>multi of count is {multi}</p>
            <button onclik={() => setCount(count + 1)}>Inc</button>
            <p>Car color is {car.color}</p>
            <button onclik={updateCarColor}>Color</button>
        </>);
}

export default Hook;