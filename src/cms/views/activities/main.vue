<template>
  <div class="animated fadeIn">
    <div class="rows">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            活动编辑
          </div>
          <div class="card-block">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="首页" name="first"></el-tab-pane>
              <el-tab-pane label="活动奖品" name="second"></el-tab-pane>
              <el-tab-pane label="我的奖品" name="third"></el-tab-pane>
              <el-tab-pane label="奖品详情" name="fourth"></el-tab-pane>
              <el-tab-pane label="中奖页面" name="five"></el-tab-pane>
              <el-tab-pane label="没中奖页" name="six"></el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="css">
</style>
