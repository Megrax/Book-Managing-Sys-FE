<template>
    <div class="wrapper">
        <form action="">
            <dl class="admin_login">
                <dt>
                    <strong>图书管理系统</strong>
                    <em>Book Management System</em>
                </dt>
                <dd class="user_icon">
                    <input type="text" placeholder="账号" class="login_txtbx" v-model="uname" required />
                </dd>
                <dd class="pwd_icon">
                    <input type="password" placeholder="密码" class="login_txtbx" v-model="currPwd" @keyup.enter="loginCheck" required />
                </dd>
                <dd>
                    <input type="button" value="立即登陆" class="submit_btn" v-on:click="loginCheck" />
                </dd>
            </dl>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uname: '',
            currPwd: '',
            actualPwd: '654321$',
            isAdmin: false
        }
    },
    methods: {
        loginCheck(){
            let lurl = this.globalUrl+"/login"
            this.axios({
                url:lurl,
                method:'get',
                params:{
                    userName:this.uname,
                    password:this.currPwd
                }
            }).then(res=>{
                console.log(res.data)
                if (res.data.status===200){
                    this.currPwd = res.data.password
                    localStorage.setItem('login', this.uname);
                    this.$router.push({ path: '/library' }).catch(() => { });
                }else if (res.data.status===201){
                    localStorage.setItem('admin', 'y2lno20nimdasis11iht' + this.uname);
                    this.$router.push({ path: '/admin' }).catch(() => { });
                }else{
                    alert("账号密码有误")
                }
            })
        }
    },
    // created: function () {
    //     if (this.$cookies.isKey('login')) {
    //         if (this.$cookies.isKey('admin')) {
    //             this.$router.push({ path: '/admin' }).catch(() => { });
    //         } else {
    //             this.$router.push({ path: '/library' }).catch(() => { });
    //         }
    //     }
    // }
}
</script>

<style scoped>
.wrapper {
    height: 100%;
    background: #16a0848a;
    overflow: hidden;
}

dl {
    transition: all 0.5s;
}

dl:hover {
    box-shadow: 0px 3px 24px -1px #0d957a;
}

.wrapper dl dt {
    color: snow;
    font-size: 23px;
}

canvas {
    z-index: -1;
    position: absolute;
}
</style>