<template>
  <div class="form-container">
    <div class="row">
      <p class="slogan">Rozpocznij już dziś!</p>
      <q-btn class="login-fb-button" @click="loginWithFacebok()">
        <img class="facebook-icon" src="statics/facebook.svg" />
        Zaloguj się przez Facebook</q-btn
      >
    </div>

    <div class="decoration">
      <span>lub tradycyjnie</span>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="row q-mb-md">
        <q-input
          ref="email"
          outlined
          class="col"
          v-model="formData.email"
          label="Email"
          lazy-rules
          :rules="[val => isValidEmail(val) || 'Email jest niepoprawny']"
        />
      </div>
      <div class="row q-mb-sm">
        <q-input
          ref="password"
          class="col"
          outlined
          type="password"
          v-model="formData.password"
          label="Password"
          lazy-rules
          :rules="[
            val =>
              val.length >= 6 || 'Hasło musi posiadać co najmniej 6 znaków',
          ]"
        />
      </div>
      <div class="row q-mb-lg">
        <q-btn color="primary" type="submit" class="submit-button"
          >Zaloguj</q-btn
        >
      </div>
    </form>
    <div class="decoration">
      <span
        >Nie posiadasz konta?
        <strong>
          <router-link :to="{ name: 'Register' }">
            Zarejestruj się</router-link
          ></strong
        >
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'loginUserWithFacebook']),
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        this.loginUser(this.formData);
      }
    },
    isValidEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    loginWithFacebok() {
      this.loginUserWithFacebook();
    },
  },
};
</script>

<style lang="scss">
.form-container {
  margin: 10px 16px;
}
.login-fb-button {
  margin: 26px auto 32px;
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
  margin: 20px auto 16px auto;
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
