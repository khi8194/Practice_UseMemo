const classInfo = ["2024-david", "2024-Emily", "2024-paul", "2024-michael"];

//map으로 한번에 처리
const newClassInfo = classInfo.map((data) => {
	return data.replace("2024", "2025");
});

console.log(newClassInfo);
