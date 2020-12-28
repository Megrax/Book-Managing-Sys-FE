<template>
    <div>
        <headNav></headNav>
        <leftNav></leftNav>
        <router-view></router-view>
    </div>
</template>

<script lang="js">
  import Vue from 'vue';
  import headNav from './components/headNav';
  import leftNav from './components/leftNav';
  import borrowBook from './components/borrowBook';

  export default Vue.extend({
    data: function() {
      return {

      }
    },
    components: {
      headNav,
      leftNav,
      borrowBook
    }
  });
</script>

<style>
</style>
