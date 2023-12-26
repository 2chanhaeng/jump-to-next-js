import Naver from "next-auth/providers/naver";

// https://developers.naver.com/apps/#/register
export default Naver({
  clientId: process.env.NAVER_ID,
  clientSecret: process.env.NAVER_PW,
  allowDangerousEmailAccountLinking: true,
});
