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
  import returnBook from './components/returnBook';
  import myInfo from './components/myInfo';
  import manageInfo from './components/manageInfo';
  import ranking from './components/ranking';

  export default Vue.extend({
    data: function() {
      return {

      }
    },
    components: {
      headNav,
      leftNav,
      borrowBook,
      returnBook,
      myInfo,
      manageInfo,
      ranking
    }
  });
</script>

<style>
</style>
