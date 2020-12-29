<template>
    <div class="rt_content view" id="manage_info">
        <div class="content_wrapper">
            <div class="manage">
                <input type="button" value="修改密码" class="link_btn" />
                <input type="button" value="修改密保" class="link_btn" />
            </div>
            <div class="info_box">
                <h2 v-if="!borrowed_book.flag">你目前还未借任何书，赶紧行动起来吧！</h2>
                <h2 v-if="borrowed_book.flag">在借书籍：</h2>
                <table class="table" v-if="borrowed_book.flag">
                    <tr>
                        <th>书名</th>
                        <th>还书截止日期</th>
                        <th>选项</th>
                    </tr>
                    <tr v-for="book in borrowed_book.books" :key="book.name">
                        <td style="width: 265px">
                            <div class="cut_title ellipsis">
                                《{{ book.name }}》
                            </div>
                        </td>
                        <td>{{ book.return }}</td>
                        <td><a href="#" class="inner_btn">续借</a>
                            <a href="#" class="inner_btn">归还</a>
                        </td>
                    </tr>

                </table>
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
            borrowed_book: {
                flag: true,
                books: [
                    {
                        name: '西游记',
                        return: '2021.10.1'
                    }
                ]
            }
        }
    }
}
</script>