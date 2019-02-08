// 点击小方框弹出菜单
var button = document.getElementById("phone-nav-click");
var menu = document.getElementById("menu");
var boo = false;

button.onclick = function () {
    if(boo) {
        menu.style.height = "0vh";
        boo = false;
    } else {
        menu.style.height = "25vh";
        boo = true;
    }
}
