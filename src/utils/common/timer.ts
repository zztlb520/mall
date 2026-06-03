/**
 * 定义定时器任务的数据结构
 */
interface TimerTask {
	name: string;
	callback: (...args: any[]) => void;
	time: number;
	endTime: number | null;
	args: any[];
	t: ReturnType<typeof setTimeout> | 0;
}

export class Timer {
	// 定义定时器列表类型
	private timerList: TimerTask[] = [];

	/**
	 * 添加定时器
	 * @param name 任务名称
	 * @param callback 回调函数
	 * @param time 轮询间隔（默认 1000ms）
	 * @param target 目标时间戳或相对秒数（传 null 开启纯轮询模式）
	 * @param args 传递给 callback 的额外参数
	 */
	public addTimer(
		name: string,
		callback: (...args: any[]) => void,
		time: number = 1000,
		target: number | string | null = null,
		...args: any[]
	): void {
		if (this.timerList.some((item) => item.name === name)) return;

		let endTime: number | null = null;

		// 1. 类型预检查：必须是能转成数字的非空值
		const numTarget = Number(target);
		if (target !== null && !isNaN(numTarget)) {
			/**
			 * 2. 智能识别策略：
			 * 1.2e9 (12亿) 对应 2008年。
			 * 如果大于此值，判定为 [绝对时间戳]。
			 * 否则，判定为 [相对秒数]。
			 */
			const THRESHOLD = 1200000000;

			if (numTarget > THRESHOLD) {
				// 判定为时间戳：兼容秒(10位)和毫秒(13位)
				// 秒级时间戳最大值 2147483647 (2038年问题)，所以 1e11 是个安全的毫秒分界线
				endTime = numTarget < 10000000000 ? numTarget * 1000 : numTarget;
			} else {
				// 判定为相对秒数：加上当前时间
				endTime = Date.now() + numTarget * 1000;
			}
		}

		this.timerList.push({
			name,
			callback,
			time,
			endTime,
			args,
			t: 0,
		});

		this.runTimer(name);
	}

	/**
	 * 运行定时器
	 */
	private runTimer(name: string): void {
		// TypeScript 环境下箭头函数自动绑定 this，无需 let _this = this;
		const inner = (): void => {
			const taskIndex = this.timerList.findIndex((item) => item.name === name);
			if (taskIndex < 0) return; // 已经被 clearTimer 删除了，停止递归

			const task = this.timerList[taskIndex];

			// 每次递归前先清除旧的，防止重叠
			if (task.t !== 0) {
				clearTimeout(task.t);
			}

			task.t = setTimeout(() => {
				// 【二次确认】—— 逻辑层面的“准入证”
				const currentTaskIndex = this.timerList.findIndex((item) => item.name === name);
				if (currentTaskIndex < 0) return; // 任务被删了，安静地退出，不要报错

				const currentTask = this.timerList[currentTaskIndex];
				try {
					// --- 兼容性逻辑分发 ---
					if (currentTask.endTime !== null) {
						// 【新精准方案】
						const now = Date.now();
						const remain = Math.max(0, Math.ceil((currentTask.endTime - now) / 1000));

						// 传值顺序：剩余秒数, 任务名, ...额外参数
						currentTask.callback(remain, currentTask.name, ...currentTask.args);

						if (remain <= 0) {
							return this.clearTimer(name);
						}
					} else {
						// 【老方案：完全对齐你之前的 callback(task.name)】
						// 如果 args 为空，这里解构后不会产生多余参数
						currentTask.callback(currentTask.name, ...currentTask.args);
					}
				} catch (e) {
					console.error('Timer Callback Error:', e);
				}

				inner(); // 继续下一轮
			}, task.time);
		};

		inner();
	}

	/**
	 * 清除指定定时器
	 */
	public clearTimer(name: string): void {
		const taskIndex = this.timerList.findIndex((item) => item.name === name);
		if (taskIndex !== -1) {
			// 由于删除该计时器时可能存在该计时器已经入栈，所以要先清除掉，防止添加的时候重复计时
			const task = this.timerList[taskIndex];
			if (task.t !== 0) {
				clearTimeout(task.t);
			}
			console.log('关闭定时器:', name);
			this.timerList.splice(taskIndex, 1);
		}
	}

	/**
	 * 销毁所有定时器
	 */
	public destroyed(): void {
		this.timerList.forEach((task) => {
			if (task.t !== 0) {
				clearTimeout(task.t);
			}
		});
		this.timerList = [];
	}
}