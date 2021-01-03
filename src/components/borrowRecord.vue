<template>
    <div class="rt_content view" id="my_info">
        <div class="content_wrapper">
            <h1>借阅记录</h1>
            <div class="info_box">
                <h2 v-if="!borrowed_book.flag">你目前还未借任何书，赶紧行动起来吧！</h2>
                <table class="table" v-if="borrowed_book.flag">
                    <tr>
                        <th>书名</th>
                        <th>还书截止日期</th>
                        <th>状态</th>
                    </tr>
                    <tr v-for="(book,index) in borrowed_book.books" :key="index">
                        <td style="width: 265px">
                            <div class="cut_title ellipsis">
                                《{{ book.name }}》
                            </div>
                        </td>
                        <td v-if="!book.isScheduled">{{ book.return }}</td>
                        <td v-else>还在预定中</td>
                        <td>
                            <span class="Scheduled" v-if="book.isScheduled">预定中</span>
                            <span class="toBeReturned" v-else-if="!book.isReturned && book.return >= currTime">未归还</span>
                            <span class="returned" v-else-if="book.isReturned">已归还</span>
                            <span class="timeOut" v-else-if="!book.isReturned && book.return < currTime">超时</span>

                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info_box {
    font-size: 16px !important;
    margin-top: 40px;
    margin-bottom: 50px;
}
.toBeReturned {
    color: rgba(128, 0, 128, 0.646);
}
.returned {
    color: rgba(0, 128, 0, 0.714);
}
.timeOut {
    color: rgba(255, 0, 0, 0.769);
}
.Scheduled {
    color: #7dc4e7;
}
</style>

<script>
export default {
    data: function () {
        return {
            currTime: '',
            borrowed_book: {
                flag: true,
                books: [
                ]
            }
        }
    },
    created: function () {
        let myDate = new Date();
        this.currTime = myDate.getFullYear() + '.' + (myDate.getMonth() + 1) + '.' + myDate.getDate();
        console.log(this.currTime>="2020.12.3")
        console.log(this.currTime)
        this.axios({
            url:this.globalUrl+"/selectAllRecords",
            method:'get',
            params:{
                username:localStorage.getItem("login")
            }
        }).then(res=>{
            console.log(res.data)
            this.borrowed_book.books = res.data.other
        })

    }
}
</script>