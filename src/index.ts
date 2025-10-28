import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const randomUser = new User();
const randomCompany = new Company();

const customMap = new CustomMap("map");

customMap.addMarker(randomUser);
customMap.addMarker(randomCompany);
