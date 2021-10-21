<template>
  <div class="main-layout">
    <!-- ### Sidebar Nav ### -->
    <sidebar/>
    <!-- ### Sidebar Nav ### -->

    <!-- ### Navbar ### -->
    <navbar/>
    <!-- ### Navbar ### -->

    <main class="main">
      <leftside/>

      <div class="main-content">
        <router-view/>
      </div>

      <rightside/>
    </main>
  </div>
</template>

<script>

import Sidebar from "../components/Sidebar.vue"
import Leftside from "../components/Leftside.vue"
import Rightside from "../components/Rightside.vue"
import Navbar from "../components/Navbar.vue"

export default {
  components: { Sidebar, Leftside, Navbar, Rightside },
}

</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  position: relative;
}

.main {
  margin-top: 56px;
  margin-left: 90px;
  min-height: calc(100vh - 56px);
  display: flex;
}

.left-side, .main-content, .right-side {
  padding: 30px;
}

.left-side {
  background: #fff;
  flex: 1;
  min-width: 200px;
}

.main-content {
  background:rgba(100, 125, 238, .04);
  flex: 5;
}
</style>