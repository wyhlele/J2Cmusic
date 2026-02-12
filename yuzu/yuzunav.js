
(function() {
    'use strict';

    const sidebarConfig = {
        title: '柚子の小曲',
        basePath: 'yuzu',
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
                    { name: 'Trust in me', file: 'yuzu02op.html' },
                    { name: 'True Drop', file: 'yuzu02ed.html' },
                ]
            },
            {
                id: 'natsu',
                name: '夏空彼方',
                folder: 'natsu',
                expanded: false,
                projects: [
                    { name: '想いのカナタ', file: 'yuzu03op.html' },
                    { name: 'リフレイン', file: 'yuzu03ed.html' },
                ]
            },
            {
                id: 'tenshin',
                name: '天神乱漫 LUCKY or UNLUCKY!?',
                folder: 'tenshin',
                expanded: false,
                projects: [
                    { name: 'メチャ恋らんまん', file: 'yuzu04op.html' },
                    { name: 'MUGEN∞MIRAI', file: 'yuzu04ed.html' },
                    { name: 'Charge of Soul', file: 'yuzu04hime.html' },
                    { name: '小さな願い', file: 'yuzu04ruri.html' },
                    { name: 'With you!!', file: 'yuzu04sana.html' },
                    { name: 'モットー', file: 'yuzu04aoi.html' },
                ]
            },
            {
                id: 'nw',
                name: 'Noble☆Works',
                folder: 'nw',
                expanded: false,
                projects: [
                    { name: 'Change&Chance!', file: 'yuzu05op.html' },
                    { name: '光差す未来', file: 'yuzu05ed.html' },
                    { name: '恋の爆弾', file: 'yuzu05akari.html' },
                    { name: 'お仕事します', file: 'yuzu05sena.html' },
                    { name: '誰にも言えない秘密です', file: 'yuzu05shizuru.html' },
                    { name: 'だっしゅ☆', file: 'yuzu05hinata.html' },
                    { name: '青い鳥', file: 'yuzu05maya.html' },
                ]
            },
            {
                id: 'dracuriot',
                name: 'DRACU-RIOT!',
                folder: 'dracuriot',
                expanded: false,
                projects: [
                    // { name: 'Scarlet', file: 'yuzu06op.html' },
                    { name: '君だけの僕', file: 'yuzu06ed.html' },
                    { name: 'Love Incident', file: 'yuzu06miu.html' },
                    { name: 'Growing!', file: 'yuzu06azusa.html' },
                    // { name: 'きっと大丈夫', file: 'yuzu06rio.html' },
                    { name: 'NO LIMIT', file: 'yuzu06erina.html' },
                ]
            },
            {
                id: 'amairo',
                name: '天色幻想岛',
                folder: 'amairo',
                expanded: false,
                projects: [
                    { name: 'Blue-Love Chime', file: 'yuzu07op.html' },
                    { name: '天色', file: 'yuzu07ed.html' },
                    { name: 'step forward', file: 'yuzu07shaarii.html' },
                    { name: '私だけの空', file: 'yuzu07yuune.html' },
                    { name: 'アオゾラキャンバス', file: 'yuzu07airi.html' },
                    // { name: '大好きなんだ', file: 'yuzu07masaki.html' },
                ]
            },
            {
                id: 'sothewitch',
                name: '魔女的夜宴',
                folder: 'sothewitch',
                expanded: false,
                projects: [
                    { name: '恋せよ乙女!', file: 'yuzu08op.html' },
                    { name: 'Re:Start~君とまた出逢えて', file: 'yuzu08ednene.html' },
                    // { name: 'sweet treasure', file: 'yuzu08nene.html' },
                    { name: '天使の羽とクリスタル', file: 'yuzu08edmeguru.html' },
                    { name: 'リアルフレンド', file: 'yuzu08meguru.html' },
                    { name: 'スカート',Sile: 'yuzu08edtsumugi.html' },
                    { name: 'Sweet Sweet アリス', file: 'yuzu08tsumugi.html' },
                    // { name: '君がくれた光', file: 'yuzu08edtouko.html' },
                    // { name: 'Midday Star', file: 'yuzu08touko.html' },
                    { name: '大好き', file: 'yuzu08edwakana.html' },
                    { name: 'Without You', file: 'yuzu08extra.html' },
                ]
            },
            {
                id: 'senren',
                name: '千恋＊万花',
                folder: 'senren',
                expanded: false,
                projects: [
                    // { name: '恋ひ恋ふ縁', file: 'yuzu09op.html' },
                    { name: '愛しさと感謝の気持ち', file: 'yuzu09edyoshino.html' },
                    { name: 'とおりゃんせ~甘美風来', file: 'yuzu09yoshino.html' },
                    { name: 'ふたりで', file: 'yuzu09edmako.html' },
                    { name: '茉子の日常', file: 'yuzu09mako.html' },
                    // { name: 'ふたつの影',Sile: 'yuzu09edmurasame.html' },
                    // { name: 'キズナヒトツ', file: 'yuzu09murasame.html' },
                    { name: 'GIFT', file: 'yuzu09edrena.html' },
                    { name: 'Blue Sky', file: 'yuzu09rena.html' },
                    { name: 'Love flower', file: 'yuzu09edkoharu.html' },
                    { name: 'キミのとなり', file: 'yuzu09edroka.html' },
                ]
            },
            {
                id: 'riddle',
                name: 'RIDDLE JOKER',
                folder: 'riddle',
                expanded: false,
                projects: [
                    // { name: 'astral ability', file: 'yuzu10op.html' },
                    { name: 'ゆびきり', file: 'yuzu10edayase.html' },
                    { name: 'PERFECT GIRL', file: 'yuzu10ayase.html' },
                    { name: 'ずっと', file: 'yuzu10ednanami.html' },
                    { name: 'Sympathy', file: 'yuzu10nanami.html' },
                    { name: '初恋',Sile: 'yuzu10edmayu.html' },
                    // { name: '強がるオトナのSecret Labo', file: 'yuzu10mayu.html' },
                    { name: '恋だより', file: 'yuzu10edhazuki.html' },
                    { name: '大和撫子は憧れ', file: 'yuzu10hazuki.html' },
                    { name: '陽だまり笑顔で', file: 'yuzu10edchisaki.html' },
                ]
            },
            {
                id: 'stella',
                name: '星光咖啡馆与死神之蝶',
                folder: 'stella',
                expanded: false,
                projects: [
                    { name: 'Smiling-Swinging!!', file: 'yuzu11op.html' },
                    { name: 'スィートマリージュ', file: 'yuzu11edkanna.html' },
                    { name: 'Only you!', file: 'yuzu11kanna.html' },
                    { name: '@Your Side', file: 'yuzu11ednatsume.html' },
                    // { name: 'Sweetest Bitterness', file: 'yuzu11natsume.html' },
                    { name: 'ほんとにありがとう',Sile: 'yuzu11ednozomi.html' },
                    { name: '心地いい日常', file: 'yuzu11nozomi.html' },
                    { name: '光', file: 'yuzu11edmei.html' },
                    // { name: 'Happy Sunshine', file: 'yuzu11mei.html' },
                    { name: 'Cold&Sweet', file: 'yuzu11edsuzune.html' },
                ]
            },
            {
                id: 'parquet',
                name: 'PARQUET',
                folder: 'parquet',
                expanded: false,
                projects: [
                    // { name: 'BEYOND', file: 'souryuzu01op.html' },
                    { name: 'フレルフルエル', file: 'souryuzu01ed.html' },
                ]
            },
            {
                id: 'ten_sz',
                name: '天使☆嚣嚣 RE-BOOT!',
                folder: 'ten_sz',
                expanded: false,
                projects: [
                    // { name: 'FUN FUN RE-BOOT', file: 'yuzu12op.html' },
                    { name: 'Call My Name', file: 'yuzu12ednoa.html' },
                    // { name: '君とボクのハジメテ', file: 'yuzu12noa.html' },
                    { name: 'ねぇ。', file: 'yuzu12edamane.html' },
                    // { name: 'ワタシだけ', file: 'yuzu12amane.html' },
                    { name: '以心伝心ジャーニー',Sile: 'yuzu12edkurumi.html' },
                    // { name: 'アオハルデイズ', file: 'yuzu12kurumi.html' },
                    { name: 'DIVE', file: 'yuzu12edkaguya.html' },
                    // { name: '惚れて揺れて恋焦がれ', file: 'yuzu12kaguya.html' },
                    { name: '幸せの魔法', file: 'yuzu12edorie.html' },
                    { name: 'wish', file: 'yuzu12edfumika.html' },
                ]
            },
            {
                id: 'lllj',
                name: 'LimeLight Lemonade Jam',
                folder: 'lllj',
                expanded: false,
                projects: [
                    { name: '明け星', file: 'yuzu13op.html' },
                    { name: 'Be brand new', file: 'yuzu13extra1.html' },
                    { name: '放光酸化', file: 'yuzu13extra2.html' },
                    { name: '幻灯花火', file: 'yuzu13extra3.html' },
                    { name: '陽だまりのように', file: 'yuzu13extraena.html' },
                    { name: 'RGB', file: 'yuzu13extraanju.html' },
                    { name: '燈月小夜曲', file: 'yuzu13extratsukimi.html' },
                    { name: '最終快速', file: 'yuzu13extraririko.html' },
                    { name: 'FOR GLORY (with "gem of rubble")', file: 'yuzu13extramiku.html' },
                    { name: 'ヒカリノウタ（Gamesize）', file: 'yuzu13edena.html' },
                    { name: 'Grateful days（Gamesize）', file: 'yuzu13edanju.html' },
                    { name: 'Note\'s Greeting ～エドワード・エルガー「愛の挨拶」より～（Gamesize）', file: 'yuzu13edtsukimi.html' },
                    { name: 'おんなじ気持ち（Gamesize）', file: 'yuzu13edririko.html' },
                    { name: '奏で（Gamesize）', file: 'yuzu13edmiku.html' },
                    // { name: '愛しさこぼれる', file: 'yuzu13ednayuka.html' },
                ]
            }
        ]
    };

    function buildUrl(categoryFolder, projectFile) {
        return `/J2Cmusic/${sidebarConfig.basePath}/${categoryFolder}/${projectFile}`;
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

        document.querySelectorAll('.sidebar-category').forEach(category => {
            category.classList.remove('expanded');
        })
        
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