module.exports = {
    name: 'site',
    build: {
        css: {
            preprocessor: 'less',
        },
        site: {
            publicPath: '/site/',
        },
    },
    site: {
        title: 'muld',
        logo: 'https://chengfayun.com/static/icon/logo-1.svg',
        langLabel: '中文',
        links: [
            {
                logo: 'https://chengfayun.com/static/icon/logo-cn.svg',
                url: 'https://github.com/mulcloud/muld',
            },
        ],
        nav: [
            {
                title: '开发指南',
                items: [
                    {
                        path: 'home',
                        title: '介绍',
                    },
                    {
                        path: 'quickstart',
                        title: '快速上手',
                    },
                ],
            },
            {
                title: '基础组件',
                items: [
                    {
                        path: 'button',
                        title: 'Button 按钮',
                    },
                    {
                        path: 'col',
                        title: 'Layout 布局',
                    },
                ],
            },
        ],
    },
};
