<template>
    <button class="btn__logout" @click="logout">Log Out</button>
</template>
  
<script>
export default {
    methods: {
        async logout() {
            try {
                await this.$auth.logout();
                await this.$router.push('/cms/login');
            } catch (error) {
                console.log("Failed to log out:", error.message);
            }
        }
    }
}

</script>
  
<style scoped>
.btn__logout {
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    background-color: red;
    font-weight: 700;
}
</style>