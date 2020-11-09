const pubSub = () => {
  const bus = {};
  const subscribe = (event, callback) => {
    if (bus[event]) {
      bus[event].push(callback);
    } else {
      bus[event] = [callback];
    }
  };
  const publish = (event) => {
    bus[event].forEach((cb) => cb());
  };
  return {
    subscribe,
    publish,
  };
};

export default pubSub;
