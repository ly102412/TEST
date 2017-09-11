<template>
	<el-form ref="coupon" :model="coupon" label-width="100px" style="margin:20px;width:70%;min-width:600px;" :rules="couponFormRules">
		<el-form-item label="粮票名称" prop="coupon_name">
			<el-input v-model="coupon.coupon_name"></el-input>
		</el-form-item>
		<el-form-item label="获取方式">
			<el-radio-group v-model="coupon.coupon_source" :change="setSumNumber(coupon.coupon_source)">
			    <el-radio-button :label="1">刮刮</el-radio-button>
			    <el-radio-button :label="2">活动</el-radio-button>
			    <el-radio-button :label="3">天降</el-radio-button>
			    <el-radio-button :label="4">兑换码</el-radio-button>
			    <el-radio-button :label="5">首次刷卡</el-radio-button>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="类型">
			<el-radio-group v-model="coupon.coupon_type">
			   <el-radio :label="1">立减</el-radio>
			   <!-- <el-radio :label="2">返口粮</el-radio> -->
			   <el-radio :label="3">一口价</el-radio>
			 </el-radio-group>
		</el-form-item>
		<el-form-item label="额度" prop="coupon_score">
			<el-input placeholder="请输入额度" v-model="coupon.coupon_score">
			    <template slot="append">元/斤</template>
			</el-input>
		</el-form-item>
		<el-form-item label="使用条件" prop="package_size">
			<el-input placeholder="请输入条件" v-model="coupon.package_size">
			    <template slot="prepend">限</template>
			    <template slot="append">M <span v-if="coupon.coupon_type !== 3">/ 以上使用</span></template>
			</el-input>
		</el-form-item>
		<!-- <el-form-item label="使用条件">
			 限
			<el-select v-model="coupon.package_size" placeholder="请选使用条件">
				<el-option v-for="item in package_size_list" :label="item.label" :value="item.value"></el-option>
			</el-select>
			及以上使用
		</el-form-item> -->
		<el-form-item label="领取时间">
			<el-col :span="11">
				<el-form-item>
					<el-date-picker type="date" placeholder="选择日期" v-model="coupon.receive_start_time" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-col>
			<el-col class="line" :span="1">-</el-col>
			<el-col :span="11">
				<el-form-item>
					<el-date-picker type="date" placeholder="选择日期" v-model="coupon.receive_end_time" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-col>
		</el-form-item>
		<el-form-item label="可用时间" >
			<el-radio-group v-model="coupon.time_slot">
			   <el-radio :label="1">固定时间</el-radio>
			   <el-radio :label="2">延时</el-radio>
			 </el-radio-group>
		</el-form-item>
		<el-form-item v-show="coupon.time_slot == 1">
			<el-col :span="11">
				<el-form-item>
					<el-date-picker type="date" placeholder="选择日期" v-model="coupon.use_start_time" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-col>
			<el-col class="line" :span="1">-</el-col>
			<el-col :span="11">
				<el-form-item>
					<el-date-picker type="date" placeholder="选择日期" v-model="coupon.use_end_time" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-col>
		</el-form-item>
		<el-form-item v-show="coupon.time_slot == 2">
			<el-input placeholder="请输入内容" v-model="coupon.interval_time">
					<template slot="prepend">用户领取后</template>
			    <template slot="append">日内生效</template>
			</el-input>
		</el-form-item>
		<el-form-item label="绑定">
			<el-radio-group v-model="coupon.binding">
			   <el-radio :label="0">是</el-radio>
			   <el-radio :label="1">否</el-radio>
			 </el-radio-group>
		</el-form-item>
		<el-form-item label="发行量">
			<el-radio-group v-model="coupon.coupon_num">
			   <el-radio :label="0" :disabled="coupon.coupon_source == 4">不限</el-radio>
			   <el-radio :label="1">限制</el-radio>
			 </el-radio-group>
		</el-form-item>
		<el-form-item v-show="coupon.coupon_num == 1" prop="sum_number">
			 <el-input placeholder="请输入数量" v-model="coupon.sum_number">
			     <template slot="prepend">限</template>
			     <template slot="append">张</template>
			 </el-input>
		</el-form-item>
		<el-form-item label="使用地域">
			<el-radio-group v-model="coupon.region">
			   <el-radio :label="1">全国</el-radio>
			   <el-radio :label="2">省内</el-radio>
			 </el-radio-group>
		</el-form-item>
		<el-form-item label="运营商">
			<el-radio-group v-model="coupon.belong_type">
			   <el-radio :label="1">全网</el-radio>
			   <el-radio :label="2">移动</el-radio>
			   <el-radio :label="3">联通</el-radio>
			   <el-radio :label="4">电信</el-radio>
			   <el-radio :label="5">虚拟运营商</el-radio>
			 </el-radio-group>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click.native.prevent="editSubmit('coupon')"  :loading="loading">确认提交</el-button>
			<el-button @click="resetForm('coupon')">重置</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import NProgress from 'nprogress';
	import util from '../../common/js/util';
	import { getCouponInfo,editCoupon } from '../../api/api';
	export default {
		created () {
			let id = this.$route.params.id;
			let params = {coupon_id: id};
			this.getCoupon(params);
		},
		data() {
			return {
				loading: false,
				coupon:{},
				couponFormRules: {
				  coupon_name: [
				    { required: true, message: '请输入粮票名称', trigger: 'blur' },
				  ],
				  receive_start_time: [
				    { type: 'date', required: true, message: '请选择日期', trigger: 'change' },
				  ],
				  receive_end_time: [
				    { type: 'date', required: true, message: '请选择日期', trigger: 'change' },
				  ],
				  // use_start_time: [
				  //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' },
				  // ],
				  // use_end_time: [
				  //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' },
				  // ],
				  interval_time: [
				    { required: true, message: '请输入延时时间', trigger: 'blur' },
				  ],
				  sum_number: [
				    { type:'number',required: true, message: '请输入发行量', trigger: 'blur' },
				  ],
				}
			}
		},
		methods: {
			// 设置发行量
			setSumNumber (num){
				if(num == 4){
					this.coupon.coupon_num = 1;
				}
			},
			getCoupon: function (params) {
				getCouponInfo(params).then((res) => {
					if(res.data.status == 0){
						this.coupon = res.data.data; 
						console.log(this.coupon);
					}
				});
			},
			// 编辑粮票
			editSubmit: function (formName) {
				let _this = this;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.loading = true;
							NProgress.start();
							let params = Object.assign({}, this[formName]);
							// params.receive_start_time = (!params.receive_start_time || params.receive_start_time == '') ? '' : util.formatDate.format(new Date(params.receive_start_time), 'yyyy-MM-dd');
							// params.receive_end_time = (!params.receive_end_time || params.receive_end_time == '') ? '' : util.formatDate.format(new Date(params.receive_end_time), 'yyyy-MM-dd');
							// params.use_start_time = (!params.use_start_time || params.use_start_time == '') ? '' : util.formatDate.format(new Date(params.use_start_time), 'yyyy-MM-dd');
							// params.use_end_time = (!params.use_end_time || params.use_end_time == '') ? '' : util.formatDate.format(new Date(params.use_end_time), 'yyyy-MM-dd');
							editCoupon(params).then((res) => {
								this.loading = false;
								NProgress.done();
								this.$notify({
									title: '成功',
									message: '提交成功',
									type: 'success'
								});
								this.$refs[formName].resetFields();
								this.$router.push({path: '/list/'});
							});
						});
					}
				});
			},
			resetForm: function (formName) {
				let _this = this;
        this.$refs[formName].resetFields();
      }
		}
	}

</script>
<style>
	.line{
		text-align:center;
	}
</style>