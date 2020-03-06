<template>
    <div>
       <form @submit="submit()">
            <div class="field">
                <div class="control">
                    <input class="input" v-model="search" placeholder="Search..." type="text">
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Search</button>
                </div>
            </div>
        </form> 
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data: () => ({
            search: ''
        }),
        methods: {
            ...mapActions('search', ['ActionsSearch']),        
            submit() {
                this.ActionsSearch(this.search).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scope="">
    form{
        margin: 15%;
    }
    .button{
        margin: 0 auto;
    }
</style>