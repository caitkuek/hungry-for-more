<template>
  <div class="userpage">
    <h2>My account</h2>
    <div>
      <h3>{{users.username}}'s plans</h3>
      <p>you don't have any plans LOL</p>
      <router-link to="/plans"><button>add plans</button></router-link>
    </div>
    <div>
        <h3>{{users.username}}'s delivery address</h3>
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
    async editName(id) {
      const res = await axios
      .put(`http://localhost:8000/users/${id}`)
      then(res => this.users = res.data)
    },
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
