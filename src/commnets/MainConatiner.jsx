import { useState } from "react";

export default function MainConatiner() {
    const [count, countSet] = useState(0);
    const conterApp = () => {
        countSet(count + 1)
    }
    return (
        <div className="main_container">
            <div className="inner-container">
                <h1>Hello World</h1>
                <p>Tasbeeh</p>
                <p onClick={conterApp} className="number_box">{count}</p>
            </div>
        </div>
    )
};