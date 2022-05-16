<template>
    <div class="rwd-menu" v-if="menuOpen">
        <div class="close">

        </div>
        <div class="items-list">
            <ul>
                <li>專訪</li>
                <li>品牌</li>
            </ul>
        </div>
        <div class="brand-block">
            <!-- <div class="logo-block">
                <img alt="DEJAVU logo" src="../assets/logo_bwn.png">
            </div> -->
            <div class="brand-intro">
                <p>品牌介紹品牌介紹品牌介紹品牌介紹品牌介紹品牌介紹品牌介紹品牌介紹品牌介紹品牌介紹</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "menuOpen"
    ],
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.rwd-menu {
    background-color: $brand-gold;
    height: 100vh;
    position: relative;
    z-index: 99;
    top: 0;
    .items-list {
        ul {
            list-style: none;
            color: #fff;
        }
    }
}
</style>