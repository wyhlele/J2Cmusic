
(function() {
    'use strict';

    const sidebarConfig = {
        title: '柚子の小曲',
        basePath: '/J2Cmusic/yuzu',
        categories: [
            {
                id: 'buraban',
                name: '管乐恋曲! -The Bonds of Melody-',
                folder: 'buraban',
                expanded: true,
                projects: [
                    { name: 'Beautiful Harmony', file: 'yuzu01op.html' },
                    { name: 'My Dear', file: 'yuzu01ed.html' },
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
                    { name: 'ヒカリノウタ', file: 'mg.html' },
                    { name: 'Grateful dats', file: 'mg.html' },
                    { name: 'Note\'s Greeting ～エドワード・エルガー「愛の挨拶」より～', file: 'mg.html' },
                    { name: 'おんなじ気持ち', file: 'mg.html' },
                    { name: '奏で', file: 'mg.html' },
                    { name: '愛しさこぼれる', file: 'mg.html' },
                ]
            }
        ]
    };

    function buildUrl(categoryFolder, projectFile) {
        return `${sidebarConfig.basePath}/${categoryFolder}/${projectFile}`;
    }

    function createSidebar() {
        const sidebar = document.createElement('nav');
        sidebar.className = 'sidebar-nav';
        sidebar.id = 'sidebarNav';

        const header = document.createElement('div');
        header.className = 'sidebar-header';
        header.innerHTML = `<div class="sidebar-title">${sidebarConfig.title}</div>`;
        sidebar.appendChild(header);

        const list = document.createElement('ul');
        list.className = 'sidebar-list';

        sidebarConfig.categories.forEach(category => {
            const categoryItem = document.createElement('li');
            categoryItem.className = 'sidebar-category';
            categoryItem.dataset.folder = category.folder;
            if (category.expanded) categoryItem.classList.add('expanded');

            const title = document.createElement('div');
            title.className = 'sidebar-category-title';
            title.textContent = category.name;
            title.addEventListener('click', () => {
                categoryItem.classList.toggle('expanded');
            });

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
                    document.querySelectorAll('.sidebar-project-link').forEach(l => {
                        l.classList.remove('active');
                    });
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

    function createMobileToggle() {
        const toggle = document.createElement('button');
        toggle.className = 'sidebar-toggle';
        toggle.innerHTML = '◀';
        toggle.setAttribute('aria-label', '切换菜单');

        const sidebar = document.getElementById('sidebarNav');
        
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

    function highlightCurrentProject() {
        const currentPath = window.location.pathname;
        
        const pathParts = currentPath.split('/').filter(p => p);
        
        if (pathParts.length < 2) return;

        const baseIndex = pathParts.indexOf(sidebarConfig.basePath);
        if (baseIndex === -1) return;

        const categoryFolder = pathParts[baseIndex + 1];
        const projectFile = pathParts[baseIndex + 2];

        if (!categoryFolder || !projectFile) return;

        document.querySelectorAll('.sidebar-project-link').forEach(link => {
            const linkFolder = link.dataset.folder;
            const linkFile = link.dataset.file;

            if (linkFolder === categoryFolder && linkFile === projectFile) {
                link.classList.add('active');
                const category = link.closest('.sidebar-category');
                if (category) category.classList.add('expanded');
            }
        });
    }

    window.initSidebarNav = function() {
        const sidebar = createSidebar();
        document.body.insertBefore(sidebar, document.body.firstChild);
        
        const toggle = createMobileToggle();
        document.body.appendChild(toggle);

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