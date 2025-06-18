type timerList = {
    name: string
    callback: Function
    time: number
	t:number
}
class timer {
    timerList:timerList[] = [];
  
    addTimer(name:string, callback:Function, time = 1000) {
      this.timerList.push({
        name,
        callback,
        time,
		t:0
      });
      this.runTimer(name);
    }
  
    runTimer(name:string) {
      const _this = this;
      (function inner() {
        const task = _this.timerList.find((item) => {
          return item.name === name;
        });
        if (!task) return;
        if(task.time<=0) return clearTimeout(task.t);
        task.t = setTimeout(() => {
          task.callback();
          clearTimeout(task.t);
          inner();
        }, task.time);
      })();
    }
  
    clearTimer(name:string) {
      const taskIndex = this.timerList.findIndex((item) => {
        return item.name === name;
      });
      if (taskIndex !== -1) {
        // 由于删除该计时器时可能存在该计时器已经入栈，所以要先清除掉，防止添加的时候重复计时
        clearTimeout(this.timerList[taskIndex].t);
        console.log('关闭定时器:',name)
        this.timerList.splice(taskIndex, 1);
      }
    }
  }
  
  export default new timer();