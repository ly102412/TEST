<template>
  <div class="animated fadeIn">
      <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>

      <!--工具条-->
  </div>
</template>

<script>
import {getActivityRecord} from '../../api/api'
import NProgress from 'nprogress'
import moment from 'moment'
export default {
  data () {
    return {
      formRecord: {
        phone_number: '',
        start_time: '',
        end_time: ''
      },
      id: '',
      recordList: [],
      rows: 0,
      page_number: 1,
      page_size: 10,
      listloading: false,
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
</style>
