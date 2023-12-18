import credentialProvider from "./credential";
import emailProvider from "./email";
import githubProvider from "./github";
import googleProvider from "./google";
import kakaoProvider from "./kakao";

const providers = [
  credentialProvider,
  emailProvider,
  githubProvider,
  googleProvider,
  kakaoProvider,
];
export default providers;
