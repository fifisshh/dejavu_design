<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo_bwn.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navigate/>
    <div class="section-one">
      
    </div>
	<!-- 專訪區塊 -->
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
            <b-col cols="12" xs="12" md="6" lg="4" v-for="item in items" :key="item.id">
              <ArticleStyleOne :item="item"/>
            </b-col>
          </b-row>
        </b-container>
      </div>

    </div>

	<!-- 品牌區塊 -->
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
		<div class="detail-block detail-block-grab" ref="list">
			<div class="pattern"></div>
			<swiper
				:slides-per-view="1"
				:space-between="20"
				:breakpoints="swiperOptions.breakpoints"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
			>
				<swiper-slide
				v-for="item in items"
				:key="item.id"
				class="horizontal"
				>
					<ArticleStyleOne :item="item"/>
				</swiper-slide>
			</swiper>
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
import { Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'


export default {
  name: 'Home',
  components: {
	Navigate,
	ArticleStyleOne,
	Footer,
	Swiper,
	SwiperSlide,
  },
  data() {
    return {
		items: [
		{ id: "1", src: "img_01.jpg" },
		{ id: "2", src: "img_02.jpg" },
		{ id: "3", src: "img_03.jpg" },
		{ id: "4", src: "img_04.jpg" },
		{ id: "5", src: "img_05.jpg" },
		{ id: "6", src: "img_06.jpg" },
		],
		swiperOptions: {
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15
				},
				531: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40
				},
			}
		}
    };
  },
  computed: {
  },
  methods: {
	onSwiper (swiper) {
		console.log(swiper)
    },
    onSlideChange () {
		console.log('slide change')
    }
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
	@media screen and (max-width: 650px) {
		padding-top: 3.5rem;
	}
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

@media screen and (min-width: 768px) {
	.container-sm, .container {
		max-width: 100%;
	}
}
.link-sec {
	display: inline-block;
	width: 110px;
	height: 45px;
	background-color: $brand-gold;
	position: absolute;
	right: 0;
	top: 10px;
	text-decoration: none;
	@media screen and (max-width: 650px) {
		top: 0;
		width: 90px;
		height: 40px;
	}
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
	max-width: 100vw;
	white-space: nowrap;
	position: relative;
	.pattern {
		position: absolute;
		top: 6px;
		left: 0;
		max-width: 100vw;
		width: 100%;
		max-height: 250px;
		height: 100%;
		background-image: url("../assets/images/interviews/background.png");
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		@media screen and (min-width: 350px) {
			max-height: 300px;
		}
		@media screen and (min-width: 450px) {
			max-height: 400px;
		}
		@media screen and (min-width: 500px) {
			max-height: 230px;
		}
		@media screen and (min-width: 650px) {
			max-height: 280px;
		}
		@media screen and (min-width: 767px) {
			max-height: 320px;
		}
		@media screen and (min-width: 850px) {
			max-height: 350px;
		}
		@media screen and (min-width: 992px) {
			max-height: 270px;
		}
		@media screen and (min-width: 1200px) {
			max-height: 350px;
		}
	}
}
.horizontal {
	display: inline-block;
	cursor: grab;
	&:first-child {
		margin-left: 50px;
		@media screen and (max-width: 650px) {
			margin-left: 30px;
		}
	}
}
</style>
