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
        <p>
            Street name: {{users.street_name}} 
            <button>Edit</button>
        </p>
        <p>
            Unit no: #{{users.unit_no}} 
            <button>Edit</button>
        </p>
        <p>
            Postal code: {{users.postal_code}} 
            <button>Edit</button>
        </p>
    </div>
    <div>
        I am tired
        <button>I quit!</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfile",
  props: {
      id: {type: Number, required: true},
  },
  data() {
    return {
        users: [],
        login: [],
    };
  },
  methods: {
  async created() {
      const id = this.$route.params.id
      console.log("created", id)
      await axios
      .get(`http://localhost:8000/login/${id}`)
      .then((response) => (this.users = response.data))
      console.log(this.users)
    },
    async deleteUser(id) {
        if(confirm('are you sure? :(')) {
            const res = await axios
            .delete(`http://localhost:8000/users/${id}`)
            
        }
    }
  }
}
</script>
