/*
 * @Description: router config
 * @Author: 执念
 * @Date: 2019-09-05 12:27:42
 * @LastEditTime: 2019-09-05 12:50:59
 * @LastEditors: Please set LastEditors
 */
export default {
  menus: [ // 菜单相关路由
    { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
    {
      key: '/app/ui', title: 'UI', icon: 'scan',
      subs: [
        { key: '/app/ui/buttons', title: '按钮', component: 'Buttons' },
        { key: '/app/ui/icons', title: '图标', component: 'Icons' },
        { key: '/app/ui/spins', title: '加载中', component: 'Spins' },
        { key: '/app/ui/modals', title: '对话框', component: 'Modals' },
        { key: '/app/ui/notifications', title: '通知提醒框', component: 'Notifications' },
        { key: '/app/ui/tabs', title: '标签页', component: 'MyTabs' },
        { key: '/app/ui/banners', title: '轮播图', component: 'Banner' },
        { key: '/app/ui/wysiwyg', title: '富文本', component: 'Wysiwygs' },
        { key: '/app/ui/drags', title: '拖拽', component: 'Drags' },
        { key: '/app/ui/emoji', title: 'emoji', component: 'EmojiMart' },
        { key: '/app/ui/date-pricker', title: '日历', component: 'BasicDatePircker' },
        { key: '/app/ui/map', title: '地图', component: 'EMap' },
        { key: '/app/ui/message', title: '全局通知', component: 'Messages' },
        { key: '/app/ui/alert', title: '警告提示', component: 'Alerts' },
        { key: '/app/ui/test', title: '生命周期', component: 'LifeCycle' }
      ],
    }
  ]
}
