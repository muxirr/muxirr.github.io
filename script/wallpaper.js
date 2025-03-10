const path = "../assets/img/";
const img = [
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

function change_img(op) {
	if (op !== 1 && op !== -1) {
		return "Op Code Error";
	}
	let imgs = document.getElementsByTagName("img")[0];
	let index = img.findIndex((img) => img.name === imgs.alt);

	if (index === -1) {
		return "Image Not Found";
	}

	index = (index + op + img.length) % img.length;

	imgs.src = path + img[index].name + "." + img[index].type;
	imgs.alt = img[index].name;

	sessionStorage.setItem(
		"page",
		JSON.stringify({
			name: "wallpaper",
			data: document.querySelector(".container").innerHTML,
			type: "html"
		})
	);
}
