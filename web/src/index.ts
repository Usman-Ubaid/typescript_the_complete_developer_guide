import { User } from "./models/User";

const newUser = new User({ name: "Usman", age: 29 });
newUser.set({ name: "hello", age: 221 });
console.log(newUser.get("age"));
console.log(newUser.get("name"));
