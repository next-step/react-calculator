'use client'

import useCalculator from "./useCalculator";

export default function Home() {
	const {
    formula,
    number,
    add,
    subtract,
    multiply,
    divide,
    calculate,
    clearAll
  } = useCalculator()

  return (
		<>
			<div className="calculator">
				<h1 id="total">{formula}</h1>
				<div className="digits flex">
					{Array.from({ length: 10 }, (_, i) => (<button key={i} className="digit" onClick={()=>(number(9-i))}>{9-i}</button>))}
				</div>
				<div className="modifiers subgrid">
					<button className="modifier" onClick={() => clearAll()}>AC</button>
				</div>
				<div className="operations subgrid">
					<button className="operation" onClick={()=> divide()}>/</button>
					<button className="operation" onClick={()=> multiply()}>X</button>
					<button className="operation" onClick={()=> subtract()}>-</button>
					<button className="operation" onClick={()=> add()}>+</button>
					<button className="operation" onClick={()=> calculate()}>=</button>
				</div>
			</div>
		</>
  );
}
