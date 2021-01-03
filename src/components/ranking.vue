<template>
    <div class="rt_content view" id="ranking">
        <div class="content_wrapper">
            <table class="table">
                <tr>
                    <th>排名</th>
                    <th>姓名</th>
                    <th>阅读等级</th>
                    <th>信誉等级</th>
                </tr>
                <tr v-for="(person, index) in ranking_list" :key="index">
                    <td>
                        {{ index + 1 }}
                    </td>
                    <td>{{ person.username }}</td>
                    <td>{{ person.permission }}</td>
                    <td>{{ person.userCredibility }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
    created() {
        this.axios({
            url:this.globalUrl+"/rank"
        }).then(res=>{
            this.ranking_list = res.data.other
        })
    },
    data: function () {
        return {
            ranking_list: []
        }
    }
}
</script>