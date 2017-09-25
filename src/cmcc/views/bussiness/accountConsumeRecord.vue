<template lang="html">
  <div class="animated fadeIn">
    <el-table :data="recordList" highlight-current-row v-loading="listloading">
      <el-table-column prop="id" label="活动编号"></el-table-column>
      <el-table-column prop="type" label="消耗方式" :formatter="formatType"></el-table-column>
      <el-table-column prop="money" label="金额(元)"></el-table-column>
      <el-table-column prop="scores" label="流量币(M)"></el-table-column>
      <el-table-column prop="coupon_size_100" label="100M流量包(个)"></el-table-column>
      <el-table-column prop="coupon_size_500" label="500M流量包(个)"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
      <el-table-column prop="update_time" label="更新时间"></el-table-column>
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
import {getRecordList} from '../../api/api'
import NProgress from 'nprogress'
export default {
  data () {
    return {
      recordList: [],
      rows: 0,
      page_number: 1,
      page_size: 10,
      listloading: false
    }
  },
  methods: {
    // 获取资金消耗记录
    getRecords () {
      let params = {
        page_number: this.page_number,
				page_size: this.page_size
      }
      this.listloading = true
      NProgress.start()
      getRecordList(params).then((res) => {
        console.log(res)
        this.listloading = false
        NProgress.done()
        if(res.status === 0){
          this.recordList = res.data.list
          this.rows = res.data.rows
        }
      })
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
      switch (row.type) {
        case 1:
          type = '发布消耗'
        break;
        case 2:
          type = '结束退还'
        break;
        default:
          type = '过期清零'
        break;
      }
      return type
    }
  },
  mounted () {
    this.getRecords()
  }
}
</script>

<style lang="css">
</style>
