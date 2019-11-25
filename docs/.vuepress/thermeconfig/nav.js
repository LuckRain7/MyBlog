/*
 * 导航栏设置
*/

module.exports = [
    //  内部链接 以docs为根目录
    { text: '个人介绍', link: '/home/' },
    { text: '个人分享', link: '/share/' },
    { text: '笔记', link: '/notes/' },
    // 下拉列表
    {
        text: 'GitHub',
        items: [
            { text: 'GitHub', link: 'https://github.com/Ture7Rain' },
            {
                text: 'CSDN',
                link: 'https://blog.csdn.net/True_Rain'
            },
            {
                text: '掘金',
                link: 'https://juejin.im/user/5c749a736fb9a049a97a5a8e'
            },
            {
                text: 'segmentfault',
                link: 'https://segmentfault.com/u/rain_5d6879f67c725'
            },
            {
                text: '简书',
                link: 'https://www.jianshu.com/u/b456d77c42db'
            },
        ]
    }
]