<template>
  <div class="userpage">
    <h2>{{users.username}}'s page</h2>
    <div>
      <h3>{{users.username}}'s plans</h3>
      <p>you don't have any plans LOL</p>
    </div>
    <div>
        <h3>{{users.username}}'s delivery address</h3>
        <p>
            Street name: {{users.street_name}} 
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </p>
        <p>
            Unit no.: #{{users.unit_no}} 
            <i class="fa-solid fa-pen-to-square"></i>
        </p>
        <p>
            Postal code: {{users.postal_code}} 
            <i class="fa-light fa-pen"></i>
        </p>
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
  async created() {
      const id = this.$route.params.id
      console.log("created", id)
      await axios
      .get(`http://localhost:8000/login/${id}`)
      .then((response) => (this.users = response.data))
      console.log(this.users)

    //   this.login = await this.getLogin();
  },
}
</script>
