<template>
    <div :class="['adaptive-nav', {visible: navVisible}]">
        <resize-observer @notify="handleResize"/>
        <div ref="adaptive_nav_list"
             class="adaptive-nav-list"
             :style="getStyleNavList"
        >
            <template v-for="(item, index, key) in sortNavData.navList">
                <div :key="key" v-html="item.outerHTML" class="wrap-item"></div>
            </template>
            <div class="wrapper-adaptive_nav" :style="styleOption">
                <div ref="adaptive_nav_btn"
                     class="adaptive-nav-btn"
                     @click="navBtnClick()"
                >
                    <slot name="iconBtn">
                        <img src="../assets/btnMenu.svg" alt="">
                    </slot>
                </div>
                <div ref="adaptive_nav_sublist" :class="['adaptive-nav-sublist', {active: navSubMenu}]">
                    <div v-for="(item, index, key) in sortNavData.navSubList" :key="key" v-html="item.outerHTML"></div>
                </div>
            </div>
        </div>
        <div ref="adaptive_nav_template"
             class="adaptive-nav-template"
             :style="getStyleNavTemplate"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import debounce from 'debounce'

    export default {
        name: "AdaptiveNav",
        props: {
            options: {
                type: Object,
                default: function () {
                    return {
                        distanceBetweenElements: 10
                    }
                }
            }
        },
        data() {
            return {
                navList: undefined,
                navSublist: undefined,
                navTemplate: undefined,
                navBtn: undefined,
                navBtnWidth: undefined,
                navItemActive: undefined,
                navItemActiveWidth: 0,
                navTemplateItems: Array,
                sortNavData: Object,
                navVisible: false,
                styleOption: {
                    opacity: '0',
                    pointerEvents: 'none',
                },
                navSubMenu: false,
                flag: false
            }
        },
        computed: {
            getOptions() {
                return {
                    distanceBetweenElements: this.options.distanceBetweenElements || '10px',
                    positionNav: this.options.positionNav || 'center',
                }
            },
            getStyleNavList() {
                return {
                    gap: this.getOptions.distanceBetweenElements,
                    justifyContent: this.getOptions.positionNav
                }
            },
            getStyleNavTemplate() {
                return {
                    gap: this.getOptions.distanceBetweenElements,
                }
            }
        },
        methods: {
            navBtnClick() {
                this.navSubMenu = !this.navSubMenu
            },
            handleResize() {
                // const t0 = performance.now();
                debounce(this.sortListItems, 50)(this.navList, this.navTemplateItems)
                // const t1 = performance.now();
                // console.log(t1 - t0, 'milliseconds');
            },
            sortListItems(navTemplate, navListItems) {
                const listRight = Math.floor(navTemplate.getBoundingClientRect().right)
                this.navItemActive = this.navList.querySelector('.active')
                if (this.navItemActive && this.flag) {
                    this.navItemActiveWidth = Math.ceil(this.navItemActive.getBoundingClientRect().width) + parseInt(this.getOptions.distanceBetweenElements)
                } else {
                    this.navItemActiveWidth = 0
                }

                let navList = []
                let navSubList = []

                navListItems.forEach((e) => {
                    const itemRight = Math.floor(e.getBoundingClientRect().right)
                    if (itemRight < listRight - (this.navBtnWidth + this.navItemActiveWidth)) {
                        this.flag = false
                        navList.push(e)
                    } else {
                        if (e.classList.contains('active')) {
                            this.flag = true
                            navList.push(e)
                        } else {
                            navSubList.push(e)
                        }
                    }
                })
                this.sortNavData = {navList, navSubList}
                if (navSubList.length > 0) {
                    this.styleOption.opacity = 1
                    this.styleOption.pointerEvents = 'auto'
                } else {
                    this.styleOption.opacity = 0
                    this.styleOption.pointerEvents = 'none'
                }
                setTimeout(() => {
                    this.navVisible = true
                }, 50)
            }
        },
        mounted() {
            this.navList = this.$refs['adaptive_nav_list']
            this.navSublist = this.$refs['adaptive_nav_sublist']
            this.navTemplate = this.$refs['adaptive_nav_template']
            this.navBtn = this.$refs['adaptive_nav_btn']

            this.navTemplateItems = this.navTemplate.childNodes
            debounce(this.sortListItems, 50)(this.navList, this.navTemplateItems)
            this.navBtnWidth = Math.round(this.navBtn.getBoundingClientRect().width) + parseInt(this.getOptions.distanceBetweenElements)
            window.addEventListener('click', (e) => {
                if (this.navList.contains(e.target)) {
                    this.navSubMenu = true
                } else {
                    this.navSubMenu = false
                }
            });
        }
    }
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    .adaptive-nav {
        border-top: none;
        position: relative;
        width: 100%;
        opacity: 1;
        padding: 0 1rem;

        &.visible {
            opacity: 1;
        }

        .adaptive-nav-list {
            display: flex;
            gap: 10px;
            padding: 10px 0;
            width: 100%;

            .adaptive-nav-item {
                padding: .2rem 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                white-space: nowrap;
                display: flex;
                gap: .5rem;
                align-items: center;

                &.active {
                    background: darkcyan;
                    color: white;
                }
            }

            .wrapper-adaptive_nav {
                position: relative;
                display: flex;
                align-items: center;
                align-content: center;
                justify-content: center;

                .adaptive-nav-btn {
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    font-size: 1.7rem;
                    cursor: pointer;

                    img {
                        width: 1rem;
                        height: auto;
                        display: flex;
                        align-items: center;
                        align-content: center;
                        justify-content: center;
                    }
                }

                .adaptive-nav-sublist {
                    position: absolute;
                    top: calc(100% + 10px);
                    right: 0;
                    display: none;

                    &.active {
                        display: block;
                    }
                }
            }

        }

        .adaptive-nav-template {
            overflow: hidden;
            height: 0;
            position: absolute;
            right: 0;
            left: 0;
            display: flex;
            gap: 10px;

            .adaptive-nav-item {
                padding: .2rem 1rem;
                border: 1px solid #ccc;
                white-space: nowrap;
                display: flex;
                gap: .5rem;
                align-items: center;
            }
        }
    }
</style>