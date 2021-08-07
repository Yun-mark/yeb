<template>
    <div>
    <el-container>
      <el-header class="homeHeader">
        <div class="title">云端办公系统</div>
        </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router v-for="(item, index) in routes" :key="index" unique-opened>
            <el-submenu  :index="index+''" v-if="!item.hidden" >
              <template   slot="title"><i :class="item.iconCls" style="color: #1accff;margin-right: 5px"></i>
              <span>{{item.name}}</span>
              </template>
                <el-menu-item :index="children.path" v-for="(children,indexj) in item.children" :key="indexj">{{children.name}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    routes () {
      return this.$store.state.routes
    }
  }
}
</script>
<style scoped>
  .homeHeader {
    background: #409eff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
  }
</style>
