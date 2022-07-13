<template>
  <div class="userpage">
    <h2>username's page</h2>
    <div>
      <h3>your plans</h3>
      you don't have any plans
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfile",
  data() {
    return {
      loading: false,
      user: null,
      error: null,
    };
  },
//   created() {
//     this.$watch(
//       () => this.$route.params,
//       () => {
//         this.fetchData();
//       },
//       { immediate: true }
//     );
//   },
//   methods: {
//     async fetchData() {
//       this.error = this.user = null;
//       this.loading - true;
//       await axios.get(this.$route.params.id, (err, users) => {
//         this.loading = false;
//         if (err) {
//           this.error = err.toString();
//         } else {
//           this.user = user;
//         }
//       });
//     },
//   },
};
</script>
