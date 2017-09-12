<template>

	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-row type="flex" class="row-bg " style="width: 100%; min-width:1227px;height: 45px;" justify="space-around" :gutter="20">
				<el-col :span="24">
					<div class="grid-content  text-regular " align="center">

						<el-col :span="4":push="4">
							<el-input  v-model="phone_number" style="width:194px ;" placeholder="请输入手机号"></el-input>
						</el-col>
						<el-col :span="4":push="4">
							<el-select v-model="selectvalue" placeholder="状态">
								<el-option
										:key="item.value"
										v-for="item in activeArr"
										:label="item.label"
										:value="item.value"
								>
								</el-option>
							</el-select>

						</el-col>
						<el-col :span="4" :push="3">
							<el-button class="blue-btn" @click="search" v-loading.fullscreen.lock="fullscreenLoading">
								查找
							</el-button>
						</el-col>
						<el-col :span="5"  :push="4">
						<el-button type="success" @click="down" v-loading.fullscreen.lock="fullscreenLoading">
							导出Excel
						</el-button>
					</el-col>
					</div>
				</el-col>
			</el-row>
		</el-col>
		<!--列表-->
		<div class="selectBox" align="center">

		</div>
		<div class="table ">
			<el-table
					:data="detailsArr"
					height=""
					border
					style="width: 1037px; margin:0 auto" >
				<el-table-column
						prop="electronic_code"
						label="流量兑换码"
						width="259"
						align="center">
				</el-table-column>
				<el-table-column
						prop="phone_number"
						label="使用者"
						width="259"
						align="center">
				</el-table-column>
				<el-table-column
						prop="create_time"
						label="使用时间"
						width="259"
						align="center">
				</el-table-column>
				<el-table-column
						prop="status"
						label="状态"
						width="259"
						align="center">
				</el-table-column>
			</el-table>
		</div>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="page_size"
						   :total="total" style="float:right; margin-right: 13%">
			</el-pagination>
		</el-col>
	</section>
</template>

