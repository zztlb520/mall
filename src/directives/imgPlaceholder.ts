import type { Directive } from 'vue';

const vImgPlaceholder: Directive<HTMLImageElement, string> = {
	mounted(el, binding) {
		updateImage(el, binding.value);
	},
	updated(el, binding) {
		if (binding.value !== binding.oldValue) {
			updateImage(el, binding.value);
		}
	}
};

function updateImage(el: HTMLImageElement, src: string | undefined) {
	if (!src) {
		handleError(el);
		return;
	}

	el.style.opacity = '0'; // 加载前隐藏

	el.onload = () => {
		el.style.transition = 'opacity 0.3s';
		el.style.opacity = '1';
		el.style.visibility = 'visible';
		el.parentElement?.classList.remove('img-error');
	};

	el.onerror = () => {
		handleError(el);
	};

	el.src = src;
}

function handleError(el: HTMLImageElement) {
	el.style.opacity = '0';
	el.style.visibility = 'hidden';
	el.parentElement?.classList.add('img-error');
}

export default vImgPlaceholder;
