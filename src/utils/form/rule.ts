import type { Ref } from 'vue';
import { REGEXP_CODE_SIX, REGEXP_EMAIL, REGEXP_PHONE, REGEXP_PWD } from '@/config';

/** 创建自定义错误信息的必填表单规则 */
export const createRequiredFormRule = (message = '不能为空') => ({ required: true, message });

export const requiredFormRule = createRequiredFormRule();

/** 表单规则 */
interface CustomFormRules {
  /** 手机号码 */
  phone: any[];
  /** 密码 */
  pwd: any[];
  /** 验证码 */
  code: any[];
  /** 邮箱 */
  email: any[];
}

/** 表单规则 */
export const formRules: CustomFormRules = {
  phone: [
    createRequiredFormRule('请输入手机号码'),
    { pattern: REGEXP_PHONE, message: '手机号码格式错误', trigger: 'input' }
  ],
  pwd: [
    createRequiredFormRule('请输入密码'),
    { pattern: REGEXP_PWD, message: '密码为6-18位数字/字符/符号，至少2种组合', trigger: 'input' }
  ],
  code: [
    createRequiredFormRule('请输入短信验证码'),
    { pattern: REGEXP_CODE_SIX, message: '短信验证码格式错误', trigger: 'input' }
  ],
  email: [{ pattern: REGEXP_EMAIL, message: '邮箱格式错误', trigger: 'blur' }]
};

/** 是否为空字符串 */
function isBlankString(str: string) {
  return str.trim() === '';
}

/** 获取确认密码的表单规则 */
export function getConfirmPwdRule(pwd:Ref<string>) {
  const confirmPwdRule: any[] = [
    { required: true, message: '请输入确认密码' },
    {
    	validator: (value: string) => {
				return Promise.resolve(!isBlankString(value) && value === pwd.value);
			},
      message: '输入的值与密码不一致',
      trigger: 'input'
    }
  ];
  return confirmPwdRule;
}

/** 获取图片验证码的表单规则 */
export function getImgCodeRule(imgCode:string) {
  const imgCodeRule: any[] = [
    { required: true, message: '请输入图片验证码' },
    {
      validator: (value: string) => {
        return Promise.resolve(!isBlankString(value) && value === imgCode);
      },
      message: '图片验证码不正确',
      trigger: 'onSubmit'
    }
  ];
  return imgCodeRule;
}
