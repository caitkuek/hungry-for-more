<template>
  <div @submit="onSubmit" class="login-page">
    <form class="login">
      <h3>Login</h3>
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
      <h4 id="signup-redirect">
        Don't have an account?
        <router-link id="signup-redirect-link" to="/signup">
          Sign up!
        </router-link>
      </h4>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  // props: {
  //   id: {type: Number, required: true},
  // },
  data() {
    return {
      username: "",
      password: "",
      error: null,
      success: false,
      users: [],
    };
  },
  methods: {
   async onSubmit(e) {
      e.preventDefault();
      const body = {
        username: this.username,
        password: this.password,
      };

      this.success = false;
      this.error = null;

      const res = await axios
      .post('http://localhost:8000/login', body)
      .then((res) => (this.users = res.data))
        
        this.success = true;
        console.log("login hi", res.data.user_id )

      if (this.success === true) {
        this.$router.push({ name: 'UserProfile', params: { id: res.data.user_id } })
        //* alt route
        // this.$router.push({ path: `/users/${res.data.user_id}` }) 
    }
  },
},
};
</script>

<style scoped>
.login-page {
   /* padding-top: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* .login-form {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
} */

.login {
    width: 500px;
    border-radius: 8px;
    padding: 20px 40px;
    /* box-shadow: 0 10px 25px rgba(92, 99, 105, .2); */
}

.login-container {
    position: relative;
    height: 45px;
    width: 90%;
    margin-bottom: 15px;
}

.login-input {
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

.login-label {
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

.login-button {
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

.login-button:hover {
    background-color: #6871a1;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  transform: translateY(-1px);
}

.login-input:focus + .login-label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color: #467599;
  }

.login-input:focus {
    border: 2px solid #467599;
  }

.login-input:not(:placeholder-shown)+ .login-label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
  }

#signup-redirect-link {
  color: #2B363D;
  text-decoration: none;
}

#signup-redirect-link:hover {
  color: #5864A0;
  text-decoration: underline;
}
</style>
