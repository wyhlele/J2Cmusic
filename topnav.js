const THEME_KEY = 'j2cmusic-theme';

/* =========================
   主题
   ========================= */

function getInitialTheme() {
    try {
        const savedTheme = localStorage.getItem(THEME_KEY);

        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
    } catch (e) {
        console.warn('无法读取主题设置:', e);
    }

    return window.matchMedia &&
           window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function saveTheme(theme) {
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
        console.warn('无法保存主题设置:', e);
    }
}

/* 尽可能早地设置主题 */
applyTheme(getInitialTheme());


/* =========================
   顶部导航
   ========================= */

const navConfig = {
    items: [
        { name: '简介', url: '/J2Cmusic/' },
        { name: '柚子专题', url: '/J2Cmusic/yuzu/' },
        { name: '其他音乐', url: '/J2Cmusic/else/' },
    ]
};

function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

function insertNav() {
    const currentURL = window.location.href;

    var newNav = document.createElement('nav');
    newNav.className = "top-nav";

    var newUl = document.createElement('ul');
    newUl.className = "nav-list";

    newNav.appendChild(newUl);

    for (let i = 0; i < navConfig.items.length; ++i) {
        var newItem = document.createElement('li');
        newItem.className = "nav-item";

        var newLink = document.createElement('a');

        newItem.appendChild(newLink);

        newLink.href = navConfig.items[i].url;
        newLink.textContent = navConfig.items[i].name;
        newLink.className = "nav-link";

        if (i == 0) {
            if (currentURL === newLink.href) {
                newLink.classList.add("active");
            } else if (currentURL === newLink.href + "index.html") {
                newLink.classList.add("active");
            }
        } else if (currentURL.startsWith(newLink.href)) {
            newLink.classList.add("active");
        }

        newUl.appendChild(newItem);
    }

    document.body.appendChild(newNav);
}


/* =========================
   日间 / 夜间按钮
   ========================= */

function insertThemeToggle() {
    const button = document.createElement('button');

    button.className = 'theme-toggle';
    button.type = 'button';

    function updateButton() {
        const currentTheme =
            document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            button.textContent = '☀';
            button.title = '切换至日间模式';
            button.setAttribute('aria-label', '切换至日间模式');
        } else {
            button.textContent = '☾';
            button.title = '切换至夜间模式';
            button.setAttribute('aria-label', '切换至夜间模式');
        }
    }

    updateButton();

    button.addEventListener('click', function () {
        const currentTheme =
            document.documentElement.getAttribute('data-theme');

        const newTheme =
            currentTheme === 'dark' ? 'light' : 'dark';

        applyTheme(newTheme);
        saveTheme(newTheme);
        updateButton();
    });

    document.body.appendChild(button);
}


loadCSS("/J2Cmusic/topnav.css");

insertNav();
insertThemeToggle();