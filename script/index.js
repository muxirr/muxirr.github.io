function load(name) {
	let res = "./source/" + name + ".html";

	fetch(res)
		.then((response) => response.text()) // 获取 HTML 内容
		.then((data) => {
			let content = document.querySelector(".container");

			sessionStorage.setItem("pageContent", data); // 保存 HTML 内容到 localStorage

			content.innerHTML = data; // 插入新内容
		})
		.catch((error) => {
			console.error("加载 HTML 失败:", error);
		});
}

window.onload = function () {
	// 检查 localStorage 是否有保存的内容
	let page = sessionStorage.getItem("pageContent");

	if (page) {
		document.getElementsByClassName("container")[0].innerHTML = page; // 恢复保存的 HTML 内容
	} else {
		load("home"); // 默认加载页面
	}
};
