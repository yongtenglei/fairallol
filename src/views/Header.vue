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
          <el-menu-item index="1-1" @click="learnBasics"
            >Fair Allocation Basic</el-menu-item
          >
          <el-menu-item index="1-2" @click="learnEF1"
            >Save the World (EF1)</el-menu-item
          >
          <el-menu-item index="1-3" @click="learnAW"
            >Adjusted Winner</el-menu-item
          >
          <el-menu-item index="1-4" @click="learnDC"
            >Divide and Choose</el-menu-item
          >
          <el-menu-item index="1-5" @click="learnRR">Round Robin</el-menu-item>
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

function learnBasics() {
  router.push('/learnmore-basics')
}

function learnEF1() {
  router.push('/learnmore-ef1')
}

function learnAW() {
  router.push('/learnmore-aw')
}

function learnDC() {
  router.push('/learnmore-dc')
}

function learnRR() {
  router.push('/learnmore-rr')
}

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
