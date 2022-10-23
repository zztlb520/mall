<template>
  <div class="home">
    <header class="relative">
      <van-swipe class="h-160px rounded-8px" vertical :autoplay="3000">
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home-banna/banna1.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home-banna/banna1.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home-banna/banna1.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home-banna/banna1.jpg"/>
          </van-swipe-item>
      </van-swipe>
      <van-notice-bar left-icon="volume-o"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </header>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 150px;
  .van-swipe-item {
    background-color: #39a9ed;
  }
}
::v-deep.van-notice-bar{
  position: absolute!important;
  width: 100%;
  bottom: 0;
  height: 26px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, .2);
  border-radius: 15px 15px 0 0;
  line-height: 26px;
  .van-icon{
    color: var(--van-info-lightest-color);
  }
}


</style>