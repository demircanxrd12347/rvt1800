const { Discord, Client} = require('discord.js');

let tokens = ["ODQwNDM1MjU2MTYyMzg1OTIx.YJYKVQ.Z-5PQllTish7ccketPZ3beINucw","ODQwNDM1MjM4MTk0NjQyOTQ0.YJYKUQ.QbIKpYLyPD4Fl1gDU-j8nznK1jk","ODQwNDM1MjM5NDI2ODUwODI2.YJYKUQ.qTkwnR9WZVEo0bz1G3FcFeO_X9M","ODQwNDM1MTkxODEzNzY3MTg5.YJYKRw.osUBDKl3LlcUma-0RtrqP-PXQE8","ODQwNDM1MjcyNDQ4ODY4NDAy.YJYKWQ.8_MaD3WjSd0ZM32zoFLrmoyDCsg","ODQwNDM1MzE1MTI2OTYwMTc5.YJYKYw.TW3EKoRG8ULKBw_iDoKlZAx_4JI","ODQwNDM1MjQwNDQxODcyMzk0.YJYKUw.GrXZ4lodfnwPj0avuSrCvNabnbA","ODQwNDM1NTAyNDAxNzE2MjU0.YJYKkA.kMdyJeiUOMuKaVJx9ISO5acIlpA","ODQwNDM1NTAyMDc4ODg1OTM4.YJYKkA.SaOP-oqIQTN5p28sJISScCsfiXU","ODQwNDM1NTQ4MDQ0Nzg3NzIy.YJYKmw.FWzgtbQCYd_9_lbEDBApAby6q5g","ODQwNDM1NTUzMTQ0Nzk5MjYz.YJYKnA.d19M2iEmJOJdOrLT1Fa5KqlP4IQ","ODQwNDM1NTcwNDgzMzk2NzA4.YJYKoA.mbaEP9RCLdOnLufYo9Zpo-qwKsY","ODQwNDM1NTc0NTA5OTI4NDg4.YJYKoQ.cmNUL9mA_d3QzjLBnf_sH5RL5yI","ODQwNDM1NjE4NzE4ODEwMTEz.YJYKqw.-9Qam9uyXEYJ5nspO7II8edimx4","ODQwNDM1NTkzNTM2MzQwMDUw.YJYKpg.IPpBMDjU1gYHQaON275iLh5mb8Q","ODQwNDM1NTUzMTExMzc1OTIy.YJYKnA.xt4iZKbUTi1T0RKHQqDcI8Fpjl4","ODQwNDM1NjM4NTg2NzAzOTEz.YJYKsA.OjQKjfpvwRPEQUGHsPodUlV2sUk","ODQwNDM1Njc5NTM5NDk0OTEz.YJYKug.-hxAgKHsb7D0SPSn9X4pzmNANEQ","ODQwNDM1NjkxNTc0MDAxNjk1.YJYKvQ.cwoCC-yzS6qlXAnWkBpMy0zjBDw","ODQwNDM1NjMzMzE0NDYzNzQ0.YJYKrw.38NMPwBqVY5rkoFd-gmll_53aHc","ODQwNDM1Njg3MjIwMzE0MTEy.YJYKvA.q7W_77KBe0yvSfx62GcjhjnLU1Q","ODQwNDM1NzEzNzkwNzA1NzA1.YJYKwg.SLCPcJZmLNFAoe-Ny789rNodsHo","ODQwNDM1NzM4MDYzMTQyOTIy.YJYKyQ.4O6xrkCjuFnSwMVzzO2zBlVWCVw","ODQwNDM1NzMyODQ1NjkwODkw.YJYKxw.uYMymFrPJ0nJhzVLhDbZct6K_Hw","ODQwNDM1NzUzNDg5NTMwODgw.YJYKzA.He1oDCdLQ-FWYwvqoWfGHVwBZu4","ODQwNDM1ODA1ODAxMTUyNTYy.YJYK2Q.EM-D03MlLfQ3gn4iI7ET1pTvDRU","ODQwNDM1ODA5NTcxOTYyOTAw.YJYK2Q.EcfZY0imJX11tv_wnJe4UKwog60","ODQwNDM1Nzc2NjE2NzkyMDc1.YJYK0Q.MM1HYxqbxyWgUKnTwY7_SCIqNlo","ODQwNDM1ODIyMTQ2ODc5NTAw.YJYK3Q.g1CNXxJ12AkpRUvkZ-htNDOUWis","ODQwNDM1ODYwOTQzNjY3MjIy.YJYK5g.4ziaX1ZvldMJlMLKGgjiEc_kFP8","ODQwNDM1ODE4NzM2MjU1MDE3.YJYK3A._EZcqTK1fj-CSEQH0FG1NGNyQbM","ODQwNDM1ODY2OTk5OTgwMDQy.YJYK6A.Ic0f0vDR-vcWowxRlz0JqlsKA6M","ODQwNDM1ODgyODU5NDI5OTA4.YJYK7A.1u7fDP51lhazCn5M0YGsGO0dgKA","ODQwNDM1OTQ3NTU2MDQ0ODkx.YJYK-g.XaUsiOD9WLcTG2K-Um2A0zgfZN4","ODQwNDM1OTYwNzI1ODk3MjI3.YJYK_Q.WqIzElTJE_J-lmG46T_sU1nUsKg","ODQwNDM1OTc1MzAxNDk2ODcy.YJYLAQ.9Mpml16R4czBx78_yOvDY2iI1Y8","ODQwNDM1OTg0NDUyOTQzODgy.YJYLBA.odnPYNEv0M5uxyB9pkgu8Qyibho","ODQwNDM2MDA4MTY3Mjc2NTU1.YJYLCA.N3SYCGky1STmBTWdG7TPbTJ5BZk","ODQwNDM2MDA4NzY4MzcyNzY2.YJYLCQ.HzbmJJ0qSCfVwCfP0BMEmluzM9c","ODQwNDM1OTkyOTUxNjUyMzYz.YJYLBQ.hkwqvGiAy7ZiEhq4zevXF_2QPLc","ODQwNDM2MDQ1NDU5MjI2NjI0.YJYLEQ.t60ZhMrHo4bRl5p17JGCMHkKxZI","ODQwNDM2MDU1NjQzNTIxMDU0.YJYLFA.8cW2RtsViWobwM3fSQFTpzViwCQ","ODQwNDM2MDU5OTkyMjI3ODUx.YJYLFQ._-SkCZIjWZdFKANvhkqhLUcqYec","ODQwNDM2MDk3NzExNjAzODIz.YJYLHg.SMm-IQc0Ue0hJCgr4ruD79THUxI","ODQwNDM2MTkwMTM3ODEwOTk0.YJYLNA.r8jnSVUFB5accHGVVEOS49AiOBg","ODQwNDM2MTk4NDk2NjY1NjAx.YJYLNg.WEr3yBifxWOwHAzy0C9pg3erCCs","ODQwNDM2MTk4MTAzMTg3NDY2.YJYLNw.wtqMiYUwprIiwUkDUXhJmF9uqBE","ODQwNDM2MjI2NTk1MjI1NjMw.YJYLPQ.6O0dqDNx91QfnGDihP9kOpr2mug","ODQwNDM2MjEyMTQwMzQzMzQ2.YJYLOQ.uA-NTWPTjbKPPKgpAbI-cdvZqt0","ODQwNDM2MjE2NjQ1NTUwMDkx.YJYLOw.k7QejRsgNr1UR9n-B3-52V2z_pA","ODQwNDM2MjQ2ODgyMjg3NjQ3.YJYLQg.8j9EZEe6CghyG6VHn6bfnhp_tr8","ODQwNDM2MjM2MjQ1OTI1ODg4.YJYLPw.gVPEts2GNNC3by9vVZ6FIXOHwEM","ODQwNDM2MjQ0OTYxNDI3NDk2.YJYLQQ.dJN3becyMn2vCeFV5yp36u7sJro","ODQwNDM2MjY2NDY2MTQ4Mzcz.YJYLRg.JkSVw6Dei8ILU8M26Pl9_nNnKD8","ODQwNDM2MzExOTMxNjE3MzEw.YJYLUg.QUOY0di0PB4AFi6_XS0JksxYofs","ODQwNDM2MzExOTE4NzcyMjg0.YJYLUg.TKWA5Rhm_SteJPm6FoK-TPLRRBw","ODQwNDM2MzYyODMzODIxNzE3.YJYLXQ.YUkFZseonO1F7vEkwv449yz2LQY","ODQwNDM2NDY3ODU1MjYxNzA3.YJYLdw.yh3eYB9rG73scgUmafV7b5eIlJ8","ODQwNDM2NDcxOTk1MTcwODI2.YJYLeA.QNNZb0QLpDQsELKoFvNWBxDuhBA","ODQwNDM2NDYzODgyNDY5NDY2.YJYLdQ.pr8Qo4wioLUd0iQZZqhD1cAk1Sk","ODQwNDM2NDQ5OTQ5MjUzNjM0.YJYLcg.oCjw9Rk2R6pAEsHMzwl9XPlm6V0","ODQwNDM2NDc4OTE1MTE3MDg2.YJYLeQ.C34_eabFWBDyfiBZux-t7PVUwXI","ODQwNDM2NDczODk4OTkxNjM2.YJYLdw.ETGFTtYeNBDD7WAZ3MaccF1EfSg","ODQwNDM2NDUwNDY0ODkwOTEw.YJYLcg.9uexIAJ79SEha-sITM36j11-ObU","ODQwNDM2NTEwMDE2NTM2NjE2.YJYLgA._xoIL9xArJECyJhYjtvIosEQWvc","ODQwNDM2NTQwNTAwNzM4MDY5.YJYLiA.ydzwuKwyNo-TSqcy8LBwshqbJB4","ODQwNDM2NTE5ODM4Njc5MDYx.YJYLgw.irD15deQ0HEqn3s0jRb-6py-ufc","ODQwNDM2NTg0NTE2MDI2NDM4.YJYLkw.9zsOwR5-GWqjEs0uSB0C4Sp1oBw","ODQwNDM2NjIwNjc0NzI3OTU2.YJYLmg.gl7NozIHlBtRb5m7omKPb8lHkcM","ODQwNDM2NzI0MjQ5Mzk1MjQw.YJYLtA.G988dA6ySn2DSbCl6jW42J57HLc","ODQwNDM2NzE1MjU2MDIxMDAz.YJYLsQ.sQgeKlPBp6QY-ifH7QtxCDBMb58","ODQwNDM2NzM5OTI3MDQ4MjEz.YJYLtw.6k0LtBfHFprL5s9LSexASzH50b0","ODQwNDM2NzYzNzk2MzA3OTY5.YJYLvA.y3AB_UYZqLb9a8goNnVd-2-mBLA","ODQwNDM2NzE2ODY2NTAyNzA2.YJYLsQ.TYB89fxzDm6JahYFBRsG2cD9gq4","ODQwNDM2NzYzMDQ1NjU4NjI0.YJYLvA.mEXuAd3Uh3p03MQMoW0WNzCL-bA","ODQwNDM2Nzg1ODUwNzQ0ODYy.YJYLxA.1BO5QQXt_zFlJ8lTLjBTvyDkjmI","ODQwNDM2NzkxMDQyNzY4OTI2.YJYLxA.znk20ESG1Xan7Rve_9DJM86p37E","ODQwNDM2NzQ1NzQ1MDcyMTI5.YJYLuA.Be4qsQIv80SkHE4OYNeVuZaUPA0","ODQwNDM2Nzg2OTg3OTI1NTA0.YJYLwg.ev2WU294_nTBkUzTMiadqdwQRoM","ODQwNDM2ODU1ODM2NTA4MTkw.YJYL0w._ijXy7g20-IK_yR2_TTas4_Kae0","ODQwNDM2ODczNjAzNDQ4ODQy.YJYL1w.gzKM3dmpksFcG9bDrbJWCPqLmB4","ODQwNDM2OTUzMzc5MTEwOTMz.YJYL6g.A16UST7ty2NOdtgZFYZ5i0o_whQ","ODQwNDM2OTY3OTkyMzI4MjIz.YJYL7Q.zx4l-wWy6As61-4Eo9EyzELwyFU","ODQwNDM2OTYzNTEyNDE4MzA0.YJYL7Q.SFgmYpCiLECFCozq4Hya5Jzy3U4","ODQwNDM2OTc1NjQ3NzE5NDY0.YJYL8A.8Jnke60KNzeNbm2pJQRrPm8Xq6M","ODQwNDM2OTU0ODA2MDkxNzk3.YJYL6w.aRvuHQ3viJMLnSgk04hCw-8pooU","ODQwNDM3MDEzMjE1NTc2MDc0.YJYL-A.rL-U3j-Kk4_VZvwMKmt4Ie-AZzI","ODQwNDM2OTg3NjY3OTM5Mzc4.YJYL8w.VIXcjsg6ACrG3iSVd_kOb0pmEqc","ODQwNDM2OTk3Mzk5MTE3ODM2.YJYL9Q.7VTL5-PKlUdp1uZIx9ybCZCrVbQ","ODQwNDM3MDIyMTQ4OTE5Mjk2.YJYL-g.5D3SqYpzETwhpFIm6s_WK4tqOzc","ODQwNDM3MDE3MTgzOTExOTY4.YJYL-Q.iZPL493KMAJqq-9krvUV6syp4CY","ODQwNDM3MDY3NTQzNzQwNDc2.YJYMBQ.YCbmCGeMADFBps5Cf3BvfN7x46k","ODQwNDM3MDkwNjA0Njc5MTc4.YJYMDA.X5VgvbSQKKF7FXhDsRkbHUeCB0U","ODQwNDM3MTk2MDIwMzgzNzU0.YJYMJA.7uxUSv0GTxMmmdO9ogGDjWrJGJI","ODQwNDM3MjAyNDk1ODY0ODQz.YJYMJw.QWMU9yvqXWIRzr0yfa0UoageBTU","ODQwNDM3MjAyNjQzMzIwOTAy.YJYMJQ.-Uz7zQ4-nRReMVMBzWwKvvuY9Ds","ODQwNDM3MjI3MTMzMjA2NTI4.YJYMLQ.jkn-Kjev21vH0vC9zAMiBNgHad8","ODQwNDM3MjQyNTg0MzY3MTM0.YJYMLw.GRoWiSNxuN_n7O1yj2LoltOYJY0","ODQwNDM3MjEzMDk4ODAzMjQx.YJYMKQ.WG8pwKp6kFOSaiyOzwlr7pI7Dec","ODQwNDM3MjQ5NDMzNjY1NTc2.YJYMMA.Kwzmwt1qSY2Aj1L4FunYZ5Qcc9g"];

for (var i = 0; i < tokens.length; i++) {
  
  const client = new Client();
  client.login(tokens[i]).then(x => console.log(`${client.user.tag} giriş yaptı!`)).catch(err => console.error(err));
 setTimeout(() => { 
  client.on('ready', () => {
  	client.destroy()
   })
  }, i*500)
}
