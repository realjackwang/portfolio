<template>
  <div class="container">
    <img id="avatar" alt="avatar" src="./../assets/icon.gif" />
    <h1>Jack Wang</h1>
    <h3>啥都会一点的程序猿</h3>

    <hr id="top-hr" />
    <h3>🎉 Where to find me:</h3>
    <div id="card-container">
      <Card
        msg="博客 Blog"
        backgroundColor="#0083c0"
        description="📒 立个Flag多写点Blog 🏳️‍🌈"
        textColor="#FFFFFF"
        icon="netlify.png"
        link="https://blog.jackwang.cn"
      />

      <Card
        msg="GitHub"
        backgroundColor="#24292E"
        description="📦 我做过的项目都在这里"
        textColor="#FFFFFF"
        icon="github.png"
        link="https://github.com/realJackWang"
      />

    </div>

    <div id="others">
      <hr />
      <h3>你还可以这样找到我：</h3>
      <div class="social-media">
        <div class="social-media-card">
          <img class="media-icon" src="@/assets/weibo.png" alt="weibo" />
          <span>
            Weibo:
            <a href="https://weibo.com/2972294092">@SkyCity___</a>
          </span>
        </div>
        <div class="social-media-card">
          <img class="media-icon" src="@/assets/twitter.png" alt="twitter" />
          <span>
            Twitter:
            <a href="https://twitter.com/Real_JackWang">@Real_JackWang</a>
          </span>
        </div>
        <div class="social-media-card">
          <img class="media-icon" src="@/assets/gmail.png" alt="gmail" />
          <span>
            Gmail:
            <a href="mailto: realJackWang@gmail.com">realJackWang@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
    <div id="others">
      <hr />
      <h3>友情链接：(No Sort)</h3>

      <div class="social-media-card">
        <img class="media-icon" src="@/assets/chongxin.png" alt="chongxin" />
        <span>
          山东大学·崇新学堂:&nbsp;
          <a href="http://cxxt.wesdu.cn/">cxxt.wesdu.cn</a>
          &nbsp; (My College)
        </span>
      </div>

      <div class="social-media-card">
        <img
          class="media-icon"
          src="@/assets/spencerwoo.jpg"
          alt="spencerwoo"
        />
        <span>
          Spencer Woo:&nbsp;
          <a href="https://spencerwoo.com">spencerwoo.com</a>
          &nbsp; (Special Thanks, Learnt lots of new-tech from his blog.)
        </span>
      </div>

      <div class="social-media-card">
        <img class="media-icon" src="@/assets/huangyz.svg" alt="huangyz" />
        <span>
          Yizheng Huang:&nbsp;
          <a href="http://huangyz.name/">huangyz.name</a>
          &nbsp; (Special Thanks, His is my example.)
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>
