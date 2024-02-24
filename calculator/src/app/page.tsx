'use client'

import { useState } from "react";
import CalculatorClass from "./CalculatorClass";

export default function Home() {
  const [monitor,setMonitor] = useState<string>('0')
  const calculator = new CalculatorClass()

  return (
			<div className="calculator">
				<h1 id="total">{monitor}</h1>
				<div className="digits flex">
					{Array.from({ length: 10 }, (_, i) => (<button key={i} className="digit" onClick={()=>setMonitor(calculator.number(9-i))}>{9-i}</button>))}
				</div>
				<div className="modifiers subgrid">
					<button className="modifier" onClick={() => { setMonitor(calculator.clearAll()) }}>AC</button>
				</div>
				<div className="operations subgrid">
					<button className="operation" onClick={()=>setMonitor(calculator.divide())}>/</button>
					<button className="operation" onClick={()=>setMonitor(calculator.multiply())}>X</button>
					<button className="operation" onClick={()=>setMonitor(calculator.subtract())}>-</button>
					<button className="operation" onClick={()=>setMonitor(calculator.add())}>+</button>
					<button className="operation" onClick={()=>setMonitor(calculator.calculate())}>=</button>
				</div>
			</div>
  );
}
