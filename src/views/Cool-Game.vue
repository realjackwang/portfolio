<template>
  <el-container>
    <el-aside width="150px">
      <el-row type="flex" class="row-bg" justify="center">
        <div>&nbspCOOOOOL WEB</div>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center"></el-row>
      <el-row type="flex" class="row-bg" justify="center"></el-row>
      <el-row type="flex" class="row-bg" justify="center"></el-row>
      <el-row type="flex" class="row-bg" justify="center"></el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <img src="https://i.loli.net/2020/06/07/rgBP7vXmbn3KeOD.png" height="32px" />
        </el-col>
        <el-col :span="10">
          <div id="title">
            <a href="cool">创意</a>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <img src="https://i.loli.net/2020/06/07/t5gyRKsqp6mwfvQ.png" height="32px" />
        </el-col>
        <el-col :span="10">
          <div id="title">
            <a href="cool-game">游戏</a>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <img src="https://i.loli.net/2020/06/07/m9xqdZpBk1SLIAo.png" height="32px" />
        </el-col>
        <el-col :span="10">
          <div id="title">
            <a href="cool-code">编程</a>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <img src="https://i.loli.net/2020/06/07/63r9OXxuELPegSp.png" height="32px" />
        </el-col>
        <el-col :span="10">
          <div id="title">
            <a href="cool-tool">工具</a>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <img src="https://i.loli.net/2020/06/07/OtKLlowZ9Jbp2kn.png" height="32px" />
        </el-col>
        <el-col :span="10">
          <div id="title">
            <a href="cool-book">Kindle</a>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <img src="https://i.loli.net/2020/06/07/67MeAYjUf8qWFdi.png" height="32px" />
        </el-col>
        <el-col :span="10">
          <div id="title">
            <a @click="open3">投稿</a>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">🚀：可能需要VPN</el-row>
    </el-aside>
    <el-main>
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
          <WebCard :msg="site.name" :description="site.msg" :icon="site.img" :link1="site.url" />
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
          name: 'AimBooster',
          msg: '一个用来练枪的网站',
          url: 'http://www.aimbooster.com/',
          img: 'https://i.loli.net/2020/06/07/mWU5MqHN3KCjxEf.png'
        },
            {
          name: 'YORG.IO',
          msg: '超耐玩的塔防游戏，画面简单漂亮，僵尸超可爱，不会疲劳。',
          url: 'https://yorg.io/',
          img: 'https://i.loli.net/2020/06/07/X8Ia9uH3VrPedvk.png'
        },
          {
          name: 'Evolution',
          msg: '通过不断的进化让你设计的生物完成各种动作',
          url: 'https://keiwan.itch.io/evolution',
          img: 'https://i.loli.net/2020/06/07/C2mOyPhHZvRAYBs.png'
        },
        {
          name: '遥控大脚车',
          msg: '在线控制遥控车在地图上破坏、游玩',
          url: '//bruno-simon.com/',
          img: 'https://i.loli.net/2020/06/01/e9qif6hZyOACI7F.png'
        },
        {
          name: '太鼓达人',
          msg: '循序渐进的了解音乐知识，还可以自己创作',
          url: '//taiko.bui.pm/',
          img: 'https://i.loli.net/2020/05/29/5pvNJQHs2MIwlFT.png'
        },
        {
          name: '小霸王',
          msg: '小霸王，其乐无穷。童年满满的回忆！',
          url: '//www.yikm.net/',
          img: 'https://i.loli.net/2020/06/06/eAN4xzBnG8VoQgL.png'
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
    },
    open3() {
      this.$prompt('请输入有趣的网址（Bark推送提供支持）', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
        inputErrorMessage: '网页格式不正确'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '感谢你提交的网站~'
          }),
            axios
              .get(
                'https://api.day.app/N7e3N26kYCWjb5vQCLfNZg/收到一条来自Cool Web的投稿?url=' +
                  value
              )
              .then(response => (this.sites = response.data.t))
              .catch(function(error) {
                // 请求失败处理
                console.log(error)
              })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '哎，没有的嘛'
          })
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
  text-align: center;
}

a {
  text-decoration: none;
  color: #292626;
}

#title {
  font-size: 16px;
  text-align: left;
  width: 60%;
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

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
