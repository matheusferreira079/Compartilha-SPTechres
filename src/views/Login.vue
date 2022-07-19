<template>
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <main class="login">
        <div class="login__container">
            <img class="login__logo" src="../assets/logo.png" alt="">
            <form action="" class="login__form">
                <input v-model="form.email" class="login__input" type="email" placeholder="Usuário" autocomplete="off">
                <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                <input v-model="form.senha" class="login__input" type="password" placeholder="Senha">
                <i class="fa fa-eye fa-lg fa-fw" aria-hidden="true"></i>
                <input type="submit" @click.prevent="login()" class="login__submit" value="Entrar">
            </form>
        </div>
    </main>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: 'FormLogin',
    data() {
        return {
            form: {
                email: "",
                senha: ""
            }
        }
    },
    methods: {
        login() {
            if (this.form.email === 'admin@admin.com' && this.form.senha === 'admin') {
                Swal.fire({
                    title: "Bem-vindo de volta!",
                    icon: 'success',
                    iconColor: 'white',
                    toast: true,
                    position: "bottom-right",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'colored-toast'
                    }
                });
                this.form.email = "";
                this.form.senha = "";
                this.$router.push({name: 'ToList'})
            } else {
                Swal.fire({
                    title: "Usuário e/ou senha inválidos!",
                    icon: 'error',
                    iconColor: 'white',
                    toast: true,
                    position: "bottom-right",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'colored-toast'
                    },
                })
                this.form.email = "";
                this.form.senha = "";
            }
        }
    },
}
</script>

<style>
.login {
    height: 100vh;
    background: url(../assets/banner.png) center no-repeat fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login__container {
    min-height: 400px;
    width: 350px;
    box-sizing: border-box;
    padding: 32px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login__logo {
    width: 90%;
    margin-bottom: 20px;
}

.login__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login__input {
    height: 48px;
    width: 90%;
    padding-left: 20px;
    border: none;
    border-radius: 40px;
    margin-bottom: 35px;
    text-decoration: none;
}

.login__submit {
    height: 48px;
    width: 90%;
    /* background: transparent; */
    background: rgba(255, 255, 255, 0.2);
    background-size: 200%;
    margin-bottom: 32px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #FFFFFF;
    border-radius: 40px;
    cursor: pointer;
    text-align: center;
}

.fa {
    position: absolute;
    color: #aaa9a9;
    margin-left: 14%;
}

.fa-user {
    margin-bottom: 13%;

}

.fa-eye {
    margin-bottom: 2%;
}

.colored-toast.swal2-icon-success {
  background-color: #99e26f !important;
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}

.colored-toast .swal2-title {
  color: white;
}
</style>