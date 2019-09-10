<template>
  <div>
    <div class="header">
      <div class="city">
        <a>
          <span>哈尔滨</span>
          <span class="iconfont icon-arrowdown"></span>
        </a>
      </div>
      <a href="#" class="search-a">
        <div class="search">
          <span class="iconfont icon-sousuo"></span>
          <span>输入店家/品类/商圈</span>
        </div>
      </a>
      <div class="mine">
        <span class="iconfont icon-wode"></span>
        <span>我的</span>
      </div>
    </div>
    <img src="./images/meituan-ad.png" alt class="meituan-ad" />
    <ul class="list-kind">
      <li class="list-li">
        <span class="iconfont icon-meishi"></span>
        <span>美食</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-maoyandianying"></span>
        <span>猫眼电影</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-jiudian"></span>
        <span>酒店</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-xiuxianyule"></span>
        <span>休闲娱乐</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-waimai"></span>
        <span>外卖</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-ktv"></span>
        <span>KTV</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-zhoubianyou"></span>
        <span>周边游</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-liren1"></span>
        <span>丽人</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-shutiao_huaban"></span>
        <span>小吃快餐</span>
      </li>
      <li class="list-li">
        <span class="iconfont icon-quanbufenlei"></span>
        <span>全部分类</span>
      </li>
    </ul>

    <ul class="list-like">
      <li class="list-like-li head">猜你喜欢</li>
      <li class="list-like-li">
        <img src="./images/1.jpg" alt class="list-like-image" />

        <div class="list-like-txt">
          <span class="list-like-name">余年自助骨头锅</span>
          <span class="list-like-ad">[芦家街/宣化街]单人骨头锅自助</span>
          <div class="list-like-price">
            <span class="list-like-price-a">32.8</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:37元</span>
            <span class="list-like-price-num">已售2877</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/2.jpg" alt class="list-like-image" />

        <div class="list-like-txt">
          <span class="list-like-name">张家招牌骨头锅</span>
          <span class="list-like-ad">[芦家街/宣化街]单人骨头锅自助</span>
          <div class="list-like-price">
            <span class="list-like-price-a">32.8</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:35元</span>
            <span class="list-like-price-num">已售10872</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/3.jpg" alt class="list-like-image" />

        <div class="list-like-txt">
          <span class="list-like-name">浴人码头汗蒸水汇</span>
          <span class="list-like-ad">[省政府/龙塔]开业特惠洗浴汗蒸门票</span>
          <div class="list-like-price">
            <span class="list-like-price-a">9.9</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:29元</span>
            <span class="list-like-price-num">已售1257</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/4.jpg" alt class="list-like-image" />

        <div class="list-like-txt">
          <span class="list-like-name">福将海鲜自助烤肉</span>
          <span class="list-like-ad">[香坊大街/通乡街]自助晚餐</span>
          <div class="list-like-price">
            <span class="list-like-price-a">54.9</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:58元</span>
            <span class="list-like-price-num">已售175190</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/5.jpg" alt class="list-like-image" />

        <div class="list-like-txt">
          <span class="list-like-name">金汉斯南美烤肉自助餐厅</span>
          <span class="list-like-ad">[博物馆]单人午晚餐二选一</span>
          <div class="list-like-price">
            <span class="list-like-price-a">56</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:59元</span>
            <span class="list-like-price-num">已售407295</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/6.jpg" alt class="list-like-image" />

        <div class="list-like-txt">
          <span class="list-like-name">恋十一生日蛋糕</span>
          <span class="list-like-ad">[国际会展中心/香坊万达广场]蛋糕2选1,约8英寸，圆形</span>
          <div class="list-like-price">
            <span class="list-like-price-a">109.9</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:198元</span>
            <span class="list-like-price-num">已售2541</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/7.jpg" alt class="list-like-image" />

        <div class="list-like-txt">
          <span class="list-like-name">好利来</span>
          <span class="list-like-ad">[35店通用,宣化街大润发店]蛋糕2选1,约8英寸，圆</span>
          <div class="list-like-price">
            <span class="list-like-price-a">188</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:198元</span>
            <span class="list-like-price-num">已售33194</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/8.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">鲜芋仙</span>
          <span class="list-like-ad">[17店通用,西城红场店]送10元代金券1份</span>
          <div class="list-like-price">
            <span class="list-like-price-a">9</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:10元</span>
            <span class="list-like-price-num">已售241094</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/9.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">将军牛排</span>
          <span class="list-like-ad">[9店通用]仅售89.9元！价值100元将军牛排韩国餐厅代金券1张</span>
          <div class="list-like-price">
            <span class="list-like-price-a">89.9</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:100元</span>
            <span class="list-like-price-num">已售570670</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/10.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span
            class="list-like-name"
          >五爷炸串&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="list-like-ad">[9店通用]100元代金券1张，可叠加</span>
          <div class="list-like-price">
            <span class="list-like-price-a">88</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:100元</span>
            <span class="list-like-price-num">已售18019</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/11.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span
            class="list-like-name"
          >韩盛自助烤肉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="list-like-ad">[国际会展中心]午餐自助</span>
          <div class="list-like-price">
            <span class="list-like-price-a">62.8</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:88元</span>
            <span class="list-like-price-num">已售60436</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/12.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">一米鸡肉韩式料理</span>
          <span class="list-like-ad">[6店通用]一米盛宴小份套餐，建议2人使用</span>
          <div class="list-like-price">
            <span class="list-like-price-a">138</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:266元</span>
            <span class="list-like-price-num">已售22609</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/13.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">蜀留香石锅鱼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="list-like-ad">[5店通用]石锅鱼1份，约3斤鱼</span>
          <div class="list-like-price">
            <span class="list-like-price-a">77</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:108元</span>
            <span class="list-like-price-num">已售107411</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/14.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">刘一锅筋头巴脑</span>
          <span class="list-like-ad">[2店通用]两人经典团购套餐1份</span>
          <div class="list-like-price">
            <span class="list-like-price-a">126</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:218元</span>
            <span class="list-like-price-num">已售8664</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/15.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">将军令自助烤肉火锅</span>
          <span class="list-like-ad">[3店通用]晚餐单人自助</span>
          <div class="list-like-price">
            <span class="list-like-price-a">36.9</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:39元</span>
            <span class="list-like-price-num">已售45503</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/16.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span
            class="list-like-name"
          >真功夫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="list-like-ad">[哈尔滨等]卤肉饭汤套1份</span>
          <div class="list-like-price">
            <span class="list-like-price-a">20</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:33元</span>
            <span class="list-like-price-num">已售39232</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/17.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">❤潘冬子自助酱骨❤</span>
          <span class="list-like-ad">[芦家街/宣化街]单人自助酱骨火锅</span>
          <div class="list-like-price">
            <span class="list-like-price-a">27</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:35元</span>
            <span class="list-like-price-num">已售717</span>
          </div>
        </div>
      </li>
      <li class="list-like-li">
        <img src="./images/18.jpg" alt class="list-like-image" />
        <div class="list-like-txt">
          <span class="list-like-name">菲尼克斯牛排店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="list-like-ad">[学院路]菲力系列自助餐</span>
          <div class="list-like-price">
            <span class="list-like-price-a">65.9</span>
            <span class="list-like-price-yuan">元</span>
            <span class="list-like-price-true">门市价:69元</span>
            <span class="list-like-price-num">已售42643</span>
          </div>
        </div>
      </li>
      <li class="list-like-li end">
        查看全部团购
        <span class="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
  background: #f0efed;
}
.header {
  height: 1.01rem;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  display: flex;
  color: #ffffff;
}
.city {
  width: 1.67rem;
  line-height: 1.01rem;
  text-align: center;
}
.search {
  height: 0.64rem;
  width: 4.854rem;
  font-size: 13px;
  line-height: 0.64rem;
  margin-top: 0.2rem;
  background: #21897d;
  color: #aaaaaa;
  text-decoration: none;
}
.search-a {
  text-decoration: none;
}
.mine {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 0.2rem;
}
.mine span {
  width: 100%;
}
.mine .icon-wode {
  margin-top: 0.1rem;
  font-size: 0.5rem;
}
.meituan-ad {
  width: 100%;
  height: 2.221rem;
  border-bottom: 1px solid #e6dede;
  background: #ffffff;
  display: block;
}
.list-kind {
  width: 100%;
  height: 3.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #e6dede;
  background: #ffffff;
}
.list-li {
  /* border: 1px solid #ff0036; */
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
}
.list-li span {
  width: 100%;
  font-size: 0.24rem;
  display: block;
}
.list-li .iconfont {
  width: 100%;
  font-size: 0.8rem;
}
.list-like {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid #e6dede;
  background: #ffffff;
}
.list-like-li {
  width: 7.1rem;
  height: 2.1rem;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #aaaaaa;
}
.head {
  line-height: 0.8rem;
  height: 0.8rem;
}
.end {
  line-height: 0.8rem;
  height: 0.8rem;
  color: #06c1ae;
  position: relative;
}
.end .iconfont {
  position: absolute;
  right: 0;
  font-size: 0.4rem;
  font-weight: 600;
}
.list-like-image {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 0.15rem;
  margin-right: 0.2rem;
}
.list-like-txt {
  margin-top: 0.15rem;
  flex: 1;
  height: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  justify-content: left;
}
.list-like-name {
  padding-top: 0.1rem;
  margin-bottom: 0.12rem;
  font-size: 0.3rem;
  font-weight: 400;
  height: 0.3rem;
}
.list-like-ad {
  font-size: 0.24rem;
  height: 0.68rem;
  line-height: 0.68rem;
  margin-bottom: 0.16rem;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
}
.list-like-price {
  width: 5.1rem;
  position: relative;
}
.list-like-price-a {
  font-size: 0.38rem;
  color: #06c1ae;
}
.list-like-price-yuan {
  font-size: 0.26rem;
  color: #06c1ae;
}
.list-like-price-true {
  color: #666;
  font-size: 0.24rem;
}
.list-like-price-num {
  color: #666;
  font-size: 0.24rem;
  position: absolute;
  top: 0.04rem;
  right: 0;
}
</style>