<template>
  <div class="userpage">
    <h2>Your Account Details</h2>
    <div class="user-header">
      <div class="username-div">
      <h3>
        Username
        </h3> 
      <p>: {{users.username}}</p>
      </div>
      <div class="email-div">
      <h3>Email</h3> 
      <p>: {{users.email}}</p>
      </div>
    </div>
    <!-- <div>
      <h3>{{users.username}}'s plans</h3>
      <p>you don't have any plans LOL</p>
      <router-link to="/plans"><button>add plans</button></router-link>
    </div> -->
    <div>
        <EditAddress :users="users" :key="users.user_id"/>
    </div>
    <div>
        <Delete @delete-user="deleteUser" :users="users" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Delete from "../components/Delete"
import EditAddress from "../components/EditAddress"

export default {
  name: "UserProfile",
  props: {
      id: {type: Number, required: true},
  },
  components: {
      Delete,
      EditAddress,
  },
  data() {
    return {
        users: [],
    };
  },
  async created() {
      const id = this.$route.params.id
      console.log("created", id)
      await axios
      .get(`http://localhost:8000/login/${id}`)
      .then((response) => (this.users = response.data))
      console.log(this.users)
    },
    methods: {
    deleteUser(id) {
      if (confirm("are you sure? :(")) {
        const res = axios
        .delete(`http://localhost:8000/users/${id}`)
        .then(res => console.log(res))
        // .then((res) ? (this.users = this.users.filter((user) => user.user_id !== id)) : alert('error deleting'))
        this.$router.push({path: '/'})
      }
    },
  },
}
</script>

<style scoped>
.user-header {
  /* background-color: #99AFB5; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.username-div, .email-div {
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


</style>
