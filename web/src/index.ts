import axios from "axios";
import { User } from "./models/User";

const user = new User({ name: "spacey", age: 12 });

user.save();
