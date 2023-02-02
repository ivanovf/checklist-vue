<template>
  <header>
    <a href="#" @click="reload">
      <img src="@/assets/logo.png" alt="Logo"/>
    </a>
    <h1><span>Check</span>List</h1>
    <a href="#" @click.prevent="toggleMenu">
      <img src="@/assets/menu.svg" alt="Menu"/>
    </a>
    <div class="menu" v-show="showMenu">
      <ul>
        <li class="menu-item">
          <a href="#">
            Admin Items
          </a>
        </li>
        <li class="menu-item">
          <a href="#">
            Admin Users
          </a>
        </li>
        <li class="menu-item">
          <a href="#" @click="logOut">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    reload() {
      location.reload();
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    logOut() {
      localStorage.removeItem('token');
      this.reload();
    }
  }
}
</script>
<style scoped>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
  }
  img,
  span {
    width: 48px;
  }
  h1 {
    font-size: 1.4rem;
    color: var(--brand-blue);
  }
  h1 span {
    color: var(--brand-green);
  }
  .menu {
    position: absolute;
    right: 10px;
    top: 50px;
    padding: 10px;
    width: 40%;
    box-shadow: -3px 4px 5px #ccc;
    animation: fadeIn 0.5s ease-in both;
  }
  .menu ul {
    list-style: none;
    padding: 0;
  }
  .menu ul li {
    padding: 5px 10px 15px;
    text-align: left;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
