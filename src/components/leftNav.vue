<template>
    <aside class="lt_aside_nav content mCustomScrollbar">
        <!-- <h2><a href="index.php">起始页</a></h2> -->
        <ul>
            <li>
                <dl>
                    <dt>书籍借阅</dt>
                    <dd>
                        <router-link to="/borrow-book" active-class="active">查找书籍</router-link>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>书籍归还</dt>
                    <dd><a href="#">归还书籍</a></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>用户信息查询</dt>
                    <dd><a href="#">我的信息</a></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>用户信息管理</dt>
                    <dd><a href="#">信息管理</a></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>排行榜</dt>
                    <dd><a href="#">查看排行榜</a></dd>
                </dl>
            </li>
        </ul>
    </aside>
</template>

<style scoped>
</style>

<script>
export default {

}
</script>