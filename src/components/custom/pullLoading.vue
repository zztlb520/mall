<template>
    <div class="flex-center">
        <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
  position: relative;
  width: 37.5px;
  height: 50px;
}

.loader__ball {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
    animation: ball 4s infinite;
}
  
.loader__bar {
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 50%;
    background: #fff;
    transform-origin: center bottom;
    box-shadow: 1px 1px 0 rgba(0,0,0,.2);
    
    @for $i from 1 through 5 {
       &:nth-child(#{$i}) {
         left: ($i - 1) * 7.5px;
         transform: scale(1,$i*.2);
         animation: barUp#{$i} 4s infinite;
        }
    }
  }
@keyframes ball {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(4px, -7px);
  }
  10% {
    transform: translate(7.5px, -5px)
  }
  17% {
    transform: translate(11.5px, -12px)
  }
  20% {
    transform: translate(15px, -10px)
  }
  27% {
    transform: translate(19px, -17px)
  }
  30% {
    transform: translate(22.5px, -15px)
  }
  37% {
    transform: translate(26.5px, -22px)
  }
  40% {
    transform: translate(30px, -20px)
  }
  50% {
    transform: translate(30px, 0)
  }
  57% {
    transform: translate(26.5px, -7px)
  }
  60% {
    transform: translate(22.5px, -5px)
  }
  67% {
    transform: translate(18.5px, -12px)
  }
  70% {
    transform: translate(15px, -10px)
  }
  77% {
    transform: translate(11px, -17.5px)
  }
  80% {
    transform: translate(7.5px, -15px)
  }
  87% {
    transform: translate(3.5px, -22px)
  }
  90% {
    transform: translate(0, -20px)
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes barUp1 { 
  0% {
    transform: scale(1, .2);
  }
  40%{
    transform: scale(1, .2);
  }
  50% {
    transform: scale(1, 1);
  }
  90% {
    transform: scale(1,1);
  }
  100% {
    transform: scale(1,.2);
  }
}
@keyframes barUp2 { 
  0% {
    transform: scale(1, .4);
  }
  40% {
    transform: scale(1, .4);
  }
  50% {
    transform: scale(1, .8);
  }
  90% {
    transform: scale(1, .8);
  }
  100% {
    transform: scale(1, .4);
  }
}
@keyframes barUp3 { 
  0% {
    transform: scale(1, .6);
  }
  100% {
    transform: scale(1, .6);
  }
}
@keyframes barUp4 { 
  0% {
    transform: scale(1, .8);
  }
  40% {
    transform: scale(1, .8);
  }
  50% {
    transform: scale(1, .4);
  }
  90% {
    transform: scale(1, .4);
  }
  100% {
    transform: scale(1, .8);
  }
}
@keyframes barUp5 { 
  0% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, .2);
  }
  90% {
    transform: scale(1, .2);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>