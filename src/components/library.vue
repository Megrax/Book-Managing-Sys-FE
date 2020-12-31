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
        if (!this.$cookies.isKey('login')) {
            this.$router.push({ path: '/login' });
        }
    }
}
</script>