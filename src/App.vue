<template>
  <div id="app">
    <Navigate/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <Footer/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
// import LoadingScreen from '@/components/LoadingScreen.vue'
// import { getCurrentInstance } from "vue";
import Navigate from '@/components/Navigate.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Navigate,
		Footer,
	},
  methods: {
    // listenScroll() {
    //   let myScroll = document.querySelector("#app").getBoundingClientRect().top;
    //   console.log(myScroll);
    // }
  },
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    document.addEventListener("scroll", this.listenScroll);
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view

    // this.$router.beforeEach((to) => {
      //  does the page we want to go to have a meta.progress object
      // if (to.meta.progress !== undefined) {
        // let meta = to.meta.progress
        // parse meta tags
        // this.$Progress.parseMeta(meta)
      // }
      //  start the progress bar
      // this.$Progress.start()
      //  continue to next page
      // next()
    // })


    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 15px;
  letter-spacing: .8px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>