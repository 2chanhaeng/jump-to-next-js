import Kakao from "next-auth/providers/kakao";

// https://developers.kakao.com/console/app
export default Kakao({
  clientId: process.env.KAKAO_ID,
  clientSecret: process.env.KAKAO_PW,
});
