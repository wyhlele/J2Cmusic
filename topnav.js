// 导航配置
const navConfig = {
    items: [
        { name: '简介', url: '/J2Cmusic/' },
        { name: '柚子专题', url: '/J2Cmusic/yuzu/' },
        { name: '其他音乐', url: '/J2Cmusic/else/' },
    ]
};

// 加载导航栏样式
function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

// 插入导航栏
function insertNav() {
    const currentURL = window.location.href;

    var newNav = document.createElement('nav');
    newNav.className = "top-nav";
    var newUl = document.createElement('ul');
    newUl.className = "nav-list";
    newNav.appendChild(newUl);

    for(let i=0;i<navConfig.items.length;++i){
        var newItem = document.createElement('li');
        newItem.className = "nav-item";

        var newLink = document.createElement('a');
        newItem.appendChild(newLink);
        newLink.href = navConfig.items[i].url;
        newLink.textContent = navConfig.items[i].name;
        newLink.className = "nav-link";
        if(i==0){
            if(currentURL === newLink.href){
                newLink.classList.add("active");
            }else if(currentURL === newLink.href+"index.html"){
                newLink.classList.add("active");
            }
        }else if(currentURL.startsWith(newLink.href)){
            newLink.classList.add("active");
        }

        newUl.appendChild(newItem);
    }

    document.body.appendChild(newNav);
}

loadCSS("/J2Cmusic/topnav.css")
insertNav();