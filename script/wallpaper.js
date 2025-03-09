let path = "../assets/img/";
let img = [
	{
		name: "castorice",
		type: "jpg",
	},
	{
		name: "firefly",
		type: "jpg",
	},
	{
		name: "firefly2",
		type: "png",
	},
	{
		name: "firefly3",
		type: "jpg",
	},
	{
		name: "nahida8",
		type: "jpg",
	},
	{
		name: "nahida42",
		type: "jpg",
	},
	{
		name: "nahida58",
		type: "png",
	},
	{
		name: "seele",
		type: "jpg",
	},
];

function change(op) {
	if (op !== 1 && op !== -1) {
		return "Op Code Error";
	}
	let imgs = document.getElementsByTagName("img")[0];
	index = img.findIndex((img) => img.name === imgs.alt);

	if (index === -1) {
		return "Image Not Found";
	}

	if (index === 0 && op === -1) {
		index = img.length - 1;
	} else if (index === img.length - 1 && op === 1) {
		index = 0;
	} else {
		index += op;
	}

	imgs.src = path + img[index].name + "." + img[index].type;
	imgs.alt = img[index].name;
	imgs.innerHTML = imgs;
}
