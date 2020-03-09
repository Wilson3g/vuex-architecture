<template>
    <div>
        <div class="text" v-if="results">
            <h1> {{ results[0].owner.login }}´s repositories </h1>
        </div>

        <div class="card" v-for="data_repos in results">
            <div class="card-content">
                <h1 class="title">{{ data_repos.name }}</h1>

                <p v-if="data_repos.description">
                    Description: {{ data_repos.description }}
                </p>
                <p v-else="">
                    Description: No description
                </p>
                
                <p v-if="data_repos.open_issues_count">
                    Description: {{ data_repos.open_issues_count }}
                </p>
                <p v-else="">
                    Description: No issues
                </p>
                
                <p class="subtitle">
                   Stars: {{ data_repos.stargazers_count }}
                </p>

            </div>

            <footer class="card-footer">
                <p class="card-footer-item">
                <span>
                    Language:  {{data_repos.language}}
                </span>
                </p>
                <p class="card-footer-item">
                <span>
                    Size {{ data_repos.size }}KB
                </span>
                </p>
            </footer>

        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
         props: ['results'],
        data: () => ({
            search: ''
        }),
        created() {
        
        },
        methods: {
            ...mapActions('home' ,['ActionsSetUser']),
        }
    }
</script>

<style scoped>
    .card{
        margin: 5% 15% 100px 15%;
    }

    .text{
        text-align: center;
        margin: 100px 150px 50px 150px;
        font-size: 50px;
        border-bottom: 1px solid grey;
    }
</style>