<script>
  import NProgress from 'nprogress';
  import {viewExchangeCodeList} from '../../api/api';

  export default {
    data() {
      return {
        activeArr: [{
          value: '1',
          label: '已兑换'
        },{
          value: '2',
          label: '未兑换'
        },{
          value: '3',
          label: '已过期'
        }], // 激活类型列表
        staff_name:'',
        selectvalue:'', // 下拉框
        noData:'aa',
        startTime:'',
        endTime:'',
        fullscreenLoading:'',
        pageSize:1,
        detailsArr:[],
        phone_number: '', // 手机号
        dialogVisible: true,// 控制弹出层显示隐藏
        filters: {
          name: ''
        },
        coupon: [],
        total: 0,
        page_number: 1,
        page_size: 10,
        listLoading: false,
        sels: [],//列表选中列
        editFormVisible: false,//编辑界面是否显示
        editLoading: false,
        editFormRules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ]
        },
        //编辑界面数据
        editForm: {
          id: 0,
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        },

        addFormVisible: false,//新增界面是否显示
        addLoading: false,
        addFormRules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      //转换流量包规格
      formatSize: function (row, column) {
        // return row.package_size == 1 ? '男' : row.package_size == 0 ? '女' : '未知';
        return row.package_size < 1024 ? row.package_size + 'M' : row.package_size / 1024 + 'G';
      },
      //转换流量包规格
      formatArea: function (row, column) {
        return row.region == 1 ? '全国' : row.region == 2 ? '省内' : '未知';
      },
      // 转换是否绑定
      formatBind: function (row, column) {
        return row.binding == 0 ? '不绑定' : '绑定'
      },
      // 转换张
      formatCouponNum: function (row, column) {
        return row.coupon_num + '张'
      },
      formatUsed: function (row, column) {
        return row.used_num + '张'
      },
      //转换运营商
      formatOp: function (row, column) {
        let op = '';
        switch (row.belong_type) {
          case 1:
            op = '全网'
            break;
          case 2:
            op = '移动'
            break;
          case 3:
            op = '联通'
            break;
          case 4:
            op = '电信'
            break;
          case 5:
            op = '虚拟运营商'
            break;
          default:
            op = '全网'
            break;
        }
        return op;
      },
      // 转换优惠券类型
      formatType: function (row, column) {
        return row.coupon_type == 1 ? '立减' : row.coupon_type == 2 ? '返口粮' : '一口价';
      },
      // 转换发行量
      formatNum: function (row, column) {
        return row.sum_number == 0 ? '不限' : row.sum_number + '张';
      },
      // 转换限制张数
      formatSum: function (sum) {
        return sum && sum + '张';
      },
      // 转换获取方式
      formatSource: function (row, column) {
        let source = '';
        switch (row.coupon_source) {
          case 1:
            source = '刮刮'
            break;
          case 2:
            source = '活动'
            break;
          case 3:
            source = '天降'
            break;
          case 4:
            source = '兑换码'
            break;
          case 5:
            source = '首次刷卡'
            break;
        }
        return source;
      },
      handleCurrentChange: function (val) {
        this.page_number = val;
        this.inquireTable();
      },
      inquireTable(num){ // 查询表单
        let _this = this;
        let params = {
        page_number: this.page_number,
          page_size: this.page_size,
          phone_number: this.phone_number,
          status: this.selectvalue,
          down: num,
          coupon_id:this.$route.query.coupon_id// 售卡单号
        };
        NProgress.start();
        viewExchangeCodeList(params).then((res) => {
          _this.total = res.data.data.rows || 0;
          _this.closeFullScreen();
          NProgress.done();
          this.detailsArr = res.data.data.list
//          console.log(res.data)
        });
      },
      closeFullScreen() {
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 500);
      },
      search(){ // 搜索
        this.fullscreenLoading = true;
        this.inquireTable()
      },
      down() {
        let params = 'phone_number='+this.phone_number+'&status='+this.selectvalue+'&down=1&coupon_id='+this.$route.query.coupon_id;
        window.open("/api/icbc/server/export/coupon?"+params);
      }

    },
    mounted() {
      this.inquireTable();
    }

  }

</script>

<style scoped rel="stylesheet" lang="less">
	#status{
		width:194px ;
		height:36px;
		border:1px solid rgb(191, 208, 217) ;
		font-size: 14px;
		color: 	rgb(72, 93, 106)	;
		outline: none;
	}

	.shadow{
		position: absolute;
		top:0;
		left:0;
		bottom: 0;
		right:0;
		background: rgba(0,0,0,.4);
		z-index: 1;
	}
	.popupModule{
		background: #fff;
		z-index: 2;
		width:522px;
		height:495px;
		border-radius: 10px;
		position: fixed;
		left: 35%;
		top:10%;
		font-size: 14px;

		.title{
			font-size: 18px;
			height: 40px;
			padding-left: 17px;
			line-height: 40px;
			position: relative;
			border-bottom: 1px solid #ccc;
			margin-bottom: 37px;
			.closeBtn{
				width: 20px;
				height: 20px;
				position: absolute;
				right: 10px;
				top: 12px;
				/*background: red;*/
				text-align: center;
				font-size: 13px;
				line-height: 20px;
			}
		}
		.row-style{
			height:30px;
			line-height: 30px;
			margin-bottom: 27px;
			.smallipt{
				width:127px;
			}
		}
		.btnBox{
			width:100%;
			position: absolute;
			bottom: 0;
			left:0;
			height:53px;
			border-top: 1px solid #ccc;
			line-height: 53px;
			display: flex;
			justify-content:space-around;
			button{
				height:30px;
				line-height: 5px;
				margin-top: 10px;
			}

		}

	}
	.blue-btn {
		background: rgba(22, 155, 213, 1);
		color: #fff;
	}

	.table-expand {
		font-size: 0;
	}

	.table-expand label {
		width: 90px;
		color: #99a9bf;
	}

	.table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}

</style>
