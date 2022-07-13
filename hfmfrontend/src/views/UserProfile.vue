<template>
  <div class="userpage">
    <h2>{{users.username}}'s page</h2>
    <div>
      <h3>{{users.username}}'s plans</h3>
      <p>you don't have any plans LOL</p>
    </div>
    <div>
        <h3>{{users.username}}'s delivery address</h3>
        <p>Street name: {{users.street_name}}</p>
        <p>Unit no.: #{{users.unit_no}}</p>
        <p>Postal code: {{users.postal_code}}</p>
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
        users: []
    };
  },
  async created() {
      const id = this.$route.params.id
      console.log("created", id)
      await axios
      .get(`http://localhost:8000/users/${id}`)
      .then((response) => (this.users = response.data))
      console.log(this.users)
  },
}
</script>
