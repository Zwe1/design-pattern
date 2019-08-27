// 观察者模式
// 要素：观察者，被观察者，
// 通知，被观察者响应

/**
 * 特性：
 * 观察者需要在发布者上注册监听事件
 */

class Observation {
  observerList = [];

  observe(id, react) {
    if (this.observerList.some(({ id }) => id === id)) return;
    if (react instanceof Function) {
      this.observerList.push({ [id]: react });
    }
  }

  unObserve(unobserveId) {
    this.observerList = this.observerList.filter(
      ({ id }) => id !== unobserveId
    );
  }

  notice() {
    if (this.observerList.toString() !== "[]") {
      this.observerList.forEach(react => {
        react();
      });
    }
  }
}

const ob = new Observation();

ob.observe("ein", () => {
  console.log("it's ein");
});

ob.observe("zwei", () => {
  console.log("i'm watching u");
});

ob.notice();

ob.unObserve("ein");
