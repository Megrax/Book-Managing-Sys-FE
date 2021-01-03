<template>
    <div class="rt_content" id="query_book">
        <div class="form_wrapper">
            <form action="">
                <h2>
                    <strong style="color: grey">书籍查询</strong>
                </h2>
                <input type="text" class="textbox textbox_295" placeholder="请输入你要查询的书名/作者名" />
                <select class="select">
                    <option disabled>请选择查询方式</option>
                    <option>按书名查询</option>
                    <option>按作者名查询</option>
                </select>
                <select class="select">
                    <option disabled>请选择查询精度</option>
                    <option>完全匹配</option>
                    <option>自由匹配</option>
                </select>
                <input type="button" value="查询" class="group_btn" />
            </form>
        </div>
        <div class="result_wrapper">
            <div class="book" v-for="(book,index) in books" :key="index">
                <div>书名：<span class="book_name">{{ book.bookName }}</span></div>
                <div>作者：<span class="author_name">{{ book.author }}</span></div>
                <div>
                    出版社：<span class="author_name">{{ book.publish }}</span>
                </div>
                <div>剩余可借本数：<span>{{ book.bookNum }}</span></div>
                <button class="link_btn" @click="showUploadBookWindow(book.bookName)">上架</button>
                <button class="link_btn" @click="showDownloadBookWindow(book.bookName)">下架</button>
            </div>
        </div>
        <section class="pop_bg" v-show="isUploadBookWindow">
            <div class="pop_cont">
                <h3>上架</h3>
                <div class="pop_cont_input">
                    <ul>
                        <li>
                            <span>请输入上架的本数：</span>
                            <input type="text" placeholder="请输入数量..." class="textbox" v-model="upNum" />
                        </li>
                    </ul>
                </div>
                <div class="btm_btn">
                    <input type="button" value="确认" class="input_btn trueBtn" @click="uploadBook()" />
                    <input type="button" value="取消" class="input_btn falseBtn" @click="shutUploadBookWindow" />
                </div>
            </div>
        </section>
        <section class="pop_bg" v-show="isDownloadBookWindow">
            <div class="pop_cont">
                <h3>下架</h3>
                <div class="pop_cont_input">
                    <ul>
                        <li>
                            <span>请输入下架的本数：</span>
                            <input type="text" placeholder="请输入数量..." class="textbox" v-model="downNum" />
                        </li>
                    </ul>
                </div>
                <div class="btm_btn">
                    <input type="button" value="确认" class="input_btn trueBtn" @click="downloadBook()" />
                    <input type="button" value="取消" class="input_btn falseBtn" @click="shutDownloadBookWindow" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
    created() {
        this.axios({
            url:this.globalUrl+"/allBooks"
        }).then(res=>{
            this.books = res.data.other
            console.log(this.books)
        })
    },
    data: function () {
        return {
            isUploadBookWindow: false,
            isDownloadBookWindow: false,
            upNum: 0,
            downNum: 0,
            books: [],
            hiddenBookName:""
        }
    },
    methods: {
        showUploadBookWindow(bookname) {
            this.isUploadBookWindow = true;
            this.hiddenBookName=bookname

        },
        shutUploadBookWindow: function () {
            this.isUploadBookWindow = false;
        },
        showDownloadBookWindow(bookname) {
            this.isDownloadBookWindow = true;
            this.hiddenBookName=bookname
        },
        shutDownloadBookWindow: function () {
            this.isDownloadBookWindow = false;
        },
        uploadBook: function () {
            console.log(this.upNum)
            this.axios({
                url:this.globalUrl+"/listedBook",
                params:{
                    bookName:this.hiddenBookName,
                    num:this.upNum
                }
            }).then(res=>{
                console.log(res.data)
                if (res.data.status===200){
                    alert("上架"+res.data.other+"本")
                    this.isUploadBookWindow = false;
                }else{
                    alert("操作失败")
                }
            })
        },
        downloadBook: function () {
            console.log(this.downNum)
            this.axios({
                url:this.globalUrl+"/unlistedBook",
                params:{
                    bookName:this.hiddenBookName,
                    num:this.downNum
                }
            }).then(res=>{
                console.log(res.data)
                if (res.data.status===200){
                    alert("下架"+res.data.other+"本")
                    this.isDownloadBookWindow = false;
                }else{
                    alert("操作失败")
                }
            })
        },
    }
}
</script>