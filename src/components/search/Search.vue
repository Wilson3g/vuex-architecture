<template>
    <div>
        <div class="text">
            Search Repositories on Github
        </div>

       <form @submit="submit()">
            <div class="field">
                <div class="control">
                    <input class="input" v-model="search" placeholder="Github's username..." type="text">
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Search</button>
                </div>
            </div>
        </form> 

        <div v-if="search">
            <results :results="this.results" />
        </div>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import results from '@/components/home/Home'

    export default {
        components: {
            results
        },
        data: () => ({
            search: '',
            results: []
        }),
        methods: {
            ...mapActions('search', ['ActionsSearch']),        
            async submit() {
                await this.ActionsSearch(this.search)
                this.results = this.$store.state.search.search.body
            },
        }
    }
</script>

<style scope="">
    form{
        margin: 5% 15% 5% 15%;
    }
    .button{
        margin: 0 auto;
    }
    .text{
        text-align: center;
        font-size: 25px;
        margin-top: 100px;
    }
</style>