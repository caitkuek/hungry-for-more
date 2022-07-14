<template>
  <div v-if="edited">
    <button @click="editClick">Edit</button>
    <p>Street name: {{users.street_name}} </p>
    <p>Unit no: #{{users.unit_no}} </p>
    <p>Postal code: {{users.postal_code}} </p>
  </div>
  <div v-else>
    <input v-model="users.street_name" />
    <input v-model="users.unit_no" />
    <input v-model="users.postal_code"/>
    <button @click="updateClick(users.user_id)">Update</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "EditAddress",
  props: ["users"],
  components: {},
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
