<template>
    <aside class="lt_aside_nav content mCustomScrollbar">
        <ul>
            <li>
                <dl>
                    <dt>书籍管理</dt>
                    <dd>
                        <router-link to="/admin/operate-book" active-class="active">操作书籍</router-link>
                    </dd>
                    <dd>
                        <router-link to="/admin/add-book" active-class="active">书籍上新</router-link>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>排行榜</dt>
                    <dd>
                        <router-link to="/admin/ranking" active-class="active">查看排行榜</router-link>
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