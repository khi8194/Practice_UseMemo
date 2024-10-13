import { memo } from "react";

function Child(props) {
	console.log("child");

	return (
		<div>
			<h1>Child:{props.Counter}</h1>
		</div>
	);
}

export default memo(Child);
