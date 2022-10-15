<template>
  <svg
    id="sketchpad"
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0,0,375,667"
    preserveAspectRatio="xMinYMin meet"
  >
    <g transform-origin="center" transform="rotate(180)">
      <rect x="0" y="0" height="100%" width="100%" :fill="fillColor"></rect>
      <linearGradient id="linear-gradient-r1">
        <stop offset="0" :stop-color="startColor" stop-opacity="1" />
        <stop offset="1" :stop-color="endColor" stop-opacity="1" />
      </linearGradient>
      <filter id="shadow-r1" x="0" width="100%" y="-20%" height="150%">
        <feDropShadow
          dx="1"
          dy="1"
          stdDeviation="3"
          flood-color="#3c2e335e"
        ></feDropShadow>
      </filter>
      <path
        d="M0 0 0,443.10825063267356 C 25.000000000000004,446.602971900791 75,465.9930870740906 125,460.5818569732607 C 175,455.1706268724308 200,414.31983063152586 250,416.05210012852405 C 300,417.78436962552223 350,458.6049835923061 375,469.2432044582516 L375 675.2 L0 675.2Z"
        fill="none"
        stroke-linecap="round"
        filter="url(#shadow-r1)"
        stroke-width="1"
        style="
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;
          fill: url('#linear-gradient-r1');
        "
      ></path>
      <path
        d="M0 0 0,491.0368033026085 C 25,505.562470401691 75,547.4817531370968 125,563.6651387980208 C 175,579.8485244589449 200,570.8607359457308 250,571.9537316072286 C 300,573.0467272687265 350,569.6948400058538 375,569.1301171055102 L375 675.2 L0 675.2Z"
        fill="none"
        stroke-linecap="round"
        filter="url(#shadow-r1)"
        stroke-width="1"
        style="
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;
          fill: url('#linear-gradient-r1');
        "
      ></path>
      <path
        d="M0 0 0,629.9713295412512 C 25.000000000000004,644.5227019090803 75,712.304104727191 125,702.7281913803967 C 175,693.1522780336024 200,602.6337984407008 250,582.0917628072799 C 300,561.549727173859 350,596.4327631320895 375,600.0180132132919 L375 675.2 L0 675.2Z"
        fill="none"
        stroke-linecap="round"
        filter="url(#shadow-r1)"
        stroke-width="1"
        style="
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;
          fill: url('#linear-gradient-r1');
        "
      ></path>
    </g>
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  /** 过渡的开始颜色 */
  startColor?: string;
  /** 过渡的结束颜色 */
  endColor?: string;
  /** 暗黑填充颜色 */
  fillColor?:string;
}
var svgRootDom = document.getElementById('sketchpad');
if(svgRootDom) adjustToFreezeAll(svgRootDom);
function adjustToFreezeWidth(rootSvg:HTMLElement) {
    var windowWidth = window.innerWidth;
                        
    var viewBoxVal = rootSvg.getAttribute("viewBox");
    var viewBoxWidth = viewBoxVal?.split(",")[2];
    var viewBoxHeight = viewBoxVal?.split(",")[3];
    rootSvg?.removeAttribute("width");
    rootSvg?.removeAttribute("height");

    var setWidth = windowWidth;
    if(viewBoxHeight && viewBoxWidth) {
        var setHeight = (setWidth * Number(viewBoxHeight)) / Number(viewBoxWidth);
        rootSvg?.setAttribute("width",  String(setWidth));
        rootSvg?.setAttribute("height",  String(setHeight));
    }
    
}

function adjustToNone(rootSvg:HTMLElement) {
    var viewBoxVal = rootSvg.getAttribute("viewBox");
    var viewBoxWidth = viewBoxVal?.split(",")[2];
    var viewBoxHeight = viewBoxVal?.split(",")[3];
    rootSvg.removeAttribute("width");
    rootSvg.removeAttribute("height");
    rootSvg.setAttribute("width", String(viewBoxWidth));
    rootSvg.setAttribute("height", String(viewBoxHeight));
}

function adjustToFreezeHeight(rootSvg:HTMLElement) {
    var windowHeight = document.documentElement.clientHeight;

    var viewBoxVal = rootSvg.getAttribute("viewBox");
    var viewBoxWidth = viewBoxVal?.split(",")[2];
    var viewBoxHeight = viewBoxVal?.split(",")[3];
    rootSvg.removeAttribute("width");
    rootSvg.removeAttribute("height");

    var setHeight = windowHeight;
    var setWidth = (setHeight * Number(viewBoxWidth))/Number(viewBoxHeight);
    rootSvg.setAttribute("width", String(setWidth));
    rootSvg.setAttribute("height", String(setHeight));
}

function adjustToFreezeAll(rootSvg:HTMLElement) {

    var windowHeight = document.documentElement.clientHeight;
    var windowWidth = document.documentElement.clientWidth;
    
    rootSvg.removeAttribute("width");
    rootSvg.removeAttribute("height");

    rootSvg.setAttribute("width", String(windowWidth));
    rootSvg.setAttribute("height",String(windowHeight));

}
withDefaults(defineProps<Props>(), {
  startColor: "#28aff0",
  endColor: "#120fc4",
  fillColor: "#28aff0"
});
</script>

<style scoped></style>
