import { User } from "./models/User";

const newUser = new User({ name: "Usman", age: 29 });
const name = newUser.get("name");
console.log(name);
