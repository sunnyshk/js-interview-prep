const throttle = (func, timeout = 300) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      func.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};
const saveInput = (name) => {
  console.log("saveInput", name);
};

const processChange = throttle(saveInput, 2000);

processChange("test");
// processChange("test");
// processChange("test");
// processChange("test");
setTimeout(() => {
  processChange("test");
}, 1000);
setTimeout(() => {
  processChange("test");
}, 1200);
setTimeout(() => {
  processChange("test");
}, 2400);
