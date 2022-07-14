<template>
    <button @click="$emit('delete-user', users.user_id)">Delete user</button>
</template>

<script>
export default {
    name: 'DeleteButton',
    props: {
        users: Object,
        
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-user', id)
        },
    }
}
</script>