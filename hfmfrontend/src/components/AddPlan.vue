<template>
    <div v-if="login">
    <button @click="addPlan(plans.plan_id)">Add to Plan :)</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddPlan',
    props: ["plans"],
    data() {
        return {
            login: true
        }
    },
//   methods: {
//     async addPlan(id) {
//         // console.log(id)
//       const res = await axios
//       .get(`http://localhost:8000/login/${id}`) 
//       .then((res => this.user = res.data))
//       console.log("updateclick", this.user)

//       let addPlanToUser = res
//       console.log("userToDelete", addPlanToUser)
     
//       const res2 = await axios
//       .put(`http://localhost:8000/users/${id}`, 
//       {...addPlanToUser, plan_id: this.users.plan_id})
//                 const data2 = await res2.data
//                 console.log(res2.data)
//                 return data2;
//     }
//   },
}
</script>