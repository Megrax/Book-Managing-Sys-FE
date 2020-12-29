<template>
    <div class="rt_content view" id="my_info">
        <div class="content_wrapper">
            <h1>我的信息</h1>
            <ul class="info">
                <li>
                    <strong>借书证编号：</strong>
                    <span>{{ myInfo.ID }}</span>
                </li>
                <li>
                    <strong>姓名：</strong>
                    <span>{{ myInfo.name }}</span>
                </li>
                <li>
                    <strong>信誉等级：</strong>
                    <span>{{ myInfo.trustLV }}</span>
                </li>
                <li>
                    <strong>阅读等级：</strong>
                    <span>LV.</span><span>{{ myInfo.readingLV }}</span>
                </li>
            </ul>
            <div class="tip">
                <ul>
                    <li>注意：</li>
                    <li>
                        <p>1.信誉等级反映了读者借阅图书时的信誉情况，共分5级，所有读者初始为5级，当系统判定读者有借阅超时等行为时，将降低读者的信誉等级，伴随着信誉等级的降低，读者的借阅权限会随之受到影响。</p>
                    </li>
                    <li>
                        <p>2.阅读等级根据读者借阅数产生，会随着读者阅读的书籍数量增加而提高，每月最多提高1级，无最终上限。</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
    data: function () {
        return {
            myInfo: {
                ID: '0000001',
                name: 'DeathGhost',
                trustLV: 5,
                readingLV: 31
            }
        }
    }
}
</script>