<template>
  <el-container>
    <el-aside width="100px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="true"
        :router="true"
      >
        <el-menu-item index="1" route="/cool">
          <i class="el-icon-location"></i>
          <span slot="title">全部</span>

          <!--   
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项1</el-menu-item> 
          -->
        </el-menu-item>

        <el-menu-item index="2" route="/test">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>

        <el-menu-item index="3" route="/cool">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <p>
        世界上有那么多有趣的网页，不想去看看？
        页面调试中，敬请期待
      </p>
      <el-row>
        <el-col
          :span="6"
          v-for="site in sites"
          :key="site.index"
          :offset="1"
          :xs="{span: 20, offset: 0}"
          :sm="{span: 10, offset: 1}"
          :lg="{span: 6, offset: 1}"
        >
          <WebCard
            v-bind:msg="site.name"
            stars="⭐⭐⭐⭐⭐"
            v-bind:description="site.msg"
            v-bind:icon="site.img"
            link1Tooltip="我的博客地址"
            link2Tooltip="我的博客 RSS 订阅链接"
            v-bind:link1="site.url"
            link2="https://hugo.wangbj.top/posts/index.xml"
            rightIcon1="bookmark.png"
            rightIcon2="rss-blue.png"
          />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import WebCard from '@/components/WebCard.vue'
import axios from 'axios'

export default {
  name: 'cool',
  components: {
    WebCard
  },

  data: {
    sites: []
  },

  data() {
    return {
      sites: [
        {
          name: 'Yes or No',
          msg: '每次打开或刷新网站，都会得到一个 Yes 或 No 的答案',
          url: '//yesno.wtf/',
          img: 'https://i.loli.net/2020/06/06/nJfcrGvb2gVHNtT.png'
        },
        {
          name: '学音乐',
          msg: '循序渐进的了解音乐知识，还可以自己创作',
          url: '//yesno.wtf/',
          img: 'https://i.loli.net/2020/06/06/CxG8a7fWe5czP6I.png'
        },
        {
          name: '小霸王',
          msg: '小霸王，其乐无穷。童年满满的回忆！',
          url: '//yesno.wtf/',
          img: 'https://i.loli.net/2020/06/06/eAN4xzBnG8VoQgL.png'
        },
        {
          name: '无限分裂',
          msg:
            '滑动鼠标，让圆形不断分裂，你会发现一只考拉🐨的照片，并且越来越清晰',
          url: 'http://buhuibaidu.me/',
          img: 'https://i.loli.net/2020/06/06/VThniX89qm2wHus.png'
        },
        {
          name: '不会百度嘛',
          msg: '有人向你问了不想回答的问题，输入关键字，生成链接，然后发给他',
          url: '//yesno.wtf/',
          img: 'https://i.loli.net/2020/06/06/O6BM3VLREgGf5Qs.jpg'
        }
      ]
    }
  },

  /* mounted() {
    axios
      .get('http://www.baidu.com')
      .then(response => (this.sites = response.data.t))
      .catch(function(error) {
        // 请求失败处理
        console.log(error)
      })
  },*/

  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
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

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
