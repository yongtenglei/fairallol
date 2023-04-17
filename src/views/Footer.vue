<template>
  <div class="footer">
    <div class="bottom-container">
      <a class="footer-link" href="https://github.com/LMLEC" target="_blank"><i class="fab fa-linux"></i> Club</a>

      <a class="footer-link" href="https://github.com/yongtenglei" target="_blank"><i class="fa-brands fa-github"></i>
        Github</a>
      <a class="footer-link" href="mailto:yongtengrey@outlook.com"><i class="fa-solid fa-envelope"></i> Email Me</a>
      <p class="copyright" @click="handleClickCopyright">© Yongteng Lei</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClickCopyright() {
  router.push('/about')
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 7% 0 0 0;
}

.bottom-container {
  margin: 30px auto 0px auto;
  padding: 30px 0 20px 0;
  background-color: #ff4c68;
}

.bottom-container a {
  color: #3f3b6c;
  color: #eaf6f6;
  font-family: 'Montserrat', sans-serif;
  margin: 10px 20px;
  text-decoration: none;
}

.bottom-container a:hover {
  color: #eaf6f6;
  color: #3f3b6c;
}

.copyright {
  margin-top: 10px;
  color: #eaf6f6;
  font-size: 0.85rem;
}
</style>
