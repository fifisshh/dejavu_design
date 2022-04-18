<template>
    <div class="navbar">
        <div class="logo-block">
            <div class="logo">
                <img alt="DEJAVU logo" src="../assets/logo_w.png">
            </div>
        </div>
        <div class="navbar-item">
            <ul>
                <li>
                    <!-- <router-link>專訪</router-link> -->
                    <a href="">專訪</a>
                </li>
                <li>
                    <a href="">品牌</a>
                </li>
            </ul>
        </div>
        <div class="social-media">
            <a class="icon ig">
                <!-- <img src="../assets/icon_ig.png" alt="Instagram"> -->
                <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
            <a class="icon yt">
                <!-- <img src="../assets/icon_yt.png" alt="YouTube"> -->
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </a>
            <a class="icon fb">
                <!-- <img src="../assets/icon_fb.png" alt="Facebook"> -->
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigate',
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.navbar {
    // background: rgb(184, 171, 158);
    border-bottom: 1px solid #ddd;
    position: relative;
    padding: 0 4rem;
    display: flex;
    height: 70px;
    .logo-block {
        flex: 1 0 12%;
        .logo {
            position: absolute;
            // /* display: inline-block; */
            width: 90px;
            height: 100px;
            top: 0;
            background-color: $brand-gold;
            img {
                display: block;
                max-width: 70px;
                width: 100%;
                margin: auto;
                padding-top: 20px;
            }
        }
    }
    .navbar-item {
        flex: 1 0 38%;
        align-self: center;
        ul {
            list-style: none;
            display: flex;
            margin-bottom: 0;
            padding-left: 0;
            li {
                padding: 1rem;
                a {
                    text-decoration: none;
                    color: #6A6A6A;
                    font-size: 1.1rem;
                }
            }
        }
    }
    .social-media {
        flex: 1 0 50%;
        align-self: center;
        text-align: right;
        .icon {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            cursor: pointer;
            max-width: 24px;
            width: 100%;
            margin: 0 .75rem;
            svg {
                font-size: 24px;
                color: $brand-gold;
            }
        }
        .fb {
            svg {
                font-size: 22px;
            }
        }
    }
}
</style>