//实现代码复制按键
function copyCode() {
    var copyText = document.getElementById("code");
    copyText.select();
    document.execCommand("copy");
}