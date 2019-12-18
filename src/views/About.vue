<template>
  <div class="container">
    <h1>👓</h1>
    <h1>About</h1>
    <p>🙇‍♀️：这人是谁啊？🙎‍♂️：菜鸡？🙅‍♂️：不，我相信他会变好的.</p>

    <hr id="top-hr" />
    <div class="article">
      <p>大家好，我是Jack，山大EE专业大四在读，选错专业，迷茫，...</p>

      <h2>我的项目</h2>
      <p>
        我所做过的项目几乎都开源于
        <a href="https://github.com/skycity"><img src="@/assets/github.jpg" height = 20 />GitHub</a> 上面，欢迎大家 Star + Fork
      </p>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/skycity233/mdpic">📟 MdPic</a>
        </h3>
        <p>
          MdPic：利用Github搭建自己的图床，不用担心GitHub突然去世所以稳定性还是很好的。做完才发现
		  <a
            href="https://github.com/Molunerfinn/PicGo"
          >PicGo</a>
		  已经实现了。🤷‍♂️，不过第一次有人fork我，开心！✌️
          
        </p>
        <div class="github-repo-stats">
          <a href="https://github.com/skycity233/mdpic/stargazers">
            <svg
              aria-label="stars"
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            {{ dowwwInfo.stargazers_count }}
          </a>
          <a href="https://github.com/skycity233/mdpic/network/members">
            <svg
              aria-label="forks"
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>
            {{ dowwwInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/skycity233/smpic">📟 SmPic</a>
        </h3>
        <p>SdPic：利用
		  <a
            href="https://sm.ms/"
          >SM.MS</a>
		  的API实现的图床，可以登录与免登录使用。做完才知道有1分钟10张的限制。所以又在此基础上实现了
		  <a
            href="https://github.com/Molunerfinn/PicGo"
          >MdPic</a>
		  ，不过SM.MS速度还是很快的，所以很推荐使用。
		  </p>
        <div class="github-repo-stats">
          <a href="https://github.com/skycity233/smpic/stargazers">
            <svg
              aria-label="stars"
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            {{ bitcsInfo.stargazers_count }}
          </a>
          <a href="https://github.com/spencerwooo/BITCS-Coursework/network/members">
            <svg
              aria-label="forks"
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>
            {{ bitcsInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/SecureCats">🥇 The Fully Anonymous Teaching Evaluation System</a>
        </h3>
        <p>
          Secure Cats 团队作品：基于零知识证明和 CL 签名的匿名课程评价系统。这一评教系统参加了「2019 年大学生信息安全竞赛 —— 作品赛」，荣获国家级二等奖。推荐阅读：
          <a
            href="https://medium.com/spencerweekly/recap-on-fates-d9d17a6a7827"
          >什么时候「匿名」才是合理的？| 匿名评教平台复盘</a>
        </p>
        <div class="github-repo-stats">
          <a href="https://github.com/SecureCats/Evaluation_BackEnd/stargazers">
            <svg
              aria-label="stars"
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            {{ fatesInfo.stargazers_count }}
          </a>
          <a href="https://github.com/SecureCats/Evaluation_BackEnd/network/members">
            <svg
              aria-label="forks"
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>
            {{ fatesInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/spencerwooo/jsbox-sspai-namecard">🎫 少数派作者名片 | 一个 JSBox 小组件</a>
        </h3>
        <p>
          适合新版本少数派的作者名片，搭建在 JSBox 上。推荐阅读：
          <a
            href="https://sspai.com/post/55562"
          >新版少数派网站的作者成就墙好好看啊，于是我用它写了一个 JSBox 小插件</a>
        </p>
        <div class="github-repo-stats">
          <a href="https://github.com/spencerwooo/jsbox-sspai-namecard/stargazers">
            <svg
              aria-label="stars"
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            {{ sspaiCardInfo.stargazers_count }}
          </a>
          <a href="https://github.com/spencerwooo/jsbox-sspai-namecard/network/members">
            <svg
              aria-label="forks"
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>
            {{ sspaiCardInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/spencerwooo/dotfiles">🎃 我的 dotfiles</a>
        </h3>
        <p>我的各种配置清单。从终端到 Vim，从 macOS 到 Windows，应有尽有。</p>
        <div class="github-repo-stats">
          <a href="https://github.com/spencerwooo/dotfiles/stargazers">
            <svg
              aria-label="stars"
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            {{ dotfilesInfo.stargazers_count }}
          </a>
          <a href="https://github.com/spencerwooo/dotfiles/network/members">
            <svg
              aria-label="forks"
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>
            {{ dotfilesInfo.forks_count }}
          </a>
        </div>
      </div>


      

      <h2>联系我</h2>
      <p>
        欢迎大家直接订阅我的发布，详情请参考：
        <router-link to="/subscribe">Jack Wang - Subscribe</router-link>
      </p>
      <p>我的联系方式：</p>
      <ul>
        <li>
          📫 邮箱：
          <a href="mailto:realJackWang@gmail.com">realJackWang@gmail.com</a>
        </li>
        <li>
          ✈ Telegram：
          <a href="https://t.me/SpencerWoo">t.me/SpencerWoo</a>
        </li>
        <li>📍 Shandong University, Tsingtao, Shandong, China</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dowwwInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      bitcsInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      fatesInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      sspaiCardInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      dotfilesInfo: {
        stargazers_count: 0,
        forks_count: 0
      }
    }
  },
  mounted() {
    this.axios
      .get('https://api.github.com/repos/skycity233/mdpic')
      .then(resp => {
        this.dowwwInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/skycity233/smpic')
      .then(resp => {
        this.bitcsInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/SecureCats/Evaluation_BackEnd')
      .then(resp => {
        this.fatesInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/jsbox-sspai-namecard')
      .then(resp => {
        this.sspaiCardInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/dotfiles')
      .then(resp => {
        this.dotfilesInfo = resp.data
      })
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

.github-project-card {
  border: 1px solid #d1d5da;
  border-radius: 3px;
  padding: 0 15px 15px 15px;
  margin: 10px 0;
}

.github-project-card p {
  line-height: inherit;
}

.github-project-card .github-repo-stats a {
  color: #24292e;
  padding-right: 20px;
  font-size: 14px;
}

.github-project-card .github-repo-stats a:hover {
  border: none;
}

.octicon {
  vertical-align: text-top;
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
