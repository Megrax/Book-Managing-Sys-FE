<template>
    <div>
        <headNav></headNav>
        <adminNav></adminNav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
</style>

<script>
import headNav from './headNav';
import adminNav from './adminNav';

export default {
    components: {
        headNav,
        adminNav
    },
    created: function () {
        if (!localStorage.getItem('admin')) {
            this.$router.push({ path: '/login' });
        }
    }
}
</script>