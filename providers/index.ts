import credentialProvider from "./credential";
import githubProvider from "./github";
import googleProvider from "./google";
import kakaoProvider from "./kakao";
import naverProvider from "./naver";

const providers = [
  credentialProvider,
  githubProvider,
  googleProvider,
  kakaoProvider,
  naverProvider,
];
export default providers;
