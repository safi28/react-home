import parseCookeis from "./parseCookies";

const cookies = parseCookeis();
const token = cookies["auth_cookie"];
export default token;
