<template>
  <div class="login">
    <div class="box">
      <div class="field">
        <label for="username">Usermane</label>
        <input type="text" name="username" v-model="userName">
      </div>
      <div class="field">
        <label for="password">Usermane</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="action">
        <button @click="login">Login</button>
      </div>
      <div class="error-msg" v-show="error">
        <p>Usuario o contraseña no validos</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Login',
  
  data: function () {
    return {
      userName: '',
      password: '',
      token: '',
      error: false,
    }
  },
  methods: {
    login () {
      this.axios.post('http://localhost:3000/api/v1/login', {
        username: this.userName,
        password: this.password
      }).then(response => {
        this.token = response.data.token;
        this.$emit('submit', this.token);
      }).catch(error => {
        if (error.response.status === 403) {
          this.error = true;
        }
        console.log(error.response.status);
      })
    }
  }
}
</script>
<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login .box {
  width: 100px;
  height: 100px;
}
</style>