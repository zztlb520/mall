import type { Component } from 'vue'
import { definePropType } from './runtime'
import Close from '~icons/solar/close-circle-bold';
import SuccessFilled from '~icons/mdi/success-circle';
import InfoFilled from '~icons/mdi/information-variant-circle';
import WarningFilled from '~icons/mdi/warning-circle';

export const iconPropType = definePropType<string | Component>([
	String,
	Object,
	Function,
])


export const CloseComponents = {
	Close,
}

export const TypeComponents = {
	Close,
	SuccessFilled,
	InfoFilled,
	WarningFilled,
	CircleCloseFilled:Close,
}

export const TypeComponentsMap = {
	success: SuccessFilled,
	warning: WarningFilled,
	error: Close,
	info: InfoFilled,
}