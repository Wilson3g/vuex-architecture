<template>
    <div>
        <div class="text">
            <h1>Wilson's repositories</h1>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p class="subtitle">
                Jeff Atwood
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                <span>
                    View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                </span>
                </p>
                <p class="card-footer-item">
                <span>
                    Share on <a href="#">Facebook</a>
                </span>
                </p>
            </footer>
        </div>
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
            //    return this.$store.state.home.users
            console.log(this.store.state)
            },
            users() {
                return this.ActionsSetUser()
            }
        }
    }
</script>

<style scoped>
    .card{
        margin: 100px 500px 100px 500px;
    }

    .text{
        text-align: center;
        margin: 100px 150px 50px 150px;
        font-size: 50px;
        border-bottom: 1px solid grey;
    }
</style>