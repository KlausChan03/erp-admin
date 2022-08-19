import { addUniqueId } from '@/packages/utils/lodash';
// 看我写的文档字段介绍

/**
 * 默认菜单
 */
const arr: Array<any> = [
    {
        name: '首页',
        path: '/home',
        icon: 'HomeFilled',
        shows: 1,
        tabHidden: false,
        iframe: '',
        tabFix: true,
        keepAlive: false,
        filePath: '/views/home/Index.vue',
    },
    {
        name: '基础资料',
        router: '',
        icon: 'BgIonfontClorCnf',
        shows: 1,
        children: [
            {
                name: '用户管理',
                path: '/basic/member',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/sys/member/Index.vue',
            },
            {
                name: '角色管理',
                path: '/basic/role',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/sys/role/Index.vue',
            },
            {
                name: '组织管理',
                path: '/basic/branch',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/sys/branch/Index.vue',
            },
            // {
            //     name: '门店信息管理',
            //     path: '/basic/store',
            //     icon: '',
            //     shows: 1,
            //     tabHidden: false,
            //     tabFix: false,
            //     keepAlive: true,
            // },
            // {
            //     name: '账户信息管理',
            //     path: '/basic/account',
            //     icon: '',
            //     shows: 1,
            //     tabHidden: false,
            //     tabFix: false,
            //     keepAlive: true,
            // },
            // {
            //     name: '供应商信息管理',
            //     path: '/basic/provider',
            //     icon: '',
            //     shows: 1,
            //     tabHidden: false,
            //     tabFix: false,
            //     keepAlive: true,
            // },
            // {
            //     name: '投资人信息管理',
            //     path: '/basic/investor',
            //     icon: '',
            //     shows: 1,
            //     tabHidden: false,
            //     tabFix: false,
            //     keepAlive: true,
            // },
            // {
            //     name: '物品档案管理',
            //     path: '/basic/goods',
            //     icon: '',
            //     shows: 1,
            //     tabHidden: false,
            //     tabFix: false,
            //     keepAlive: true,
            // },
        ],
    },
    {
        name: '财务管理',
        router: '',
        icon: 'BgIonfontJfen',
        shows: 1,
        children: [
            {
                name: '付款单',
                path: '/finance/payment',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/finance/payment/Index.vue',
            },
            {
                name: '收款单',
                path: '/finance/receipt',
                icon: '',
                shows: 0,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/finance/receipt/Index.vue',
            },
        ],
    },
];
const defaultMenu = addUniqueId(arr, '_local'); // 增加个标识符

/**
 * 默认项目菜单
 */
let defaultPrjMenu = [
    {
        name: '系統菜单',
        icon: 'UserOutlined',
        shows: 1,
        menus: defaultMenu,
    },
    {
        name: '工作平台',
        icon: 'UserOutlined',
        shows: 1,
        menus: defaultMenu.slice(0, 3),
    },
    {
        name: '租户管理',
        icon: 'UserOutlined',
        shows: 1,
        menus: defaultMenu.slice(-3),
    },
];
defaultPrjMenu = addUniqueId(defaultPrjMenu, '_local');
export { defaultMenu, defaultPrjMenu };
