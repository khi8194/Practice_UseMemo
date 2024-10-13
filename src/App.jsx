import Child from "./Child";
import { useState, useCallback } from "react";

export default function App() {
	console.log("parent");

	const [Counter, setCounter] = useState(0);
	const [Input, setInput] = useState("");
	// const arr = [1, 2, 3];
	const updateCounter = useCallback(() => setCounter(Counter + 1), [Counter]);
	//[] : 의존성 배열
	//의존성 배열을 비워두면 setCounter()함수 자체를 통째로 memorization함
	const colors = ["red", "green", "blue"];

	return (
		<div className="App">
			<h1>Parent</h1>
			<button onClick={() => setCounter(Counter + 1)}>plus</button>
			<p>{Counter}</p>
			<br />
			<input
				type="text"
				value={Input}
				onChange={(e) => setInput(e.target.value)}
			/>

			{/* <Child Counter={Counter} arr={arr} /> */}
			<Child Counter={Counter} updateCounter={updateCounter} colors={colors} />
		</div>
	);
}
