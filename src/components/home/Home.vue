<template>
    <div>
        <p>{{ this.showUser() }}</p>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data: () => ({
            search: ''
        }),
        created() {
            this.users()
        },
        methods: {
            ...mapActions('home' ,['ActionsSetUser']),
            showUser() {
               return this.$store.state.home.users
            },
            users() {
                return this.ActionsSetUser()
            }
        }
    }
</script>

<style scoped>
    
</style>