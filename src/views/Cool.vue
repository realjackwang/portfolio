<template>
    <div class="container">
        <h1>📩</h1>
        <h1>Subscribe</h1>
        <p>如何订阅我的文章，或跟踪我在其他平台的发布？</p>

        <hr id="top-hr"/>
        <div class="article">
            <!-- <h3>🚧 Under construction</h3> -->
            <p>感谢大哥选择订阅我的发布！Big brother drink Coca Cola 🍻</p>


            <h2>订阅我的 Hugo 博客</h2>
            <p>Hugo 是「全世界最快的静态网站编译框架」，我选择 Hugo 作为我的博客引擎，部署于 Netlify 上面。我提供了 RSS 订阅链接~</p>
            <AppCard
                    msg="Hugo 博客"
                    stars="⭐⭐⭐⭐⭐"
                    description="利用 RSS 订阅我的博客更新"
                    icon="icon.png"
                    link1Tooltip="我的博客地址"
                    link2Tooltip="我的博客 RSS 订阅链接"
                    link1="https://hugo.wangbj.top/"
                    link2="https://hugo.wangbj.top/posts/index.xml"
                    rightIcon1="bookmark.png"
                    rightIcon2="rss-blue.png"
            />



            <h2>订阅我的 Hexo 博客</h2>
            <p>Hexo 是我第一个静态博客，部署在Github Page上，但是被我弄的太花哨了，已经停止维护了，还可以<a href="https://blog.wangbj.top">访问 </a>。 </p>

            <AppCard
                    msg="Hexo 博客"
                    stars="⭐"
                    description="已经停止维护，不在更新"
                    icon="hexo-color.png"
                    link1Tooltip="我的博客地址"
                    link2Tooltip="我的博客 RSS 订阅链接"
                    link1="https://blog.wangbj.top/"
                    link2="https://blog.wangbj.top/atom.xml"
                    rightIcon1="bookmark.png"
                    rightIcon2="rss.png"
            />

            <h2>最后，感谢。</h2>
            <p>感谢大哥的关注！您的支持是我更新的最大动力。ღ( ´･ᴗ･` )比心</p>



        </div>
    </div>
</template>

<script>
    import AppCard from '@/components/AppCard.vue'

    export default {
        name: 'subscribe',
        components: {
            AppCard
        }
    }
</script>

<style lang="css" scoped>
    h2 {
        font-weight: 700;
        font-size: 20px;
        padding: 10px 0;
    }

    h3 {
        font-weight: 700;
        font-size: 18px;
        padding: 18px 0 0 0;
        margin: 0;
    }

    ul {
        padding-left: 15px;
        line-height: 30px;
        margin: 0;
    }

    p {
        line-height: 30px;
    }
</style>
