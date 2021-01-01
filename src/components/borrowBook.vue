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
                <div>书名：<span class="book_name">{{ book.name }}</span></div>
                <div>作者：<span class="author_name">{{ book.author }}</span></div>
                <div>
                    出版社：<span class="author_name">{{ book.press }}</span>
                </div>
                <div>剩余可借本数：<span>{{ book.number }}</span></div>
                <button class="link_btn">借阅</button>
                <button class="link_btn">预定</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
    data: function () {
        return {
            books: [
                {
                    name: '西游记',
                    author: '吴承恩',
                    press: '岳麓书院出版社',
                    number: 3
                },
                {
                    name: '西游记',
                    author: '吴承恩',
                    press: '岳麓书院出版社',
                    number: 3
                },
                {
                    name: '西游记',
                    author: '吴承恩',
                    press: '岳麓书院出版社',
                    number: 3
                },
            ]
        }
    }
}
</script>