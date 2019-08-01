/**
 * 发布订阅模式
 * 特性：
 * 1. 可以订阅特定事件
 * 2. 可以取消订阅
 * 3. 事件发生时，得到通知
 */

class Emitter {
  constructor() {
    this.events = {}; // { e: callback[] }
  }

  exist(key) {
    return !!this.events[key];
  }

  on(key, callback) {
    if (!(callback instanceof Function)) {
      throw new Error("callback should be a function");
    }

    // key: eventKey; callback: callback
    if (this.exist(key)) {
      this.events[key].push(callback);
    } else {
      this.events[key] = [callback];
    }
  }

  off(key, fn) {
    if (!(fn instanceof Function)) {
      throw new Error(
        "you are removing an invaild type of object from an events list"
      );
    }

    // key: eventKey; fn: callback
    if (this.exist(key)) {
      const i = this.events[key].indexOf(fn);
      if (~i) {
        this.events[key].splice(i, 1);
      }
    }
  }

  emit(key, ...arg) {
    if (this.exist(key) && this.events[key].length >= 1) {
      this.events[key].forEach(e => {
        e.apply(null, arg);
      });
    }
  }
}

const emitter = new Emitter();

function callName(name) {
  console.log(`it's name is ${name}`);
}

function work(job, year, title) {
  console.log(
    `my job is ${job}, and I have been working for ${year} year, now I get a title ${title}`
  );
}

emitter.on("call", callName);
emitter.on("work", work);

emitter.emit("call", "xx");

emitter.off("call", callName);

emitter.emit("work", "coder", 5, "engineer");

emitter.emit("call", "zzzz");
