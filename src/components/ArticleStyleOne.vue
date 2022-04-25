<template>
    <div class="article">
        <div class="img-cover">
            <img :src="getImgUrl(item.src)" alt="item.src">
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
    props: ['item'],
    methods: {
    getImgUrl: function (imagePath) {
      return require('@/assets/images/interviews/' + imagePath);
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
    max-width: 400px;
    margin: auto;
    margin-top: 2.5rem;
    margin-bottom: 20px;
    .img-cover {
        width: 100%;
        img {
            height: 300px;
            display: block;
            object-fit: cover;
            width: 100%;
        }
    }
    .desc {
        display: flex;
        padding-top: 1rem;
        .date {
            padding: 0 1rem 0 .5rem;
            .month {
                font-size: 1rem;
                font-weight: 500;
            }
            .day {
                font-size: 1.2rem;
                font-weight: 500;
                color: #E0A96F;
                line-height: 1.2;
            }
            .year {
                font-size: .8rem;
                // color: #9fa0a0;
            }
        }
        .title {
            padding: 0 0 0 .5rem;
            text-align: left;
            font-size: 1.1rem;
            color: #646464;
        }
    }
}

</style>