import { User } from "./models/User";

const newUser = new User({ name: "Usman", age: 29 });
newUser.set({ name: "hello", age: 221 });
newUser.on("click", () => {
  console.log("clicked 1");
});
newUser.on("click", () => {
  console.log("clicked 2");
});
newUser.on("mouseover", () => {
  console.log("mouseover");
});
console.log(newUser.trigger("click"));
