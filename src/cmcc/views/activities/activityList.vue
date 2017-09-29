<template lang="html">
  <div class="animated fadeIn">
    <el-table :data="activityList" highlight-current-row v-loading="listloading">
      <!-- <el-table-column prop="id" label="活动编号" fixed width="120"></el-table-column> -->
      <el-table-column
      label=""
      width="60" fixed>
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
            <div v-html="scope.row.qccode_url" class="bigerweima"></div>
            <p class="info">微信扫二维码预览</p>
          <div slot="reference" class="name-wrapper">
            <div class="erweima" style=""></div>
          </div>
        </el-popover>
      </template>
    </el-table-column>
      <el-table-column prop="activity_name" label="活动标题" width="120"></el-table-column>
       <el-table-column prop="code" label="活动code" width="350"></el-table-column>
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
      <el-table-column label="操作" width="240"  fixed="right">
				<template scope="scope">
          <el-tooltip class="item" effect="dark" content="发布活动" placement="top" v-if="scope.row.activity_status == 0">
            <el-button :disabled="scope.row.activity_status == 1" size="small" icon="upload2" type="success" @click="handleRlease(scope.row.code)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="结束活动" placement="top" v-if="scope.row.activity_status == 1">
            <el-button size="small" icon="warning" type="primay" @click="handleEnd(scope.row.code)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="复制链接" placement="top">
            <el-button size="small" type="primary" icon="share" @click="handleCopy(scope.row.link)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="编辑活动" placement="top" v-if="scope.row.activity_status != 2">
            <el-button size="small" icon="edit" type="warning" @click="handleEdit(scope.row.code)"></el-button>
          </el-tooltip>
          <el-dropdown trigger="click" @command="handleMenuCommand">
            <el-button type="small">
             操作<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click="goToRecords(scope.row.id)">查看中奖记录</span></el-dropdown-item>
              <el-dropdown-item v-if="scope.row.activity_status == 0"><span @click="handleDel(scope.row.code)">删除活动</span></el-dropdown-item>
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
import {getActivityList, delActivity, releaseActivity, lotteryEnd} from '../../api/api'
import NProgress from 'nprogress'
export default {
  data () {
    return {
      activityList: [],
      rows: 0,
      page_number: 1,
      page_size: 10,
      listloading: false,
      dialogVisible: false
    }
  },
  methods: {
    // 发布活动
    handleRlease (code) {
      this.$confirm('发布后的活动有部分信息不可修改, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal:false
      }).then(() => {
        let params = {
          code: code
        }
        this.listloading = true
        NProgress.start()
        releaseActivity(params).then((res) => {
          this.listloading = false
          NProgress.done()
          if (res.data.status == 0) {
            this.$message({
              message: res.data.message,
              type: 'success'
            });
            this.getRecords()
            this.releaseStatus = 1
          }else{
            this.$message({
              message: res.data.message,
              type: 'error'
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消发布'
        });
      });
    },
    // 跳转编辑活动
    handleEdit (code) {
      this.$router.push({path:'main',query:{code: code, act: 'edit'}})
    },
    // 结束活动
    handleEnd (code) {
      this.$confirm('此活动已发布, 确定要结束?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal:false
      }).then(() => {
        let params = {
          code: code
        }
        this.listloading = true
        NProgress.start()
        lotteryEnd(params).then((res) => {
          this.listloading = false
          NProgress.done()
          if (res.data.status == 0) {
            this.$message({
              message: res.data.message,
              type: 'success'
            });
            this.getRecords()
          }else{
            this.$message({
              message: res.data.message,
              type: 'error'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        })
      })
    },
    // 复制链接
    handleCopy (msg) {
      this.$alert(msg,'复制以下链接' ,{confirmButtonText: '关闭'})
    },
    // 删除活动
    handleDel (code) {
      this.$confirm('此操作将删除该活动, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal:false
      }).then(() => {
        let params = {
          code: code
        }
        this.listloading = true
        NProgress.start()
        delActivity(params).then((res) => {
          this.listloading = false
          NProgress.done()
          if (res.data.status == 0) {
            this.$message({
              message: res.data.message,
              type: 'success'
            });
            this.getRecords()
          }else{
            this.$message({
              message: res.data.message,
              type: 'error'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 跳转至中奖纪录页
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
        this.listloading = false
        NProgress.done()
        if(res.status === 0){
          this.activityList = res.data.list
          this.rows = res.data.rows
        }else{
          this.$message({
            message: res.message,
            type: 'error'
          })
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
    .erweima{
        width:22px;height:22px ;background: url('../../static/img/icon-erweima.png')no-repeat;background-size: 100% 100%;
    }
    .bigerweima{
        width:135px;height: 135px;
        margin: 0 auto;
    }
    .info{
        width:100%;
        height:40px;
        background: #263238;
        color: #fff;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
    }
    .el-message-box__message p {
        margin: 0;
        line-height: 1.4;
        word-wrap: break-word;
    }
</style>
