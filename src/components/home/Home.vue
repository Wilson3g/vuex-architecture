<template>
    <div>
        <p>{{ this.showUser() }}</p>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        created() {
            
        },
        methods: {
            ...mapActions('home' ,['ActionsSetUser']),
            showUser() {
               return this.$store.state.home.users
            }
        }
    }
</script>

<style scoped>
    
</style>