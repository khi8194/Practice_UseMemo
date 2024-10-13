import { memo, useMemo } from "react";
import { isEqual } from "lodash";

//npm i lodash : isEqual 사용 가능
//참조형 자료가 전달될 때 참조주소를 확인하는 것이 아니라 값 자체를 비교

function Child(props) {
	console.log("child");

	// const heavyWork = () => {
	// 	let num = 0;
	// 	for (let i = 0; i < 700000000; i++) {
	// 		num++;
	// 	}
	// 	return num;
	// };
	const heavyWork = useMemo(() => {
		let num = 0;
		for (let i = 0; i < 700000000; i++) {
			num++;
		}
		return num;
	});

	return (
		<div>
			<h1>Child:{props.Counter}</h1>
			<h2>{heavyWork}</h2>
			<button onClick={props.updateCounter}>update</button>
		</div>
	);
}

//usEqual을 memo함수의 두번째 인수로 전달시 props로 참조형 자료가 젖달되더라도 해당 값이 변경되지 않으면 memorization유지
export default memo(Child, isEqual);
