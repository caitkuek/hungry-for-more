<template>
    <header>
        <router-link to="/">
            <img id="logo" src="https://i.imgur.com/iFP0YlT.png" alt="logo" />
        </router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/plans">plans</router-link>
        <router-link to="/login">login</router-link>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>

<style>
#logo {
    max-width: 200px;
}
</style>