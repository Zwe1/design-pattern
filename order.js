/**
 * 命令模式
 */

class Order {
  say(name, words) {
    console.log(`${name} said ${words}`);
  }

  autoSpeaking() {
    this.say("auto", `I'm auto speaking`);
  }
}

const o1 = new Order();

o1.say("o1", `it's an new object`);

o1.autoSpeaking();

// 松耦合实现

class Order1 {
  static say(name, words) {
    console.log(`${name} said ${words}`);
  }

  static autoSpeaking() {
    Order1.say("auto", `I'm auto speaking`);
  }

  execute(name) {
    return (
      Order1[name] &&
      Order1[name].apply(Order1, Array.prototype.slice.call(arguments, 1))
    );
  }
}

const o2 = new Order1();

o2.execute("say", "o1", `it's an new object`);

o2.execute("autoSpeaking");
