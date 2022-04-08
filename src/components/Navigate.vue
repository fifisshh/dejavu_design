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
            <div class="icon ig">
                <img src="../assets/icon_ig.png" alt="Instagram">
            </div>
            <div class="icon yt">
                <img src="../assets/icon_yt.png" alt="YouTube">
            </div>
            <div class="icon fb">
                <img src="../assets/icon_fb.png" alt="Facebook">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigate',
}
</script>

<style lang="scss" scoped>
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
            background-color: #E0A96F;
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
            max-width: 22px;
            width: 100%;
            margin: 0 .5rem;
            &:last-child {
                margin-right: 0;
                margin-left: 0;
            }
            &:nth-child(2) {
                max-width: 24px;
            }
            img {
                display: block;
                width: 100%;
            }
        }
    }
}
</style>