<template>
    <div class="rwd-menu" v-if="menuOpen">
        <div class="close" @click="closeMenu">
            <font-awesome-icon icon="fa-solid fa-x" />
        </div>
        <div class="items-list">
            <ul>
                <li>專訪</li>
                <li>品牌</li>
            </ul>
        </div>
        <div class="brand-block">
            <div class="logo-block">
                <img alt="DEJAVU logo" src="../assets/logo_bwn.png">
            </div>
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
    },
    methods: {
        closeMenu() {
            this.$emit("close");
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.rwd-menu {
    background-color: $brand-gold;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 99;
    top: 0;
    .close {
        padding: 1rem 0;
        border-bottom: 1px solid #fff;
        svg {
            color: #fff;
            font-size: 18px;
        }
    }
    .items-list {
        ul {
            list-style: none;
            padding-left: 0;
            color: #fff;
            li {
                text-align: left;
                font-size: 1.4rem;
                padding: 1rem 0;
                border-bottom: 1px solid #fff;
                padding-left: 1rem;
            }
        }
    }
    .brand-block {
        margin-top: 4rem;
        .logo-block {
            max-width: 125px;
            width: 100%;
            height: 100px;
            background-color: #fff;
            position: relative;
            img {
                display: block;
                max-width: 80px;
                width: 100%;
                height: auto;
                position: absolute;
                top: 50%;
                left: 25px;
                transform: translateY(-50%);
            }
        }
        .brand-intro {
            text-align: left;
            padding: 1rem 1.5rem;
            p {
                display: inline-block;
                color: #fff;
                line-height: 1.7;
                font-size: 1.1rem;
            }
        }
    }
}
</style>