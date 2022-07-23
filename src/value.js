import { createContext } from "react";
let somevalue = createContext(5, () => {});
export default somevalue;