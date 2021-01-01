<template>
    <router-view></router-view>
</template>

<script lang="js">
  import Vue from 'vue';
  import library from './components/library';
  import login from './components/login';
  import headNav from './components/headNav';
  import leftNav from './components/leftNav';
  import borrowBook from './components/borrowBook';
  import returnBook from './components/returnBook';
  import myInfo from './components/myInfo';
  import borrowRecord from './components/borrowRecord';
  import manageInfo from './components/manageInfo';
  import ranking from './components/ranking';

  export default Vue.extend({
    data: function() {
      return {

      }
    },
    components: {
      login,
      library,
      headNav,
      leftNav,
      borrowBook,
      returnBook,
      myInfo,
      borrowRecord,
      manageInfo,
      ranking
    }
  });
</script>

<style>
</style>
