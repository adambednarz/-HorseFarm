<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-avatar class=" q-mr-md">
          <img src="statics/horse.svg" />
        </q-avatar>
        Equistro
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex';
import LoginRegister from 'src/components/Auth/LoginRegister.vue';

export default {
  components: {
    // LoginRegister,
  },
  data() {
    return {
      tab: 'login',
    };
  },
  methods: {
    ...mapActions('auth', ['loginUserWithFacebook']),
    loginWithFacebok() {
      console.log('loginWithFacebok');
      this.loginUserWithFacebook();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  background-color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 700;
  color: rgb(55, 71, 79);
  padding: 5px 0px 5px 18px;
}
.login-fb-button {
  margin: 40px auto 40px;
  width: auto;
  height: 48px;
  color: rgb(55, 71, 79);
  padding: 0 16px;
  min-width: 48px;
  min-height: auto;
  border-radius: 24px;
  text-decoration: none;
  text-transform: none;
  background-color: #e0e0e0;
}
.facebook-icon {
  padding-right: 10px;
  height: 16px;
  width: auto;
  fill: rgb(70, 89, 147);
}

.slogan {
  margin: 40px auto 32px auto;
  color: rgb(55, 71, 79);
  font-size: 34px;
  text-align: center;
  line-height: 1.167;
  margin-bottom: 20px;
}
.decoration {
  width: 90%;
  height: 2px;
  text-align: center;
  background: rgb(231, 233, 239);
  margin: 40px auto 36px;
}
.decoration span {
  color: rgb(46, 56, 77);
  font-size: 14px;
  position: relative;
  top: -12px;
  background: rgb(255, 255, 255);
  padding: 0px 20px;
}
</style>
