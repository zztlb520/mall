/** 弹幕基础类型 - 仅包含组件渲染必须字段 */
export interface BarrageItem {
	id: string;
	avatar: string;
	msg: string;
}
/** 1. 默认的基础原始数据类型 */
export interface RawBarrageData {
	username: string;
	head_image: string;
	goods_name: string;
  	[key: string]: any; // 允许携带其他后端字段
}
/** 弹幕助手配置项 - 使用泛型 T 适配不同的原始数据格式 */
export interface BarrageHelperOptions<T> {
	interval?: number;
	maxPush?: number;
	onPush?: (newItems: BarrageItem[], speed: number) => void;
	/** 允许自定义构建逻辑，解耦业务逻辑 */
	formatter?: (item: T, index: number) => BarrageItem;
	// 新增：速度配置范围
	minSpeed?: number;
	maxSpeed?: number;
}

export class BarrageHelper<T = RawBarrageData> {
	private added = 0;
	private timer: ReturnType<typeof setTimeout> | null = null;
	private list: T[] = [];
	private readonly config: Required<BarrageHelperOptions<T>>;

	constructor(options: BarrageHelperOptions<T> = {}) {
		// 默认的格式化处理器
		const defaultFormatter = (item: T, idx: number): BarrageItem => {
			const data = item as unknown as RawBarrageData; 
			return {
				id: `b_${Date.now()}_${idx}`,
				avatar: data.head_image || '',
				msg: `恭喜 ${data.username || '用户'} 获得 ${data.goods_name || '奖品'}`,
			};
		};

		this.config = {
			interval: options.interval ?? 8000,
			maxPush: options.maxPush ?? 3,
			onPush: options.onPush || (() => { }),
			formatter: options.formatter || defaultFormatter,
			minSpeed: options.minSpeed ?? 15,  // 最小速度
      		maxSpeed: options.maxSpeed ?? 80, // 最大速度
		};
	}

	/** 开始运行 */
	public start(list: T[]): void {
		this.destroy(); // 启动前清理旧任务
		if (!list?.length) return;

		this.list = list;
		this.added = 0;
		this.execute();
	}

	/** 核心执行逻辑：使用递归 setTimeout 替代 setInterval，运行更平滑 */
	private execute(): void {
		if (this.added >= this.list.length) {
			this.destroy();
			return;
		}
		/** 优化点：不再使用固定 interval，而是上下浮动 20%，让弹幕看起来更像真人发送 */
		const randomInterval = this.config.interval * (0.8 + Math.random() * 0.4);
		this.timer = setTimeout(() => {
			const remaining = this.list.length - this.added;
			// 取 maxPush 和剩余总数的最小值
			const pushCount = Math.min(
				Math.floor(Math.random() * this.config.maxPush) + 1,
				remaining
			);

			const batch: BarrageItem[] = [];
			for (let i = 0; i < pushCount; i++) {
				const currentIdx = this.added + i;
				batch.push(this.config.formatter(this.list[currentIdx], currentIdx));
			}

			this.added += batch.length;

			// 核心优化：计算当前批次的随机速度
			const randomSpeed = Math.floor(Math.random() * (this.config.maxSpeed - this.config.minSpeed + 1)) + this.config.minSpeed

			this.config.onPush(batch,randomSpeed);

			// 递归调用
			this.execute();
		}, randomInterval);
	}

	/** 停止并清理 */
	public destroy(): void {
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null;
		}
		this.list = [];
	}

	/** 获取当前处理进度 */
	public get progress(): number {
		return this.list.length ? (this.added / this.list.length) : 0;
	}
}
