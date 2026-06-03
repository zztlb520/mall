/**
 * 带最小延迟的异步执行函数（对象属性版）
 * @param {Object} targetObj 目标对象，例如组件的 this 或某个 data 对象
 * @param {string} key 对象中控制 loading 的属性名，例如 'isLoading'
 * @param {Function} asyncFn 具体的异步业务函数
 * @param {Number} delay 最小延迟时间（毫秒）
 */
export async function withMinDelay(
    targetObj: Record<string, any>, 
    key: string, 
    asyncFn: () => any, 
    delay: number = 1000
) {
    // 1. 通过正确的引用和 key 进行防抖拦截
    if (targetObj[key]) return; 

    // 2. 同步上锁，外部组件的视图会立刻收到响应
    targetObj[key] = true; 
    
    const timerPromise = new Promise(resolve => setTimeout(resolve, delay));

    try {
        // Promise.all 会严格等待两个 Promise 都完成（至少耗时 delay 毫秒）
        const [res] = await Promise.all([asyncFn(), timerPromise]);
        return res !== undefined ? res : true; 
    } catch (error) {
        throw error; // 异常向上拋出
    } finally {
        // 3. 严格在延迟结束后释放锁
        targetObj[key] = false;
    }
}

// 💡 Vue 2 组件中调用示例：
// await withMinDelay(this.currentTab, 'isLoading', this.fetchApi);