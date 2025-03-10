// 刷新页面操作
window.onload = function () {
	document.body.style.display = "none";

	if (!sessionStorage.getItem("pageContent")) {
		load("home");
		setTimeout(() => {
			document.body.style.display = "block";
		}, 100);
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
	document.body.style.display = "none";

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

			setTimeout(() => {
				document.body.style.display = "block";
			}, 100);
		})
		.catch((error) => {
			console.error(error);
		});
}

function change_title(name) {
	document.title = title_map.find((title_map) => {
		if (title_map.name === name) {
			return title_map;
		}
	}).title;
}

function switch_sidebar() {
	let sidebar = document.querySelector(".sidebar");

	if (sidebar.style.left === "0px") {
		document.querySelector(".container").style.left = "36px";
		sidebar.style.left = "-220px";
	} else {
		document.querySelector(".container").style.left = "256px";
		sidebar.style.left = "0px";
	}
}

let title_map = [
	{
		name: "wallpaper",
		title: "壁纸",
	},
	{
		name: "dogcom",
		title: "校园网配置",
	},
	{
		name: "home",
		title: "Muxirr",
	},
];
