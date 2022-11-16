<template>
    <div id="app">
        <v_nav :navData="navData" :options="options"></v_nav>
    </div>
</template>

<script>
    import v_nav from "@/components/v_nav";

    export default {
        name: 'App',
        data: () => {
            return {
                navData: [
                    {
                        name: "Yandex",
                        active: false
                    },
                    {
                        name: "Google",
                        active: false
                    },
                    {
                        name: "Youtube",
                        active: false
                    },
                    {
                        name: "Bitbucket",
                        active: false
                    },
                    {
                        name: "Facebook",
                        active: false
                    },
                    {
                        name: "Vuetify",
                        active: false
                    },
                    {
                        name: "Jira",
                        active: false
                    },
                    {
                        name: "Call Center",
                        active: true
                    },
                    {
                        name: "Aqueous",
                        active: false
                    },
                    {
                        name: "Rumser",
                        active: false
                    },
                    {
                        name: "Logicall",
                        active: false
                    },
                    {
                        name: "Pycharm",
                        active: false
                    },
                    {
                        name: "Python",
                        active: false
                    },
                ],
                options: {
                    distanceBetweenElements: 10
                }
            }
        },
        components: {
            v_nav
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #app {

    }
</style>
