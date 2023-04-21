<template>
  <div class="header">
    <nav>
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0" @click="handleClickLogo"
          ><img class="logo" src="../../public/vim-go.png" alt="" /> &nbsp;
          Fairalol</el-menu-item
        >
        <div class="flex-grow" />
        <el-sub-menu index="1">
          <template #title>Learn more</template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
            <el-menu-item index="1-4-2">item two</el-menu-item>
            <el-menu-item index="1-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="2" @click="handleClickAboutMe"
          >About Me</el-menu-item
        >
      </el-menu>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClickLogo() {
  router.push('/home')
}

function handleClickAboutMe() {
  router.push('/me')
}
</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}

nav {
  font-weight: bold;
  color: #2c3e50;
}

.logo {
  vertical-align: middle;
}
</style>
