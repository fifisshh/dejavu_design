<template>
    <div class="section">
        <div class="left">
            <div class="top">
                <h1>全球響應「關燈一小時」3/26一起關上不必要的電燈！</h1>
                <div class="date">Jul. 01 2022</div>
            </div>
            <div class="img-blk">
                <img src="@/assets/images/interviews/img_01.jpg" alt="">
            </div>
            <div class="middle">
                <p>
                    全球最大自發性公益減碳行動「Earth Hour 關燈一小時」，有192 個國家、地區及超過18,000 多個世界地標參與，今年在3/26(六) 晚上8點30分與世界串連，一起關上不必要的電燈，共同為地球關燈減碳一個小時。台灣主辦單位歐萊德12年來不間斷的率領大眾，串連政府單位、企業、名人及校園等共同響應，呼籲大眾正視氣候變遷議題。
                </p>
                <p>
                    主辦單位歐萊德為全球少數以非NPO組織，連續12年獲世界自然基金會 ( WWF )所屬Earth Hour Team授權共同推廣之單位。今年邀請花蓮市及行政院環保署擔任活動指導單位，並持續與合作倡議單位台灣青年氣候聯盟(TWYCC)共同推動，更邀請到六都首長包含台北市長柯文哲、新北市長侯友宜、桃園市長鄭文燦、台中市長盧秀燕、台南市長黃偉哲、高雄市長陳其邁及各縣市首長也發起響應，超過百位各界名人、上千家知名企業齊力倡議發聲。
                </p>
            </div>
        </div>
        <div class="right">
            <div class="other">
                <div class="name">熱門文章</div>
                <div class="art-title">珍寶海鮮舫往柬埔寨途中沉沒，拖船JAEWON 9曾出事故</div>
                <div class="art-title">被毀約、去西部、進體制，大陸逾千萬畢業生如何「上岸」？</div>
                <div class="art-title">被封殺的台灣樂團，和他們背後的中國「聽團仔」</div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
.section {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    display: flex;
    margin-top: 2rem;
    .left {
        flex: 0 0 60%;
        text-align: left;
        .top {
            h1 {
                font-size: 2.1rem;
                letter-spacing: 1px;
            }
            .date {
                padding-bottom: 1rem;
            }
        }
        .img-blk {
            padding-bottom: 1rem;
            img {
                display: block;
            }
        }
    }
    .right {
        flex: 0 0 300px;
        text-align: left;
        padding-left: 3rem;
        .other {
            position: fixed;
            width: 300px;
            .name {
                font-size: .9rem;
                padding: 1rem .5rem .5rem;
            }
            .art-title {
                padding: .5rem;
                border-bottom: 1px solid #ddd;
            }
        }
    }
}
</style>