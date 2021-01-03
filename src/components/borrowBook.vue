<template>
    <div class="rt_content" id="query_book">
        <div class="form_wrapper">
            <form>
                <h2>
                    <strong style="color: grey">书籍查询</strong>
                </h2>
                <input type="text" class="textbox textbox_295" placeholder="请输入你要查询的书名/作者名" v-model="bookname"/>
                <select class="select" v-model="method">
                    <option disabled>请选择查询方式</option>
                    <option value="1">按书名查询</option>
                    <option value="2">按作者名查询</option>
                </select>
                <select class="select">
                    <option disabled>请选择查询精度</option>
                    <option>完全匹配</option>
                    <option>自由匹配</option>
                </select>
                <input type="button" value="查询" class="group_btn" @click="queryBooks" />
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
                <button class="link_btn" @click="borrow(book.bookName)">借阅</button>
                <button class="link_btn">预定</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
export default {

    methods:{
        borrow(bookname){
            this.axios({
                url:this.globalUrl+"/borrow",
                method:'get',
                params:{
                    username:localStorage.getItem("login"),
                    bookName:bookname
                }
            }).then(res=>{
                console.log(res.data)
                if (res.data.status===200){
                    alert("借阅成功")
                }
                else{
                    alert("借阅失败")
                }
            })

        },
      queryBooks(){
          console.log(this.method)
          this.axios({
              url:this.globalUrl+"/book",
              params:{
                  bookName:this.bookname
              }
          }).then(res=>{
              console.log(res.data)
              if (res.data.status===200){
                  this.books=res.data.other
                  console.log(this.books)
              }
          })

      }
    },
    data () {
        return {
            bookname:"",
            books: [],
            method:1
        }
    }
}
</script>