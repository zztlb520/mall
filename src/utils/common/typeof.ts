import { EnumDataType } from '@/enum';
import { dataTypeLabels } from '@/constants';

export function isNumber(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.number;
}
export function isString(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.string;
}
export function isBoolean(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.boolean;
}
export function isNull(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.null;
}
export function isUndefined(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.undefined;
}
export function isObject(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.object;
}
export function isArray(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.array;
}
export function isDate(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.date;
}
export function isRegExp(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.regexp;
}
export function isSet(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.set;
}
export function isMap(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.map;
}
export function isFile(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.file;
}

function getDataTypeString<K extends TypeUtil.DataTypeStringKey>(value: unknown) {
	return Object.prototype.toString.call(value) as TypeUtil.DataTypeString<K>;
}

export function isFunction<T extends (...args: any[]) => any | void>(value: T | unknown): value is T {
	return getDataTypeString(value) === dataTypeLabels.function;
}
