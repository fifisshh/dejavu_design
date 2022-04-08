<template>
    <div class="article">
        <div class="img-cover">
            <img src="../assets/inter1.jpg" alt="">
        </div>
        <div class="desc">
            <div class="date">
                <div class="month">JAN.</div>
                <div class="day">29</div>
                <div class="year">2022</div>
            </div>
            <div class="title">標題文字標題文字標題文字標題文字標題文字</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleStyleOne',
}
</script>

<style lang="scss" scoped>
.article {
    // width: 380px;
    margin-top: 2.5rem;
    margin-bottom: 50px;
    .img-cover {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .desc {
        display: flex;
        .date {
            padding: .5rem 1rem;
            // text-align: right;
            .month {
                font-size: 1rem;
                font-weight: 500;
            }
            .day {
                font-size: 1.2rem;
                font-weight: 500;
                color: #E0A96F;
            }
            .year {
                font-size: .8rem;
                // color: #9fa0a0;
            }
        }
        .title {
            padding: .5rem 0 0 .5rem;
            text-align: left;
            font-size: 1rem;
            color: #646464;
        }
    }
}

</style>