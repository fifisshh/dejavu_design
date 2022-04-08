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
            <b-col cols="12" md="4">
              <ArticleStyleOne/>
            </b-col>
            <b-col cols="12" md="4">
              <ArticleStyleOne/>
            </b-col>
            <b-col cols="12" md="4">
              <ArticleStyleOne/>
            </b-col>
            <b-col cols="12" md="4">
              <ArticleStyleOne/>
            </b-col>
            <b-col cols="12" md="4">
              <ArticleStyleOne/>
            </b-col>
            <b-col cols="12" md="4">
              <ArticleStyleOne/>
            </b-col>
          </b-row>
        </b-container>
        <!-- <ArticleStyleOne/>
        <ArticleStyleOne/>
        <ArticleStyleOne/> -->
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navigate from '@/components/Navigate.vue'
import ArticleStyleOne from '@/components/ArticleStyleOne.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Navigate,
    ArticleStyleOne
  }
}
</script>

<style lang="scss" scoped>
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
    font-weight: 500;
  }
  span {
    text-transform: uppercase;
    font-size: .8rem;
    padding-left: 8rem;
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
.detail-block {
  // display: flex;
  // justify-content: space-between;
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
  background-color: #E0A96F;
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
</style>
