<template>
  <Suspense>
    <template #default>
      <Login @submit="onLogin" v-if="!token"/>
      <Home v-else/>
    </template>
    <template #fallback>
      <SplashScreen/>
    </template>
  </Suspense>
</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue";

import { defineAsyncComponent } from "vue";
import Home from "./components/Home.vue";

export default {
  name: 'App',
  components: {
    SplashScreen,
    Login: defineAsyncComponent(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(import("./components/Login.vue"));
            }, 2500);
        });
    }),
    Home: Home
  },
  methods: {
    onLogin: function (token) {
      this.token = token;
      localStorage.setItem('token', token);
    }
  },
  data: function () {
    return {
      token: null
    }
  },
  mounted() {
    this.token = localStorage.getItem('token') ?? null; 
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}
</style>
