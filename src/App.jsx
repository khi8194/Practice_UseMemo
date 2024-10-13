import Child from "./Child";
import { useState } from "react";

export default function App() {
	console.log("parent");

	const [Counter, setCouter] = useState(0);
	const [Input, setInput] = useState("");
	const arr = [1, 2, 3];

	return (
		<div className="App">
			<h1>Parent</h1>
			<button onClick={() => setCouter(Counter + 1)}>plus</button>
			<p>{Counter}</p>
			<br />
			<input
				type="text"
				value={Input}
				onChange={(e) => setInput(e.target.value)}
			/>

			<Child Counter={Counter} arr={arr} />
		</div>
	);
}
