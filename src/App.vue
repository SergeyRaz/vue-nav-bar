<template>
    <div id="app">
        <v_nav :navData="navData" :options="options">
            <div class="adaptive-nav-item" v-for="(item, index, key) in navData" :key="key">
                <div>{{item.name}}</div>
                <img src="https://cdn.onlinewebfonts.com/svg/download_232509.png" alt="">
            </div>
<!--            <template v-slot:iconBtn>≡</template>-->
        </v_nav>
        <v_nav :options="options">
            <div class="adaptive-nav-item" v-for="(item, index, key) in 10" :key="key">
                <div>Item - {{item}}</div>
            </div>
        </v_nav>
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
                    distanceBetweenElements: '5px', // px
                    positionNav: 'center' // left / right / center
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
img{
    width: 20px;
}
    #app {

    }
</style>
