<template>
    <div class="toplevel">
        <ul>
            <li v-for="(item,index) in items" :key="index">
                <router-link :to="item.url">
                    <i :class="[item.icon]" :style="{color:item.color}"></i>
                    <span>{{ item.value }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    setup() {
        const items = [
            {value: '每日推荐', icon: 'icon-rili1', color: '#666', url: '/daily'},
            {value: '效率工具', icon: 'icon-caozuojiemiantubiao---_gongju', color: '#f9be00', url: '/category/1'},
            {value: '公众号', icon: 'icon-weixin', color: '#67c23a', url: '', isClick: true},
            {value: '精选文章', icon: 'icon-wenzhangguanli', color: '#cddc39', url: '/article'},
            {value: 'Top热榜', icon: 'icon-redu', color: '#f56c6c', url: '/hot'},
            {value: 'Web前端', icon: 'icon-kaifaguanli', color: '#6869dc', url: '/category/8'},
            {value: 'UI设计', icon: 'icon-shejishi2', color: '#e91e63', url: '/category/4'},
            {value: '给我留言', icon: 'icon-xinjian', color: '#f8ce58', url: '', url: '/intera'}, // 弹个窗 然后 发送邮件， 填写用户邮箱，我回复
        ]
        return {
            items
        }
    }
})
</script>
<style lang="less" scoped>
.toplevel {
    border-radius: var(--yh-border-radius-base);
    border: 1px solid #f9f7f7;
    padding: var(--yh-padding-base);
    margin-top: var(--yh-margin-base);
    background-color: #fff;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            min-width: 85px;
            a {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                text-decoration: none;
                margin: 15px 0;
                i {
                    font-size: 28px;
                    color: #745adc;
                    transition: all 0.3s;
                }

                span {
                    transition: 0.2s all ease-out;
                    color: #666;
                }
            }

            &:hover {
                a {
                    i {
                        margin-top: -4px;
                        filter: drop-shadow(0 6px 6px 0 rgba(100, 100, 100, 0.2));
                        filter: brightness(120%);
                    }
                }
            }
        }
    }
}
</style>
