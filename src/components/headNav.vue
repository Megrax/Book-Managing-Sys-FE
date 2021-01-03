<template>
    <header>
        <h1>图书管理系统</h1>
        <ul class="rt_nav">
            <li><a href="#" class="admin_icon">{{ name }}</a></li>
            <li>
                <router-link to="/login" class="quit_icon" v-on:click.native='logout'>安全退出</router-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
</style>

<script>
export default {
    data() {
        return {
            name: 'DeathGhost'
        }
    },
    methods: {
        logout: function () {
            let s = localStorage.clear();
            this.$router.push("/login")
        }
    }
}
</script>