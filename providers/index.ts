import credentialProvider from "./credential";
import emailProvider from "./email";
import githubProvider from "./github";
import googleProvider from "./google";
import kakaoProvider from "./kakao";
import naverProvider from "./naver";

const providers = [
  credentialProvider,
  emailProvider,
  githubProvider,
  googleProvider,
  kakaoProvider,
  naverProvider,
];
export default providers;
