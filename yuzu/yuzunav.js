/**
 * 左侧次级导航栏 - 纯逻辑封装
 * 依赖：styles.css（必须单独引入）
 * 功能：作品分类展开 + 项目选择切换 URL
 */

(function() {
    'use strict';

    // 导航配置数据 - URL 结构：works/分类文件夹/项目.html
    const sidebarConfig = {
        title: '柚子の小曲',
        basePath: '/J2Cmusic/yuzu', // 基础路径前缀
        categories: [
            {
                id: 'buraban',
                name: '管乐恋曲! -The Bonds of Melody-',
                folder: 'buraban', // 对应 URL 中的文件夹名
                expanded: true,
                projects: [
                    { name: 'Beautiful Harmony', file: 'yuzu0100.html' },
                    { name: 'My Dear', file: 'yuzu01ff.html' },
                ]
            },
            {
                id: 'ExE',
                name: 'Empty × Embryo',
                folder: 'ExE',
                expanded: false,
                projects: [
                    { name: 'Trust in me', file: 'vi.html' },
                    { name: 'True Drop', file: 'poster.html' },
                ]
            },
            {
                id: 'natsu',
                name: '夏空彼方',
                folder: 'natsu',
                expanded: false,
                projects: [
                    { name: '想いのカナタ', file: 'commercial.html' },
                    { name: 'リフレイン', file: 'concept.html' },
                ]
            },
            {
                id: 'tenshin',
                name: '天神乱漫 LUCKY or UNLUCKY!?',
                folder: 'tenshin',
                expanded: false,
                projects: [
                    { name: 'メチャ恋らんまん', file: 'mg.html' },
                    { name: 'MUGEN∞MIRAI', file: 'demo.html' },
                    { name: 'Charge of Soul', file: 'mg.html' },
                    { name: '小さな願い', file: 'demo.html' },
                    { name: 'With you!!', file: 'mg.html' },
                    { name: 'モットー', file: 'demo.html' },
                ]
            },
            {
                id: 'nw',
                name: 'Noble☆Works',
                folder: 'nw',
                expanded: false,
                projects: [
                    { name: 'Change&Chance!', file: 'mg.html' },
                    { name: '光差す未来', file: 'demo.html' },
                    { name: '恋の爆弾', file: 'mg.html' },
                    { name: 'お仕事します', file: 'demo.html' },
                    { name: '誰にも言えない秘密です', file: 'mg.html' },
                    { name: 'だっしゅ☆', file: 'demo.html' },
                    { name: '青い鳥', file: 'demo.html' },
                ]
            },
            {
                id: 'dracuriot',
                name: 'DRACU-RIOT!',
                folder: 'dracuriot',
                expanded: false,
                projects: [
                    { name: 'Scarlet', file: 'mg.html' },
                    { name: '君だけの僕', file: 'demo.html' },
                    { name: 'Love Incident', file: 'mg.html' },
                    { name: 'Growing!', file: 'demo.html' },
                    { name: 'きっと大丈夫', file: 'mg.html' },
                    { name: 'NO LIMIT', file: 'demo.html' },
                ]
            },
            {
                id: 'amairo',
                name: '天色幻想岛',
                folder: 'amairo',
                expanded: false,
                projects: [
                    { name: 'Blue-Love Chime', file: 'mg.html' },
                    { name: '天色', file: 'demo.html' },
                    { name: 'step forward', file: 'mg.html' },
                    { name: '私だけの空', file: 'demo.html' },
                    { name: 'アオゾラキャンバス', file: 'mg.html' },
                    { name: '大好きなんだ', file: 'demo.html' },
                ]
            },
            {
                id: 'sothewitch',
                name: '魔女的夜宴',
                folder: 'sothewitch',
                expanded: false,
                projects: [
                    { name: '恋せよ乙女!', file: 'mg.html' },
                    { name: 'Re:Start~君とまた出逢えて', file: 'mg.html' },
                    { name: 'sweet treasure', file: 'demo.html' },
                    { name: '天使の羽とクリスタル', file: 'mg.html' },
                    { name: 'リアルフレンド', file: 'demo.html' },
                    { name: 'スカート',Sile: 'mg.html' },
                    { name: 'Sweet Sweet アリス', file: 'demo.html' },
                    { name: '君がくれた光', file: 'mg.html' },
                    { name: 'Midday Star', file: 'demo.html' },
                    { name: '大好き', file: 'mg.html' },
                    { name: 'Without You', file: 'demo.html' },
                ]
            },
            {
                id: 'senren',
                name: '千恋＊万花',
                folder: 'senren',
                expanded: false,
                projects: [
                    { name: '恋ひ恋ふ縁', file: 'mg.html' },
                    { name: '愛しさと感謝の気持ちを', file: 'mg.html' },
                    { name: 'とおりゃんせ~甘美風来', file: 'demo.html' },
                    { name: 'ふたりで', file: 'mg.html' },
                    { name: '茉子の日常', file: 'demo.html' },
                    { name: 'ふたつの影',Sile: 'mg.html' },
                    { name: 'キズナヒトツ', file: 'demo.html' },
                    { name: 'GIFT', file: 'mg.html' },
                    { name: 'Blue Sky', file: 'demo.html' },
                    { name: 'Love flower', file: 'mg.html' },
                    { name: 'キミのとなり', file: 'demo.html' },
                ]
            },
            {
                id: 'riddle',
                name: 'RIDDLE JOKER',
                folder: 'riddle',
                expanded: false,
                projects: [
                    { name: 'astral ability', file: 'mg.html' },
                    { name: 'ゆびきり', file: 'mg.html' },
                    { name: 'PERFECT GIRL', file: 'demo.html' },
                    { name: 'ずっと', file: 'mg.html' },
                    { name: 'Sympathy', file: 'demo.html' },
                    { name: '初恋',Sile: 'mg.html' },
                    { name: '強がるオトナのSecret Labo', file: 'demo.html' },
                    { name: '恋だより', file: 'mg.html' },
                    { name: '大和撫子は憧れ', file: 'demo.html' },
                    { name: '陽だまり笑顔で', file: 'mg.html' },
                ]
            },
            {
                id: 'stella',
                name: '星光咖啡馆与死神之蝶',
                folder: 'stella',
                expanded: false,
                projects: [
                    { name: 'Smiling-Swinging!!', file: 'mg.html' },
                    { name: 'スィートマリージュ', file: 'mg.html' },
                    { name: 'Only you!', file: 'demo.html' },
                    { name: '@Your Side', file: 'mg.html' },
                    { name: 'Sweetest Bitterness', file: 'demo.html' },
                    { name: 'ほんとにありがとう',Sile: 'mg.html' },
                    { name: '心地いい日常', file: 'demo.html' },
                    { name: '光', file: 'mg.html' },
                    { name: 'Happy Sunshine', file: 'demo.html' },
                    { name: 'Cold&Sweet', file: 'mg.html' },
                ]
            },
            {
                id: 'parquet',
                name: 'PARQUET',
                folder: 'parquet',
                expanded: false,
                projects: [
                    { name: 'BEYOND', file: 'mg.html' },
                    { name: 'フレルフルエル', file: 'demo.html' },
                ]
            },
            {
                id: 'ten_sz',
                name: '天使☆嚣嚣 RE-BOOT!',
                folder: 'ten_sz',
                expanded: false,
                projects: [
                    { name: 'FUN FUN RE-BOOT', file: 'mg.html' },
                    { name: 'Call My Name', file: 'mg.html' },
                    { name: '君とボクのハジメテ', file: 'demo.html' },
                    { name: 'ねぇ。', file: 'mg.html' },
                    { name: 'ワタシだけ', file: 'demo.html' },
                    { name: '以心伝心ジャーニー',Sile: 'mg.html' },
                    { name: 'アオハルデイズ', file: 'demo.html' },
                    { name: 'DIVE', file: 'mg.html' },
                    { name: '惚れて揺れて恋焦がれ', file: 'demo.html' },
                    { name: '幸せの魔法', file: 'mg.html' },
                    { name: 'wish', file: 'demo.html' },
                ]
            },
            {
                id: 'lllj',
                name: 'LimeLight Lemonade Jam',
                folder: 'lllj',
                expanded: false,
                projects: [
                    { name: '明け星', file: 'mg.html' },
                    { name: 'Be brand new', file: 'mg.html' },
                    { name: '放光酸化', file: 'mg.html' },
                    { name: '幻灯花火', file: 'mg.html' },
                    { name: '陽だまりのように', file: 'mg.html' },
                    { name: 'RGB', file: 'mg.html' },
                    { name: '燈月小夜曲', file: 'mg.html' },
                    { name: '最終快速', file: 'mg.html' },
                    { name: 'FOR GLORY (with "gem of rubble")', file: 'mg.html' },
                ]
            }
        ]
    };

    // 构建完整 URL
    function buildUrl(categoryFolder, projectFile) {
        return `${sidebarConfig.basePath}/${categoryFolder}/${projectFile}`;
    }

    // 创建左侧导航栏 DOM
    function createSidebar() {
        const sidebar = document.createElement('nav');
        sidebar.className = 'sidebar-nav';
        sidebar.id = 'sidebarNav';

        // 标题
        const header = document.createElement('div');
        header.className = 'sidebar-header';
        header.innerHTML = `<div class="sidebar-title">${sidebarConfig.title}</div>`;
        sidebar.appendChild(header);

        // 分类列表
        const list = document.createElement('ul');
        list.className = 'sidebar-list';

        sidebarConfig.categories.forEach(category => {
            const categoryItem = document.createElement('li');
            categoryItem.className = 'sidebar-category';
            categoryItem.dataset.folder = category.folder;
            if (category.expanded) categoryItem.classList.add('expanded');

            // 分类标题
            const title = document.createElement('div');
            title.className = 'sidebar-category-title';
            title.textContent = category.name;
            title.addEventListener('click', () => {
                categoryItem.classList.toggle('expanded');
            });

            // 项目列表
            const projectsList = document.createElement('ul');
            projectsList.className = 'sidebar-projects';

            category.projects.forEach(project => {
                const projectItem = document.createElement('li');
                const link = document.createElement('a');
                link.className = 'sidebar-project-link';
                link.href = buildUrl(category.folder, project.file);
                link.textContent = project.name;
                link.dataset.folder = category.folder;
                link.dataset.file = project.file;
                
                link.addEventListener('click', (e) => {
                    // 移除所有激活状态
                    document.querySelectorAll('.sidebar-project-link').forEach(l => {
                        l.classList.remove('active');
                    });
                    // 激活当前
                    link.classList.add('active');
                });

                projectItem.appendChild(link);
                projectsList.appendChild(projectItem);
            });

            categoryItem.appendChild(title);
            categoryItem.appendChild(projectsList);
            list.appendChild(categoryItem);
        });

        sidebar.appendChild(list);
        return sidebar;
    }

    // 创建移动端切换按钮
    function createMobileToggle() {
        const toggle = document.createElement('button');
        toggle.className = 'sidebar-toggle';
        toggle.innerHTML = '◀';
        toggle.setAttribute('aria-label', '切换菜单');

        const sidebar = document.getElementById('sidebarNav');
        
        // 创建遮罩
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.id = 'sidebarOverlay';
        
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        });

        toggle.addEventListener('click', () => {
            const isShow = sidebar.classList.contains('show');
            sidebar.classList.toggle('show');
            overlay.classList.toggle('show');
            toggle.innerHTML = isShow ? '◀' : '▶';
        });

        // 点击链接后关闭菜单
        sidebar.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && window.innerWidth <= 768) {
                sidebar.classList.remove('show');
                overlay.classList.remove('show');
                toggle.innerHTML = '◀';
            }
        });

        document.body.appendChild(overlay);
        return toggle;
    }

    // 根据当前 URL 高亮对应项目
    // URL 格式：xxx/分类文件夹/项目.html
    function highlightCurrentProject() {
        const currentPath = window.location.pathname;
        
        // 解析当前路径，获取文件夹和文件名
        // 例如：/works/web/enterprise.html 或 works/web/enterprise.html
        const pathParts = currentPath.split('/').filter(p => p);
        
        // 至少需要 basePath/category/file.html
        if (pathParts.length < 2) return;

        // 找到 basePath 的索引
        const baseIndex = pathParts.indexOf(sidebarConfig.basePath);
        if (baseIndex === -1) return;

        // 获取分类文件夹和文件名
        const categoryFolder = pathParts[baseIndex + 1];
        const projectFile = pathParts[baseIndex + 2];

        if (!categoryFolder || !projectFile) return;

        // 匹配并高亮
        document.querySelectorAll('.sidebar-project-link').forEach(link => {
            const linkFolder = link.dataset.folder;
            const linkFile = link.dataset.file;

            if (linkFolder === categoryFolder && linkFile === projectFile) {
                link.classList.add('active');
                // 展开父级分类
                const category = link.closest('.sidebar-category');
                if (category) category.classList.add('expanded');
            }
        });
    }

    // 初始化函数（暴露全局）
    window.initSidebarNav = function() {
        // 插入导航栏
        const sidebar = createSidebar();
        document.body.insertBefore(sidebar, document.body.firstChild);
        
        // 插入移动端按钮
        const toggle = createMobileToggle();
        document.body.appendChild(toggle);

        // 高亮当前项目
        highlightCurrentProject();
    };

})();

function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

loadCSS("/J2Cmusic/leftnav.css")