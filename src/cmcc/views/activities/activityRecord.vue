<template lang="html">
  <div class="animated fadeIn">
    <el-col :span="24" class="toolbar">
      <el-form :inline="true" :model="formRecord">
        <el-form-item>
          <el-input placeholder="手机号" v-model="formRecord.phone_number"></el-input>
        </el-form-item>
        <el-form-item>
					<el-date-picker type="date"   placeholder="选择日期" v-model="formRecord.start_time" style="width: 100%;"></el-date-picker>
				</el-form-item>
        <el-form-item>
					<el-date-picker type="date"   placeholder="选择日期" v-model="formRecord.end_time" style="width: 100%;"></el-date-picker>
				</el-form-item>
        <el-form-item>
					<el-button type="primary" @click="getRecords(this.id)">查询</el-button>
				</el-form-item>
      </el-form>
    </el-col>
    <el-table :data="recordList" highlight-current-row v-loading="listloading">
      <el-table-column prop="id" label="中奖用户ID"></el-table-column>
      <el-table-column prop="phone_number" label="手机号码"></el-table-column>
      <el-table-column prop="prize_name" label="奖项"></el-table-column>
      <el-table-column prop="prize_type" label="奖品类型" :formatter="formatPrizeType"></el-table-column>
      <el-table-column prop="prize_denomination" label="奖品"></el-table-column>
      <el-table-column prop="create_time" label="领取时间"></el-table-column>
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
import {getActivityRecord} from '../../api/api'
import NProgress from 'nprogress'
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
      listloading: false
    }
  },
  methods: {
    // 获取中奖记录
    getRecords (id) {
      let params = {
        business_activity_info_id: id,
        page_number: this.page_number,
				page_size: this.page_size,
        phone_number: this.formRecord.phone_number,
        start_time: this.formRecord.start_time,
        end_time: this.formRecord.end_time
      }
      this.listloading = true
      NProgress.start()
      getActivityRecord(params).then((res) => {
        console.log(res)
        this.listloading = false
        NProgress.done()
        if(res.status === 0){
          this.recordList = res.data.list
          this.rows = res.data.rows
        }
      })
    },
    // 设置奖品类型
    formatPrizeType (row, column) {
      let type = ''
      switch (row.prize_type){
        case 1:
          type = '流量币'
        break;
        case 2:
          type = '流量包'
        break;
      }
      return type
    },
    // 分页回调
    handleCurrentChange (val) {
			this.page_number = val;
			this.getRecords(this.id);
		},
  },
  mounted () {
    this.id = this.$route.query.id
    this.getRecords(this.id)
  }
}
</script>

<style lang="css">
</style>
