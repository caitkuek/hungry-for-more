<template>
  <div v-if="edited">
    <!-- <button @click="editClick">Edit</button> -->
    <svg 
    @click="editClick"
    class="edit"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/>
    </svg>
    <h3>Shipping Address</h3>
    <p>Street name: {{users.street_name}} </p>
    <p>Unit no: #{{users.unit_no}} </p>
    <p>Postal code: {{users.postal_code}} </p>
  </div>
  <div v-else class="edit-form">
    <div class="edit-address-container">
    <h3> Shipping Address </h3>
    <div class="container">
    <p><input v-model="users.street_name" placeholder="Street name" /></p>
    </div>
    <div class="container">
    <p><input v-model="users.unit_no" placeholder="Unit no" /></p>
    </div>
    <div class="container">
    <p><input v-model="users.postal_code" placeholder="Postal code"/></p>
    </div>
    <button @click="updateClick(users.user_id)">Update</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "EditAddress",
  props: ["users"],
  data() {
    return {
      edited: true,
    };
  },
  methods: {
    async editClick() {
      this.edited = !this.edited;
      console.log(this.edited);
    },
    async updateClick(id) {
      const res = await axios
      .get(`http://localhost:8000/login/${id}`) 
      .then((res => this.user = res.data))
      console.log("updateclick", this.user)

      let userToUpd = res
      console.log("userToDelete", userToUpd)
     
      const res2 = await axios
      .put(`http://localhost:8000/users/${id}`, 
      {...userToUpd, street_name: this.users.street_name, unit_no: this.users.unit_no, postal_code: this.users.postal_code})
                const data2 = await res2.data
                this.edited = !this.edited
                console.log(res2.data)
                return data2;
    },
  },
};
</script>

<style scoped>
.edit {
    max-height: 20px;
    float: right;
    margin-right: 35x;
}

.edit-form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.edit-address-container {
    width: 500px;
    border-radius: 8px;
    padding: 20px 40px;
}

.container {
    position: relative;
    height: 45px;
    width: 90%;
    margin-bottom: 15px;
}

input {
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
