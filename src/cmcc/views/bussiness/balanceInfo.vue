<template lang="html">
  <div class="animated fadeIn">
    <el-table :data="balanceInfo" highlight-current-row v-loading="listloading">
      <el-table-column prop="id" label="活动编码"></el-table-column>
      <el-table-column prop="activity_name" label="活动名称"></el-table-column>
      <el-table-column prop="activity_type" label="活动类型" :formatter="formatType"></el-table-column>
      <el-table-column prop="freeze_money" label="活动金额"></el-table-column>
      <el-table-column prop="used_money" label="已使用金额"></el-table-column>
       <el-table-column prop="lock_money" label="锁定金额"></el-table-column>
      <el-table-column prop="start_time" label="锁定开始时间"></el-table-column>
      <el-table-column prop="end_time" label="锁定结束时间"></el-table-column>
      <el-table-column label="奖品数量" width="120">
        <template scope="scope">
            {{scope.row.used_count}}/{{scope.row.prizes_count}}
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
		<el-col :span="24" class="toolbar">
			<!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="rows" style="float:right;">
			</el-pagination>
		</el-col>
  </div>
</template>

<script>
import {getActivityList} from '../../api/api'
import NProgress from 'nprogress'
export default {
  data () {
    return {
      balanceInfo: [],
      rows: 0,
      page_number: 1,
      page_size: 10,
      listloading: false
    }
  },
  methods: {
    goToRecords (id) {
      this.$router.push({path:'activityRecord',query:{'id':id}})
    },
    // 获取活动列表
    getRecords () {
      let params = {
        page_number: this.page_number,
				page_size: this.page_size
      }
      this.listloading = true
      NProgress.start()
      getActivityList(params).then((res) => {
        console.log(res)
        this.listloading = false
        NProgress.done()
        if(res.status === 0){
          this.balanceInfo = res.data.list
          this.rows = res.data.rows
        }
      })
    },
    // 监听操作功能
    handleMenuCommand (command) {
      if (command == 'record'){
        // this.$router.push({path:'activityRecord'})
      }
    },
    // 分页回调
    handleCurrentChange (val) {
			this.page_number = val;
			this.getRecords();
		},
    // 数据格式转换
    // 转换消耗类型
    formatType (row, column) {
      let type = ''
      switch (row.activity_type) {
        case 1:
          type = '大转盘'
        break;
        case 2:
          type = '刮刮卡'
        break;
        default:
          type = '砸金蛋'
        break;
      }
      return type
    },
    formatStatus (row, column) {
      let status = ''
      switch (row.activity_status) {
        case 0:
          status = '未开始'
        break;
        case 1:
          status = '进行中'
        break;
        case 2:
          status = '已结束'
        break;
      }
      return status
    }
  },
  mounted () {
    this.getRecords()
  }
}
</script>

<style lang="css">
</style>
