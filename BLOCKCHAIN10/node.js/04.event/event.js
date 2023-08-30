class Event {
  observers = [];
  constructor() {}

  on(eventname, callback) {
    const obj = {
      key: eventname,
      value: callback,
      //[eventname]: callback
    };
    this.observers.push(obj);
  }

  emit(eventname, obj) {
    // let observer;
    // for (let i = 0; i < this.length; i++) {
    //   if (this.observers[i].key === eventname) {
    //     observer = this.observers[i];
    //   }
    // }
    const observer = this.observers.find((v) => {
      return v.key === eventname;
    });
    observer.value(obj);
  }
}

const ev = new Event();
ev.on("click", (a) => {
  console.log(a);
  console.log("heello world");
});
ev.emit("click", { name: "ingoo" });
