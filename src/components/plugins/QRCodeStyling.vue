<template>
	<div ref="qrcode" class="flex-center relative">
        <img v-if="isIOS" :src="iconRollShare" style="width:26px;height:26px" class="absolute" alt="">
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import QRCodeStyling, { type Gradient } from 'qr-code-styling';
import iconRollShare from '@/assets/img/comom/logo/vk-qrcode-62.png';
import { isIOS } from '@vueuse/core';
import type { DrawType, TypeNumber, Mode, ErrorCorrectionLevel, DotType, CornerSquareType,CornerDotType } from 'qr-code-styling';

interface Props {
	/**二维码地址链接 */
	data?: string
	/**二维码地址宽度 */
    width?: number,
	/**二维码地址高度*/
    height?: number,
	/**二维码渲染类型 */
    type?: DrawType,
	/**logo */
	image?:string,
	/**二维码间距 */
	margin?:number
	/**具体图像选项 */
	qrOptions?: {
		/**类型编号	 */
		typeNumber: TypeNumber,
		/** 模式*/
        mode: Mode,
        errorCorrectionLevel: ErrorCorrectionLevel
	}
	imageOptions?: {
		/**隐藏图像覆盖的所有点*/
        hideBackgroundDots: boolean,
		/** 图像尺寸的系数。不建议使用超过 0.5。越低越好*/
        imageSize: number,
		/**如果您想从其他来源下载二维码，请设置anonymous */
        crossOrigin: 'anonymous' | 'use-credentials',
		/**图片边距（以 px 为单位） */
        margin: number
    }
	dotsOptions?: {
		/**QR 点样式*/
        type?: DotType;
		/**QR 点的颜色*/
        color?: string;
		/**QR 点的渐变 */
        gradient?: Gradient;
    };
	backgroundOptions?: {
		/**背景样式 */
        round?: number;
		/**背景颜色 */
        color?: string;
		/**背景渐变 */
        gradient?: Gradient;
    };
	cornersSquareOptions?: {
		/**角样式 方形 */
        type?: CornerSquareType;
		/**正方形角的颜色 */
        color?: string;
		/**角的渐变正方形 */
        gradient?: Gradient;
    };
	cornersDotOptions?: {
		/**角点样式*/
        type?: CornerDotType;
		/** 角点颜色*/
        color?: string;
		/**角点渐变 */
        gradient?: Gradient;
    };
}

const props = withDefaults(defineProps<Props>(), {
	data:'',
    width: 200,
    height: 200,
    type: "canvas",
	image: iconRollShare,
	margin: 0,
	qrOptions: () => ({ 
		typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q'
	}),
	imageOptions: () => ({ 
		hideBackgroundDots: true,
        imageSize: 0.5,
        crossOrigin: 'anonymous',
		margin: 0
	}),
	dotsOptions: () => ({
        color: '#000',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'rounded'
    }),
	backgroundOptions: () => ({
        color: '#ffffff',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
    }),
	cornersSquareOptions: () => ({
        color: '#35495E',
        type: 'square',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
    }),
	cornersDotOptions: () => ({
        color: '#35495E',
        type: 'square',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
    })
});

const qrcode = ref();
const qRCodeStyling = ref<QRCodeStyling>()
onMounted(()=>{
	qRCodeStyling.value = new QRCodeStyling(props)
	qRCodeStyling.value.append(qrcode.value)
})
watch(() => props.data,(val: string) => {
    if(qRCodeStyling.value) qRCodeStyling.value.update(props);
})
</script>

<style>

</style>