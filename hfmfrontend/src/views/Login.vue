<template>
  <div @submit="onSubmit" class="login-form">
    <form class="login">
      <h2>Login</h2>
      <div class="login-container">
        <input
          class="login-input"
          type="text"
          v-model="username"
          name="username"
          placeholder="Username"
        />
        <label class="login-label" htmlFor="Username"> Username </label>
      </div>
      <div class="login-container">
        <input
          class="login-input"
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
        />
        <label class="login-label" htmlFor="Password"> Password </label>
      </div>
      <button class="login-button">Login</button>
      <p id="signup-redirect">
        Don't have an account?
        <router-link id="signup-redirect-link" to="/signup">
          Sign up!
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: null,
      success: false
    };
  },
  methods: {
   async onSubmit(e) {
      e.preventDefault();

  //     try {
  //       const body = { username, email }
  //       await axios
  //       .post('http://localhost:8000/login', { body })
  //     }
  //     await router.push('/')
  // } catch (error) {
  //   console.log(error)
  // }
      const body = {
        username: this.username,
        password: this.password,
      };

      this.success = false;
      this.error = null;

      const res = await axios
      .post('http://localhost:8000/login', body)
      .then(res => res.data.body);

        this.success = true;
        // this.error = err.message;
      if (this.success === true) {
        this.$router.push({path: '/' })
      }
    },
  },
};
</script>
