<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo_bwn.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navigate/>
    <div class="section-one">
      
    </div>
    <div class="section-inter">
      <div class="title">
        <h2>專訪</h2>
        <span>the interview</span>
        <a href="" class="link-sec">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </div>
        </a>
      </div>
      <div class="detail-block">
        <b-container>
          <b-row>
            <b-col cols="12" md="4" v-for="item in items" :key="item.id">
              <ArticleStyleOne :item="item"/>
            </b-col>
          </b-row>
        </b-container>
        <!-- <ArticleStyleOne/>
        <ArticleStyleOne/>
        <ArticleStyleOne/> -->
      </div>

    </div>
    <div class="section-inter">
      <div class="title">
        <h2>品牌</h2>
        <span>the brand</span>
        <a href="" class="link-sec">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </div>
        </a>
      </div>
      <div class="detail-block detail-block-grab">
        <!-- <div class="horizontal" v-for="item in items" :key="item.id"> -->
              <!-- <ArticleStyleOne :item="item"/> -->
        <!-- </div> -->
        <!-- <b-container>
          <b-row>
            <b-col cols="12" md="4" v-for="item in items" :key="item.id">
              <ArticleStyleOne :item="item"/>
            </b-col>
          </b-row>
        </b-container> -->
      </div>

    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navigate from '@/components/Navigate.vue'
import ArticleStyleOne from '@/components/ArticleStyleOne.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Navigate,
    ArticleStyleOne,
    Footer
  },
  data: function () {
    return {
      items: [
        { id: "1", src: "i_01.jpg" },
        { id: "2", src: "i_02.jpg" },
        { id: "3", src: "i_03.jpg" },
        { id: "4", src: "i_04.jpg" },
        { id: "5", src: "i_05.jpg" },
        { id: "6", src: "i_06.jpg" },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.section-one {
  width: 100%;
  height: calc( 100vh - 70px );
  background-color: #ddd;
}
.title {
  margin-top: 2rem;
  position: relative;
  h2 {
    font-size: 2.1rem;
    letter-spacing: 2px;
    font-weight: 400;
  }
  span {
    text-transform: uppercase;
    font-size: .8rem;
    padding-left: 6rem;
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 40px;
      height: 1px;
      margin-right: .5rem;
      background-color: #646464;
    }
  }
}
@media screen and (min-width: 992px) {
  .container {
    max-width: 100%;
  }
}
.link-sec {
  display: inline-block;
  width: 110px;
  height: 50px;
  background-color: $brand-gold;
  position: absolute;
  right: 0;
  top: 10px;
  text-decoration: none;
  &:hover {
    background-color: rgba(224, 169, 111, 0.8);
    .icon {
      transform: translate(50px,-10px);
      transition: .15s ease-in;
    }
  }
  .icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    transition: .1s ease-in;
    svg {
      font-size: 1.5rem;
    }
  }
}
.detail-block-grab {
  cursor: grab;
  display: flex;
}
</style>
