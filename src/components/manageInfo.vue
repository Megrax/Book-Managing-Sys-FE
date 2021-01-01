<template>
    <div class="rt_content view" id="manage_info">
        <div class="content_wrapper">
            <div class="manage">
                <input type="button" value="修改密码" class="link_btn" @click="showChangePwdWindow" />
                <input type="button" value="修改密保" class="link_btn" @click="showChangePwdProtWindow" />
            </div>
            <section class="pop_bg" v-show="isChangePwdWindow">
                <div class="pop_cont">
                    <!--title-->
                    <h3>修改密码</h3>
                    <!--content-->
                    <div class="pop_cont_input">
                        <ul>
                            <li>
                                <span>密保邮箱：</span>
                                <input type="text" placeholder="请输入密保邮箱..." class="textbox" v-model="currEmail" />
                                <input type="button" value="验证邮箱" class="link_btn" @click="checkEmail">
                            </li>
                            <li v-show="emailValid">
                                <p class="emailValid">密保验证通过✅</p>
                            </li>
                            <li v-show="!emailValid">
                                <p class="emailInvalid">密保验证未通过❌</p>
                            <li>
                                <span class="ttl">新密码：</span>
                                <input type="password" placeholder="请输入新密码..." class="textbox" />
                            </li>
                        </ul>
                    </div>
                    <!--以pop_cont_text分界-->
                    <div class="pop_cont_text">修改密码须先验证邮箱！</div>
                    <!--bottom:operate->button-->
                    <div class="btm_btn">
                        <input type="button" value="确认" class="input_btn trueBtn" @click="changePwd(),shutChangePwdWindow()" />
                        <input type="button" value="关闭" class="input_btn falseBtn" @click="shutChangePwdWindow" />
                    </div>
                </div>
            </section>
            <!--结束：修改密码弹出框效果-->
            <section class="pop_bg" v-show="isChangePwdProtWindow">
                <div class="pop_cont">
                    <!--title-->
                    <h3>修改密保</h3>
                    <!--content-->
                    <div class="pop_cont_input">
                        <ul>
                            <li>
                                <span>原密保：</span>
                                <input type="text" placeholder="请输入密保邮箱..." class="textbox" v-model="currEmail" />
                                <input type="button" value="验证邮箱" class="link_btn" @click="checkEmail">
                            </li>
                            <li v-show="emailValid">
                                <p class="emailValid">密保验证通过✅</p>
                            </li>
                            <li v-show="!emailValid">
                                <p class="emailInvalid">密保验证未通过❌</p>
                            <li>
                                <span class="ttl">新密保：</span>
                                <input type="password" placeholder="请输入新的密保邮箱..." class="textbox" />
                            </li>
                        </ul>
                    </div>
                    <!--以pop_cont_text分界-->
                    <div class="pop_cont_text">修改密保须保证原密保有效！</div>
                    <!--bottom:operate->button-->
                    <div class="btm_btn">
                        <input type="button" value="确认" class="input_btn trueBtn" @click="changePwdProt(),shutChangePwdProtWindow()" />
                        <input type="button" value="关闭" class="input_btn falseBtn" @click="shutChangePwdProtWindow" />
                    </div>
                </div>
            </section>
            <!--结束：修改密保弹出框效果-->
            <div class="info_box">
                <h2 v-if="!borrowed_book.flag">你目前还未借任何书，赶紧行动起来吧！</h2>
                <h2 v-if="borrowed_book.flag">在借书籍：</h2>
                <table class="table" v-if="borrowed_book.flag">
                    <tr>
                        <th>书名</th>
                        <th>还书截止日期</th>
                        <th>选项</th>
                    </tr>
                    <tr v-for="book in borrowed_book.books" :key="book.name">
                        <td style="width: 265px">
                            <div class="cut_title ellipsis">
                                《{{ book.name }}》
                            </div>
                        </td>
                        <td>{{ book.return }}</td>
                        <td><a href="#" class="inner_btn">续借</a>
                            <a href="#" class="inner_btn">归还</a>
                        </td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            currEmail: '',
            actualEmail: 'example@example.com',
            emailValid: false,
            isChangePwdWindow: false,
            isChangePwdProtWindow: false,
            borrowed_book: {
                flag: true,
                books: [
                    {
                        name: '西游记',
                        return: '2021.10.1'
                    }
                ]
            }
        }
    },
    methods: {
        checkEmail: function () {
            if (this.currEmail) {
                if (this.currEmail === this.actualEmail) {
                    this.emailValid = true;
                } else {
                    alert('密保错误，请重新输入！');
                }
            } else {
                alert('请输入密保！');
            }
        },
        showChangePwdWindow: function () {
            this.isChangePwdWindow = true;
        },
        shutChangePwdWindow: function () {
            this.isChangePwdWindow = false;
        },
        changePwd: function () {
            if (!this.emailValid) {
                alert('请先验证邮箱！');
            } else {
                //修改密码的部分代码
                alert('密码成功更改！');
            }
        },
        showChangePwdProtWindow: function () {
            this.isChangePwdProtWindow = true;
        },
        shutChangePwdProtWindow: function () {
            this.isChangePwdProtWindow = false;
        },
        changePwdProt: function () {
            if (!this.emailValid) {
                alert('请先验证邮箱！');
            } else {
                //修改密保的部分代码
                alert('密保已成功更改！');
            }
        },
    }
}
</script>

<style scoped>
.emailInvalid {
    color: rgba(255, 0, 0, 0.598);
    text-align: center;
}
.emailValid {
    color: rgba(0, 128, 0, 0.557);
    text-align: center;
}
</style>