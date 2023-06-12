<template>
    <button class="btn__logout" @click="logout">Log Out</button>
</template>
  
<script>
export default {
    methods: {
        async logout() {
            try{
            await this.$axios.$post('/api/users/logout', {}, {
                headers: {
                    Authorization: `${this.$auth.getToken('local')}`
            }
            });
            await this.$auth.logout();
            this.$router.push('/');
        } catch (error){
            console.log("Failed to log out:", error);
        }
    }}
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