import { User } from "./models/User";

const newUser = new User({ name: "Usman", age: 29 });
newUser.set({ name: "hello", age: 221 });
newUser.on("click", () => {});
newUser.on("click", () => {});
newUser.on("mouseover", () => {});
console.log(newUser);
