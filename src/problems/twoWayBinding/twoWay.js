<input type="text" id="twoWay" value="" />;

// Two-way bind an html element with a JS object
// Part 1: change object when an html input element changes
const obj = {
  id: "twoWay",
  value: "",
};

const bindInputToObj = (obj) => {
  const element = document.getElementById("twoWay");
  console.log("element", element);
  element.addEventListener("change", function (e) {
    obj.value = e.target.value;
    console.log("obj", obj);
  });
};

bindInputToObj(obj);

// Part 2: change html element input when JS object changes
const proxy = new Proxy(obj, {
  set: (target, prop, value) => {
    if (prop === "value" && target.id) {
      target[prop] = value;
      document.getElementById(target.id).value = value;
      return true;
    } else {
      return false;
    }
  },
});
proxy.value = "change";
