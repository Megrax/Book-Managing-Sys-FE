<template>
    <div class="rt_content" id="return_book">
        <div class="content_wrapper">
            <form action="">
                <h2>
                    <strong style="color: grey">请填写上新的书籍信息：</strong>
                </h2>
                <form action="#">
                    <ul>
                        <li><span>书名：</span><input type="text" class="textbox textbox_295" placeholder="请输入书名" v-model="name" /></li>
                        <li><span>作者：</span><input type="text" class="textbox textbox_295" placeholder="请输入作者" v-model="author" /></li>
                        <li><span>出版社：</span><input type="text" class="textbox textbox_295" placeholder="请输入出版社" v-model="press"/></li>
                        <li><span>上架本数：</span><input type="text" class="textbox textbox_295" placeholder="请输入上架本数" v-model="num"/></li>
                        <li><input type="button" value="添加" class="group_btn" id="add_btn" @click="addBook" /></li>
                    </ul>
                </form>
            </form>
        </div>
    </div>
</template>

<style scoped>
ul {
    display: flex;
    flex-flow: column nowrap;
}
ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-top: 30px;
    font-size: 16px;
}
ul li input {
    width: 200px;
}
ul li #add_btn {
    width: 90px;
}
</style>

<script>
export default {
    data: function () {
        return {
            name: '',
            author: '',
            press: '',
            num: 0
        }
    },
    methods: {
        addBook: function () {
            this.axios({
                url:this.globalUrl+"/addBook",
                params:{
                    bookName:this.name,
                    publish:this.press,
                    bookNum:this.num,
                    author:this.author
                }
            }).then(res=>{
                if(res.data.status===200){
                    alert("添加成功")
                }else{
                    alert("添加失败")
                }
            })
        }
    }
}
</script>