<template lang="html">
  <div class="animated fadeIn">
    <el-table :data="activityList" highlight-current-row v-loading="listloading">
      <el-table-column prop="id" label="活动编号" fixed width="120"></el-table-column>
      <el-table-column prop="activity_name" label="活动标题" width="120"></el-table-column>
      <el-table-column prop="activity_desc" label="活动描述" width="150"></el-table-column>
      <el-table-column prop="activity_type" label="活动类型" :formatter="formatType" width="120"></el-table-column>
      <el-table-column prop="start_time" label="活动开始时间" width="120"></el-table-column>
      <el-table-column prop="end_time" label="活动结束时间" width="120"></el-table-column>
      <el-table-column prop="activity_status" label="活动状态" :formatter="formatStatus" width="120"></el-table-column>
      <el-table-column prop="activity_platform" label="活动平台" width="120"></el-table-column>
      <el-table-column label="奖品数量" width="120">
        <template scope="scope">
            {{scope.row.used_count}}/{{scope.row.prizes_count}}
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间"  width="120"></el-table-column>
      <el-table-column label="操作" width="230"  fixed="right">
				<template scope="scope">
          <el-button size="small" icon="edit" type="warning" @click="handleEdit(scope.row.id)"></el-button>
          <el-button size="small" icon="warning" type="danger" @click="handleEdit(scope.row.id)"></el-button>
          <el-button size="small" icon="menu" type="Blue" @click="handleEdit(scope.row.id)"></el-button>
          <el-dropdown trigger="click" @command="handleMenuCommand">
            <el-button type="small">
             操作<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="del">删除</el-dropdown-item>
              <el-dropdown-item><span @click="goToRecords(scope.row.id)">查看中奖记录</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
      activityList: [],
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
          this.activityList = res.data.list
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
          type = '过期清零'
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
