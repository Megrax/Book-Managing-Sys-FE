<template>
    <div>
        <headNav></headNav>
        <leftNav></leftNav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
</style>

<script>
import headNav from './headNav';
import leftNav from './leftNav';

export default {
    components: {
        headNav,
        leftNav
    },
    created: function () {
        if (!localStorage.getItem('login') || localStorage.getItem('admin')) {
            this.$router.push({ path: '/login' }).catch(() => { });
        }
    }
}
</script>