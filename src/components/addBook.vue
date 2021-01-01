<template>
    <div class="rt_content" id="return_book">
        <div class="content_wrapper">
            <form action="">
                <h2>
                    <strong style="color: grey">请填写上新的书籍信息：</strong>
                </h2>
                <form action="#">
                    <ul>
                        <li><span>书名：</span><input type="text" class="textbox textbox_295" placeholder="请输入书籍编号" /></li>
                        <li><span>作者：</span><input type="text" class="textbox textbox_295" placeholder="请输入书籍编号" /></li>
                        <li><span>出版社：</span><input type="text" class="textbox textbox_295" placeholder="请输入书籍编号" /></li>
                        <li><span>上架本数：</span><input type="text" class="textbox textbox_295" placeholder="请输入书籍编号" /></li>
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

        }
    }
}
</script>