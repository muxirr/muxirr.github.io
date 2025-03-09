// 刷新页面操作
window.onload = function () {
	document.body.style.display = "none";

	if (!sessionStorage.getItem("pageContent")) {
		load("home").then(() => {
			document.body.style.display = "block";
		});
		return;
	}

	let page = JSON.parse(sessionStorage.getItem("pageContent")).data;

	document.getElementsByClassName("container")[0].innerHTML = page;
	change_title(JSON.parse(sessionStorage.getItem("pageContent")).name);

	setTimeout(() => {
		document.body.style.display = "block";
	}, 100);
};

function load(name) {
	let res = "../source/" + name + ".html";

	fetch(res)
		.then((response) => response.text()) // 获取 HTML 内容
		.then((data) => {
			let content = document.querySelector(".container");

			sessionStorage.setItem(
				"pageContent",
				JSON.stringify({ name: name, data: data })
			); // 保存 HTML 内容到 localStorage

			content.innerHTML = data; // 插入新内容
			change_title(name);
		})
		.catch((error) => {
			console.error("加载 HTML 失败:", error);
		});
}

function change_title(name) {
	document.title = title_map.find((title_map) => {
		if (title_map.name === name) {
			return title_map;
		}
	}).title;
}

let title_map = [
	{
		name: "wallpaper",
		title: "壁纸",
	},
	{
		name: "jlu_network",
		title: "校园网配置",
	},
	{
		name: "home",
		title: "Muxirr",
	},
];
