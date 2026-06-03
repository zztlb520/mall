interface AudioManifest {
    [key: string]: string;
}

interface LoadResult {
    name: string;
    success: boolean;
}

class AudioManager {
    private static instance: AudioManager;
    private sounds: Record<string, HTMLAudioElement> = {};
    private globalVolume: number = 0.8;

    constructor() {
        if (AudioManager.instance) return AudioManager.instance;
        AudioManager.instance = this;
    }

    /**
     * 加载音效（失败不会导致 Promise.all 崩溃）
     */
    async loadActivityAssets(manifest: AudioManifest): Promise<LoadResult[]> {
        const loadPromises = Object.entries(manifest).map(([name, url]) => {
            return new Promise<LoadResult>((resolve) => {
                const audio = new Audio();
                audio.src = url;
                audio.preload = 'auto';

                audio.oncanplaythrough = () => {
                    this.sounds[name] = audio;
                    resolve({ name, success: true });
                };

                audio.onerror = () => {
                    console.warn(`音效 [${name}] 加载失败，路径: ${url}。该音效将静音。`);
                    // 即使失败也 resolve，确保 Promise.all 继续执行
                    resolve({ name, success: false });
                };
            });
        });

        return Promise.all(loadPromises);
    }

    /**
     * 播放音效
     */
    play(name: string, overlap: boolean = true): void {
        const source = this.sounds[name];
        
        // 如果音效没加载成功，直接返回
        if (!source) return;

        try {
            if (overlap) {
                const clone = source.cloneNode() as HTMLAudioElement;
                clone.volume = this.globalVolume;
                clone.play().catch(() => {}); // 捕获浏览器自动播放限制
                clone.onended = () => {
                    clone.onended = null;
                    // HTMLAudioElement 本身没有 remove 方法，直接置空即可触发垃圾回收
                };
            } else {
                source.volume = this.globalVolume;
                source.currentTime = 0;
                source.play().catch(() => {});
            }
        } catch (e) {
            console.error("播放音效时发生异常:", e);
        }
    }

    /**
     * 设置全局音量
     */
    setVolume(volume: number): void {
        this.globalVolume = Math.max(0, Math.min(1, volume));
    }
}

export const audioMgr = new AudioManager();
