<template>
    <div class="brand">
        <div class="section-one">
            <div class="text">品牌</div>
        </div>
        <div class="section-main">
            <div class="category">
                <ul>
                    <li>
                        <a href="">May</a>
                    </li>
                    <li>
                        <a href="">Jun</a>
                    </li>
                    <li>
                        <a href="">Jul</a>
                    </li>
                </ul>
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
        <div class="pagination">
            <div class="overflow-auto">
                <b-pagination
                pills
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                ></b-pagination>
            </div>
        </div>
    </div>
    
</template>

<script>
import ArticleStyleOne from '@/components/ArticleStyleOne.vue'
export default {
    name: 'Home',
    components: {
        ArticleStyleOne,
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
                { id: "7", src: "img_06.jpg" },
                { id: "8", src: "img_06.jpg" },
                { id: "9", src: "img_06.jpg" },
            ],
            perPage: 3,
            currentPage: 1,
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
    .section-one {
        position: relative;
        background-color: #ddd;
        width: 100vw;
        height: 50vh;
        .text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 2.2rem;
            color: #fff;
            letter-spacing: 3px;
        }
    }
    .section-main {
        .category {
            margin-top: 2rem;
            ul {
                list-style: none;
                display: inline-flex;
                justify-content: center;
                margin: 0;
                padding: .5rem 2rem;
                border-radius: 50px;
                border: 1px solid #ddd;
                li {
                    display: block;
                    // padding: 1.5rem;
                    a {
                        display: block;
                        text-decoration: none;
                        font-size: 1.1rem;
                        padding: .5rem 1rem;
                        position: relative;
                        color: #646464;
                        &::after {
                            display: block;
                            content: '';
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            position: absolute;
                            bottom: -4px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        &:hover {
                            color: $brand-gold;
                            &::after {
                                display: block;
                                background-color: $brand-gold;
                            }
                        }
                    }
                }
            }
        }
    }
    .pagination {
        justify-content: flex-end;
        margin: 1rem 2rem 1rem 0;
        .page-link {
            border: none;
            color: $brand-gold;
            // padding: .5rem;
        }
        .page-item.active .page-link {
            background-color: $brand-gold;
        }
    }
</style>