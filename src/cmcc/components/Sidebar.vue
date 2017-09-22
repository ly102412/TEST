<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/index'" class="nav-link"><i class="icon-speedometer"></i> 首页 <span class="badge badge-info">NEW</span></router-link>
        </li>
        <router-link tag="li" v-if="!item.hidden" v-for="(item, index) in $router.options.routes[0].children" class="nav-item nav-dropdown" :to="{ path: '/components'}" disabled>
          <div class="nav-link nav-dropdown-toggle"  @click="handleClick"><i :class="item.iconCls"></i>{{item.name}}</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item" v-if="!child.hidden" v-for="(child, index) in item.children">
              <router-link :to="child.path" class="nav-link" exact><i class="icon-puzzle"></i>{{child.name}}</router-link>
            </li>
          </ul>
        </router-link>
        <li class="divider"></li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
  .sidebar .nav .nav-item ul{
    margin-left: 15px;
  }
</style>
