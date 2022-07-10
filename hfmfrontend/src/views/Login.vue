<template>
      <div class="login-form">
        <form class="login">
        <h2>Login</h2>
          <div class="login-container">
            <input
              class="login-input"
              name="username"
              type="text"
              placeholder="Username"
            />
            <label class="login-label" htmlFor="Username">
              Username
            </label>
          </div>
          <div class="login-container">
            <input
              class="login-input"
              name="password"
              type="password"
              placeholder="Password"
            />
            <label class="login-label" htmlFor="Password">
              Password
            </label>
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
export default {
    name: "Login"
}
</script>