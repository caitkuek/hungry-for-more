<template>
    <div>
        <h2>Hungry For More?</h2>
        <p>Tired of planning groceries? Look no further!!</p>
        <router-link to='/signup'><button>Get started</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
button {
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

button:hover,
button:focus {
  background-color: #6871a1;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #5864A0;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
  text-decoration: none;
}

a {
    text-decoration: none;
}
</style>