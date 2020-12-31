<template>
    <aside class="lt_aside_nav content mCustomScrollbar">
        <ul>
            <li>
                <dl>
                    <dt>书籍借阅</dt>
                    <dd>
                        <router-link to="/library/borrow-book" active-class="active">查找书籍</router-link>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>书籍归还</dt>
                    <dd>
                        <router-link to="/library/return-book" active-class="active">归还书籍</router-link>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>用户信息查询</dt>
                    <dd>
                        <router-link to="/library/my-info" active-class="active">我的信息</router-link>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>用户信息管理</dt>
                    <dd>
                        <router-link to="/library/manage-info" active-class="active">信息管理</router-link>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>排行榜</dt>
                    <dd>
                        <router-link to="/library/ranking" active-class="active">查看排行榜</router-link>
                    </dd>
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