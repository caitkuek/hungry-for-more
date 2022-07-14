<template>
  <div>
      <DeleteButton :users='users' @delete-user="$emit('delete-user', users.user_id)" />
</div>
</template>

<script>
import DeleteButton from './DeleteButton'
export default {
  name: "Delete",
  props: {
      users: Object
  },
  components: {
      DeleteButton,
  },
  emits: ['delete-user']
};
</script>
