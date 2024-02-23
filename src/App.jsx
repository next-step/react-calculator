import React, { useState } from 'react';

function App() {
    const [total, setTotal] = useState(0);

    return (
        <div id="app">
            <div className="calculator">
                <div id="total">{total}</div>

                <div className="subgrid modifiers">
                    <button>AC</button>
                </div>

                <div className="subgrid operations">
                    <button>/</button>
                    <button>X</button>
                    <button>+</button>
                    <button>-</button>
                    <button>=</button>
                </div>

                <div className="digits">
                    <button className="">9</button>
                    <button className="">8</button>
                    <button className="">7</button>
                    <button className="">6</button>
                    <button className="">5</button>
                    <button className="">4</button>
                    <button className="">3</button>
                    <button className="">2</button>
                    <button className="">1</button>
                    <button className="">0</button>
                </div>
            </div>
        </div>
    );
}

export default App;
