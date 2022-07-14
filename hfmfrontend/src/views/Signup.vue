<template>
  <div class="signup-page">
    <form @submit="onSubmit" class="signup">
      <h3>Signup</h3>
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
        <h4>Already have an account?
        <router-link id="login-redirect-link" to="/login">
        Login instead!
        </router-link>
        </h4>
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

<style scoped>
.signup-page {
   /* padding-top: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.signup {
    width: 500px;
    border-radius: 8px;
    padding: 20px 40px;
    /* box-shadow: 0 10px 25px rgba(92, 99, 105, .2); */
}

.signup-container {
    position: relative;
    height: 45px;
    width: 90%;
    margin-bottom: 15px;
}

.signup-input {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border: 1px solid #DADCE0;
    border-radius: 7px;
    font-size: 16px;
    padding: 0 20px;
    outline: none;
    background: none;
    z-index: 1;
}

::placeholder {
    color: transparent;
  }

.signup-label {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 0 4px;
    background-color: white;
    color: #DADCE0;
    font-size: 16px;
    transition: 0.5s;
    z-index: 0;
  }

.signup-button {
  align-items: center;
  background-clip: padding-box;
  background-color: #5864A0;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.signup-button:hover {
    background-color: #6871a1;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  transform: translateY(-1px);
}

.signup-input:focus + .signup-label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color: #467599;
  }

.signup-input:focus {
    border: 2px solid #467599;
  }

.signup-input:not(:placeholder-shown)+ .signup-label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
  }

#login-redirect-link {
  color: #2B363D;
  text-decoration: none;
}

#login-redirect-link:hover {
  color: #5864A0;
  text-decoration: underline;
}
</style>
