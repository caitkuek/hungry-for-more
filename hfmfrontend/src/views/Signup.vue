<template>
  <div>
    <form @submit="onSubmit" class="signup">
      <h2>Signup</h2>
      <div class="signup-container">
        <input
          required
          class="signup-input"
          type="text"
          v-model="username"
          name="username"
          placeholder="Username"
        />
        <label class="signup-label" htmlFor="username">Username</label>
      </div>
      <div class="signup-container">
        <input
          required
          class="signup-input"
          v-model="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <label class="signup-label" htmlFor="password">Password</label>
      </div>
      <div class="signup-container">
        <input
          required
          class="signup-input"
          v-model="email"
          name="email"
          placeholder="Email"
        />
        <label class="signup-label" htmlFor="email">Email</label>
      </div>
      <div class="signup-container">
        <input
          class="signup-input"
          v-model="street_name"
          name="street_name"
          placeholder="Street Name"
        />
        <label class="signup-label" htmlFor="street-name">Street Name</label>
      </div>
      <div class="signup-container">
        <input
          class="signup-input"
          v-model="unit_no"
          name="unit_no"
          placeholder="Unit No."
        />
        <label class="signup-label" htmlFor="unit_no">Unit No.</label>
      </div>
        <div class="signup-container">
        <input
          class="signup-input"
          v-model="postal_code"
          name="postal_code"
          placeholder="Postal Code"
        />
        <label class="signup-label" htmlFor="postal_code">Postal Code</label>
      </div>
      <button class="signup-button">Create an account!</button>
      <div class="login-redirect">
        <h4>Already have an account?</h4>
        <router-link id="login-redirect-link" to="/login">
          <button class="login-redirect-button">Login instead!</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Signup",
  data() {
      return {
          username: '',
          password: '',
          email: '',
          street_name: '',
          unit_no: '',
          postal_code: '',
          error: null,
          success: false
      };
  },
  methods: {
      async onSubmit(e) {
          e.preventDefault();
          const body = {
            username: this.username,
            password: this.password,
            email: this.email,
            street_name: this.street_name,
            unit_no: this.unit_no,
            postal_code: this.postal_code
          };

          this.success = false;
          this.error = null;

          const res = await axios
          .post('http://localhost:8000/signup', body)
          .then(res => res.data.body);

          this.success = true;

          if (this.success === true) {
            this.$router.push({path: '/'})
          }
      }
  }
};
</script>
