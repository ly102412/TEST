<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<!-- <el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getList">查询</el-button>
				</el-form-item> -->
				<el-form-item style="float:right;">
					<el-button type="success" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="coupon" highlight-current-row v-loading="listLoading" @selection-change="selsChange">
			<!-- <el-table-column type="selection" width="55">
			</el-table-column> -->
			<!-- <el-table-column type="expand">
					<template scope="props">
							<el-form label-position="left" inline class="table-expand">
								<el-form-item label="开始时间">
									<span>{{props.row.use_start_time}}</span>
								</el-form-item>
								<el-form-item label="结束时间">
									<span>{{props.row.use_end_time}}</span>
								</el-form-item>
								<el-form-item label="时间间隔">
									<span>{{props.row.interval_time}}</span>
								</el-form-item>
								<el-form-item label="领取开始时间">
									<span>{{props.row.receive_start_time}}</span>
								</el-form-item>
								<el-form-item label="领取结束时间">
									<span>{{props.row.receive_end_time}}</span>
								</el-form-item>
								<el-form-item label="限制张数">
									<span>{{formatSum(props.row.sum_number) == 0?'不限':formatSum(props.row.sum_number)}}</span>
								</el-form-item>
								<el-form-item label="已使用">
									<span>{{formatSum(props.row.used_num)}}</span>
								</el-form-item>
								<el-form-item label="已发行">
									<span>{{formatSum(props.row.coupon_num)}}</span>
								</el-form-item>
							</el-form>
					</template>
			</el-table-column> -->
			<el-table-column prop="coupon_name" label="粮票名"  sortable width="130">
			</el-table-column>
			<el-table-column prop="coupon_source" label="获取方式"  :formatter="formatSource" sortable width="130">
			</el-table-column>
			<el-table-column prop="coupon_type" label="类型"  :formatter="formatType" sortable width="130">
			</el-table-column>
			<el-table-column prop="coupon_score" label="额度"  :formatter="formatType" sortable width="130">
			</el-table-column>
			<el-table-column prop="package_size" label="规格"  :formatter="formatSize" sortable width="130">
			</el-table-column>
			<el-table-column prop="region" label="使用地域"  :formatter="formatArea" sortable width="130">
			</el-table-column>
			<el-table-column prop="use_start_time" label="开始时间" width="130" sortable>
			</el-table-column>
			<el-table-column prop="use_end_time" label="结束时间" width="130" sortable>
			</el-table-column>
			<el-table-column prop="binding" label="是否绑定" width="130" :formatter="formatBind">
			</el-table-column>
			<!-- <el-table-column prop="receive_start_time" label="领取开始时间">
			</el-table-column>
			<el-table-column prop="receive_end_time" label="领取结束时间">
			</el-table-column> -->
			<el-table-column prop="sum_number" label="发行量" width="130" :formatter="formatNum">
			</el-table-column>
			<el-table-column prop="coupon_num" label="已领取" width="130" :formatter="formatCouponNum">
			</el-table-column>
			<el-table-column prop="used_num" label="已使用" width="130" :formatter="formatUsed">
			</el-table-column>
			<el-table-column prop="belong_type" label="运营商"  :formatter="formatOp" sortable width="130">
			</el-table-column>
			<el-table-column label="操作" width="130">
				<template scope="scope">
					<el-button size="small" icon="edit" type="warning" @click="handleEdit(scope.row.id)"></el-button>
					<!-- <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button> -->
					<el-button type="info" size="small" :disabled="scope.row.coupon_source != 4" @click="exportCode(scope.row.id)">导出</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
	</section>
</template>

<script>
	import NProgress from 'nprogress';
	import { getCouponList } from '../../api/api';

	export default {
		data() {
			return {
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
						{ required: true, message: '请输入姓名', trigger: 'blur' }
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
						{ required: true, message: '请输入姓名', trigger: 'blur' }
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
			formatArea: function(row, column){
				return row.region == 1 ? '全国' : row.region == 2 ? '省内' : '未知';
			},
			// 转换是否绑定
			formatBind: function(row, column){
				return row.binding == 0 ? '不绑定': '绑定'
			},
			// 转换张
			formatCouponNum: function(row, column){
				return row.coupon_num +'张'
			},
			formatUsed: function(row, column){
				return row.used_num + '张'
			},
			//转换运营商
			formatOp: function(row, column){
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
			formatType: function (row, column){
				return row.coupon_type == 1 ? '立减' : row.coupon_type == 2 ? '返口粮' : '一口价';
			},
			// 转换发行量
			formatNum: function (row, column){
				return row.sum_number == 0 ? '不限' : row.sum_number + '张';
			},
			// 转换限制张数
			formatSum: function(sum){
				return sum && sum+'张';
			},
			// 转换获取方式
			formatSource: function(row, column){
				let source = '';
				switch(row.coupon_source){
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
			handleCurrentChange: function(val) {
				this.page_number = val;
				this.getList();
			},
			//获取用户列表
			getList() {
				let params = {
					page_number: this.page_number,
					page_size: this.page_size
				};
				this.listLoading = true;
				NProgress.start();
				getCouponList(params).then((res) => {
					console.log(res.data.data);
					this.listLoading = false;
					NProgress.done();
					this.total = res.data.data.rows;
					this.coupon = res.data.data.list;
				});
			},
			// //跳转到编辑页面
			handleEdit (coupon_id) {
				this.$router.push({path: '/edit/'+coupon_id});
			},
			//跳转到新增页面
			handleAdd () {
				this.$router.push('/form');
			},
			selsChange (sels) {
				this.sels = sels;
			},
			exportCode (id){
				window.open('/api/server/export/coupon?coupon_id='+id);
				// alert(id);
				// let url = '/api/server/export/coupon?coupon_id='+id;
				// let form = document.createElement('form');
				// form.setAttribute('method', 'get');
				// form.setAttribute('action', url);
				// form.setAttribute('enctype', 'multipart/form-data');
				// document.body.appendChild(form);
				// form.submit();//表单提交
			}
		},
		mounted() {
			this.getList();
		}
	}

</script>

<style scoped>
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