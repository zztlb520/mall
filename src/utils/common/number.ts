/**
 * 格式化数字，千分位加逗号，小数点位数超过两位时截断
 * @param val
 * @param floatLength 小数点后位数，默认两位
 * @param isFloat 是否强制保留两位小数
 * @return {string}
 */
export const toThousandsFloat = (val: number = 0, floatLength: number = 2, isFloat: boolean = false): string => {
    if (!val || !Number(val)) return isFloat ? '0.' + "0".repeat(floatLength) : '0';
    let result = "";
    const numArr = val.toString().split(".");
    if (numArr[0]) {
        let num = numArr[0];
        if (num.includes(",")) {
            result = num;
        } else {
            num = String(Math.abs(Number(num)));
            while (num.length > 3) {
                result = "," + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) {
                result = num + result;
                if(Number(numArr[0]) < 0 ) result = '-'+result
            }
        }
    }

    if (floatLength == 0) return result;
    if (numArr[1] && Number(numArr[1])) {
        result = result + "." + String(numArr[1]).slice(0, floatLength)
    }
    if (isFloat) {
        if (!numArr[1] || Number(numArr[1]) <= 0) {
            result = result + '.' + "0".repeat(floatLength);
        } else if (numArr[1].length < floatLength) {
            let len = floatLength - numArr[1].length;
            result = result + "0".repeat(len);
        }
    }
    return result;
};