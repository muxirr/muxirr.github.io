// 刷新页面操作
window.onload = function () {
  document.body.style.display = "none";
  const page = sessionStorage.getItem("page");
  if (!sessionStorage.getItem("page")) {
    load("home", "html");
  } else {
    load(page.name, page.type);
  }
};

function load(name, type) {
  let res = "../source/" + name + "." + type;
  document.body.style.display = "none";

  fetch(res)
    .then((response) => response.text())
    .then((data) => {
      let content = document.querySelector(".container");

      if (type === "md") {
        let container_md = document.createElement("div");
        container_md.classList.add("container-md");
        content.appendChild(container_md);
        data =
          '<div class="container-md">' +
          marked.parse(data) +
          '</div class="container-md">';
      }

      content.innerHTML = data;

      sessionStorage.setItem(
        "page",
        JSON.stringify({ name: name, type: type }),
      );

      if (type === "md") {
        add_button();
      }
      change_title(name);

      setTimeout(() => {
        document.body.style.display = "block";
      }, 100);
    })
    .catch((error) => console.error(error));
}

// 修改标题
function change_title(name) {
  document.title = title_map.find((title_map) => {
    if (title_map.name === name) {
      return title_map;
    }
  }).title;
}

// 处理代码块，添加“复制”按钮
function add_button() {
  document.querySelectorAll("pre").forEach((pre) => {
    const button = `<button class="copy-btn" onclick="copy_code(this)">${copy_svg}</button>`;
    pre.innerHTML += button;
  });
}

// 复制代码到剪贴板
function copy_code(button) {
  const pre = button.parentNode;
  const codeText = pre.innerText.trim();
  navigator.clipboard
    .writeText(codeText)
    .then(() => {
      button.innerHTML = "✔️ 已复制";
      button.classList.add("success"); // 添加成功状态样式
      setTimeout(() => {
        button.innerHTML = copy_svg;
        button.classList.remove("success"); // 移除成功状态样式
      }, 1500);
    })
    .catch((err) => console.error("复制失败:", err));
}

// 切换状态栏开关
function switch_sidebar() {
  let sidebar = document.querySelector(".sidebar");
  let sidebar_style = window.getComputedStyle(sidebar);

  let sidebar_left =
    parseFloat(sidebar_style.left) === 0
      ? parseFloat(sidebar_style.width) * -1
      : 0;

  sidebar.style.left = `${sidebar_left}px`;
}

// 一些常量
const title_map = [
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

const copy_svg = `<svg><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>`;
