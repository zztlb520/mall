/**
 * @param rulesList Array<{
 *   validator: 基础类型 | function
 *   className?: string
 *   message?: string
 *   type?: string
 * }>
 */
interface RulesValidatorType {
    // 需要验证条件
    rulesList: Array<{
        validator: boolean | number | (() => boolean | number)
        className?: string
        message?: string
        type?: string
    }>

    // 验证是否通过的状态
    status: boolean

    /**
     * 执行验证
     */
    validationRules(): void
}

/**
 * 验证器
 * @param rulesList validator-验证成立则被拦截
 * @returns message toast 拦截提示
 */
export class RulesValidator implements RulesValidatorType {
    public status: boolean = true

    public rulesList: RulesValidatorType["rulesList"] = []

    constructor(list: RulesValidatorType["rulesList"]) {
        this.rulesList = list
        this.validationRules()
    }

    validationRules() {
        let validationResults = true

        for (const item of this.rulesList) {
            validationResults = typeof item.validator === "function" ? Boolean(item.validator()) : Boolean(item.validator)

            // 验证成立则被拦截
            if (validationResults) {
                this.status = false
                if ("message" in item) {
                    window.$toast({
                        className: item.className || "vk-toast-fail",
                        message: item.message,
                        icon: item.type || "warning"
                    })
                }
                break
            }
        }
    }
}

type TextRulesList = {
	validator: Boolean | number | null
	message: string | number
}
/**
 * 验证器 提取对应状态文案-
 * @param { TextRulesList } rulesList
 * @function validationRules 遍历 验证列表 并提取顺序优先级 文案和状态
 */
export class TextValidator {
	/**验证 是否通过状态 */
	public status: boolean = true
	/**验证拦截 返回文案 */
	public message: string | number = ''
	/**验证拦截列表 */
    public rulesList: TextRulesList[] = []

	constructor (rulesList:TextRulesList[]) {
	  this.rulesList = rulesList;
	  this.validationRules()
	}
	validationRules () {
		const itemRule = this.rulesList.find((item)=>item.validator);
		if(itemRule){
			this.status = false;
			this.message = itemRule.message;
		}
	}
}
/**
 * 单个登录拦截提示
 * @param isIntercept 是否拦截登录 提示
 */
export const loginValidator = (isIntercept:boolean,cb: Function)=> {
	if(isIntercept) {
		window.$toast({
			className: "vk-toast-fail",
			message: '请您先登录',
			icon: "warning"
		})
		return;
	}else{
		return cb()
	}
}

