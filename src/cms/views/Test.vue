<template>
    <div>
        <ul>
            <li v-for="(item, index) in chItems" @click="">
                <label>{{item.text}}</label>
                <input type="checkbox" :value="index" v-model="checkedNames">
            </li>
        </ul>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default{
        components: {},
        mounted() {
            this.init()
        },
        data() {
            return {
                chItems:[
                    { start: '00',end:'24', text: '全天时段(00:00~24:00)'},
                    { start: '00',end:'06', text: '凌晨时段(00:00~06:00)'},
                    { start: '06',end:'08', text: '早晨时段(06:00~08:00)'},
                    { start: '08',end:'12', text: '上午时段(08:00~12:00)'},
                    { start: '12',end:'13', text: '上午时段(12:00~13:00)'},
                    { start: '13',end:'17', text: '下午时段(13:00~17:00)'},
                    { start: '17',end:'19', text: '傍晚时段(17:00~19:00)'},
                    { start: '19',end:'22', text: '黄金时段(19:00~22:00)'},
                    { start: '22',end:'24', text: '后黄金时段(22:00~24:00)'},
                ],
                checkedNames:[],
            }
        },
        methods: {
            init () {

            }
        }
    }
</script>

<style lang="less" scoped>

</style>
