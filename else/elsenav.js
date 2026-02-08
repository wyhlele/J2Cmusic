
(function() {
    'use strict';

    const sidebarConfig = {
        title: '其他の小曲',
        basePath: '/J2Cmusic/else',
        categories: [
            {
                id: 'yosuganosora',
                name: '缘之空/悠之空',
                folder: 'yosuga',
                expanded: true,
                projects: [
                    { name: 'フタリ', file: 'yuzu0100.html' },
                    { name: 'アリガト', file: 'yuzu01ff.html' },
                ]
            },
            {
                id: 'hatsuyuki',
                name: '初雪樱',
                folder: 'hatsuyuki',
                expanded: false,
                projects: [
                    { name: '風花', file: 'vi.html' },
                ]
            },
            {
                id: 'tsukiotome',
                name: '近月系列',
                folder: 'tsukiotome',
                expanded: false,
                projects: [
                    { name: '泣き虫Baby・弱虫Baby', file: 'commercial.html' },
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