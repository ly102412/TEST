<template lang="html">
  <div class="animated fadeIn">
    <el-table :data="orderList" highlight-current-row v-loading="listloading">
      <el-table-column prop="order_id" label="订单编号"></el-table-column>
      <el-table-column prop="money" label="商家ID"></el-table-column>
      <el-table-column prop="flow_money" label="流量消费金额(元)"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
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
import {getOrderList} from '../../api/api'
import NProgress from 'nprogress'
export default {
  data () {
    return {
      orderList: [],
      rows: 0,
      page_number: 1,
      page_size: 10,
      listloading: false
    }
  },
  methods: {
    // 获取资金采购记录
    getOrder () {
      let params = {
        page_number: this.page_number,
				page_size: this.page_size
      }
      this.listloading = true
      NProgress.start()
      getOrderList(params).then((res) => {
        console.log(res)
        this.listloading = false
        NProgress.done()
        if(res.status === 0){
          this.orderList = res.data.list
          this.rows = res.data.rows
        }
      })
    },
    handleCurrentChange (val) {
			this.page_number = val;
			this.getOrder();
		},
  },
  mounted () {
    this.getOrder()
  }
}
</script>

<style lang="css">
</style>
