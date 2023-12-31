import React from 'react'
import Header from './header/Header'
import "./Home.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from '../../components/Footer';
import FeedbackComponent from './feedback/FeedbackComponent';

export default function Home() {
    return (
        <div className='home'>
            <Parallax pages={5.25} style={{ backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('https://lh3.googleusercontent.com/pw/ABLVV85FMGC1pBHQuudpEVCPBUVehFRCf810duLurtyxlc6aIXCP7f7SdDMSsS2E3vODmT0yUJytYQaEDjJekAtEPIRrMBWSjRhbNKRN-1qgwiH677ZT0xNohG1VvFG-Gw5MeEDpGPrIt86w2F4OtEmwjdCSdBx6ijLSY9JLcJwJauIt8Y5Anb6IuePjz5c2sHvnIcXfKtKLNJy2-jjIp89uIYA-drIYrphUz_WSTBQsBdMLrXl3FyVIb4SK_JkOQUmJuIg7_OovCJiQSdDceT9VINbMEV1LcH7hKNoUnwOek7BN3vFE1CAmr9TgbIk4gMpXiplWh6GryDGVo2KgR0DTsDie4W-Xi7HELH3yrd33vzcP2zt0LlNzc3bxTCR8gsVrbpcW0hxJMKHnp92u-kLovV0QVAYd5J7yLdOx6ypZHvp7CNZTt-OB6eTuYxs_HtMWnZ_UVcaZbxVxfE0924dOOzIPUvcF_timWdN78TapbX8fjFKnZCqmqFgR7kO5-SWVQTBQ6TpG1nO9nUQX3ECCIy6n9SZ5cefNYg6ZD6TOXKl4FmMcuG3Lgku8yx0ZrpfdHnraWY9cuqyJt5q3fJUmhwrxjGtDhDUiataiLac0Ju58Rrkcg20Z4WBbu_kITCHcwfzpfSOZaK2LaLgxH8lPhVH48yZr7bcmMnGxOlZ6QxDI83-aQm28-dZ7c8R69SB9tZilzckEbcPtRea99538Jb0tcWibfxZkzkE9NM--dKoPWhZf1eTm_nNIvxxYxVaUUbE5MJtbEbR49YQLr1aqQgd1aYawD18VTWmTr_mmjJm-sYUN-t4qfg2qrPJRSUarVDU7JSmNILLftd-44Bwj_IaDu0recYHToW9yKqbJMXLoBKFmKkRkdLqTRtv9GE77pT8hIQxJpOB26H-L7FBzVrFU21czl8yahDTJNs7dQ3qORdRXO3MwmJesNtbPHAsAu1bFDb0aoB_miRtINESlCTeHFCXnvyvf0A0UKehGTtcXfNE=w1932-h1586-s-no-gm?authuser=0')" }}>
                <ParallaxLayer factor={3} style={{ backgroundColor: "#a1866a" }}>

                </ParallaxLayer>
                <ParallaxLayer>
                    <Header />
                </ParallaxLayer>
               
                <ParallaxLayer offset={1}  style={{ height: "160vh", width: "100vw" }}>
                    <div className="div2" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/ABLVV87AZnZgANp-aN594fgvxhSLO2hRHSTa7jynE_0IiiiwyEuumJt_8lHXIvpMYSa2WzjYGZairsMX7vJLA1ENOsq-PLASSw8lSZDIqfRFLvr-MMUui-Bc0ToNksrRSIO3m-4j8mRcjdAaHieCtnsUbZoKOqFGIUhlIVS6O86D9BZ5zY498J6pc3ea5Hy6Ih9kvRcqdHVdMqICXN6d8P6jzAap9gfrFNu2vU4R_CJqZhcHT0xNuGG01iZ7vXtNhJ-1HX7J-i4Q2bLGzrpPSLhrxH_Erc55sjS4SSKYZUMKvrC1UP_ZgjN_YMVgr25LIgyj0v3Gys5SfJgXbNZeBZq-uYIAIQ4vV_zetcaACE7ZNOo3N4RT-x6XQDd3eefBCbsdeAoFxSM9KQwtCENWjjTfGxa1Y5xS1PxJPoNJRqlXLUa_nl_XLdcr3QyEyGcGY4M2Skbfs08mbY_otfHf-KqP7p78XegMmVvOs9jEZahWSTfsoOWMQciP-84ChvXi_OQige6MV8AJcZbDomyWnPQAEIhp_Y_wwOWH37RDe-uymLZrcfsxVhOrGmEqTWSgykk5JCTfm3GDhvgDH9hmlvzcQw37dboUCDbksDjI8Qay_WFY5eF4QK2-2sC4PNt8IRapJwuMzmSVUOnjsz2ltnTnvn8ktyESSO01yQ1RZ0RthodqFv3ZNWz6cL2RSEBH5DY3ohgZtNamh77PXHQsXD50ga3qVhqDdcDCvhnDIyLDcOGMTjboqKal-1MhpxbZ4PcjxwZdg-AHWE2RBWe8h09cbE0VsyWUCHwc1gsX7VS6eMmxwgFh5OdqNEa-17AcXfCB4ZZH91TGj_K49B4W5F4S7yyA5S8nLSxKmBuSB6s8sZhwGukQ7ndYfA4j31Lg_J8JavF96_WJp0jBTNBcSgGKPDHrWTiMijo3HUOiwu2BwQSNeVAV4XyJob4c49989KjkJ_x9yTlYdKdZeR725f3BktIZi7AHrRZM2XgoBebxm6D7_VI=w520-h691-s-no-gm?authuser=0')" }}></div>
                    <div className="div3" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/ABLVV85JB8UeBXbTfAoCnd1jKR6hybDRayulzFcy5H-Eec3uu68gFYjuHgM1-cnGQsUnKNgUGFVuVC8MjSULARM96eS8oePfJhdoMzAr8pvzbVcV9MUk-6rB_CrvCQFVWlpV0msfbgBR9Pu9HVGpDRraycyJOgtK5MHhKr1qS5CkdW8cbDEatnCjkmvrudG9Mxai2M2vUeu2oKWlG1Ar3bg2f7zeK2fenWN_WUY9qwglO24QMkMMz7Wh-p0NVaOI8IjELJxe2p2fq6b7rg9NyF17FvT_hrkffuJ8hX_Mb4RuywnNaS6aHyevHdd_t93hGZqjT1yDcKw_8aycPu1MAXPjpbYXy9YwZ_Cpu7vissaXNvN5zqfYlMxFMCJfC0GAG09qNTrtXjURljaxuACe0qsK9zxadv42H6l69TEN98hv7WSTBxtU_oM6_Wn2s8lYsNDwLBOzfNWrn6NRhqGNdcrCBjHJdqN5oo3bdoZWCTO2CBp8FxKiVkM2a46Sk3d916IzQjs3UX6-z0-CObwTmGkY9ysH5ALx7TYsaOpx28XhuDOY5SrR9ZlqdrHiYMRg4NfMQUd47gYRxrzuVcAUqC7KBta4Wwa7ZIMMwQFsYEHpGkbgVAVbeOr0d5YH8EEQuT_uxr42Uz6C-G5Wl7eAASDKPN1UlGqwbWE_EnGAhSbu9PXjwIPxcSKak7-dRRE-IhqtvqYQPjMsa4PdKQmXayvuVpCpxnDaZriQzsVpDkuXnDFaHIgOqwGIjAyITmxHM3Wlkl4LkVz-dvsx71E99FF6kfdTaQM0uyWJ9SRQ7zP-Fp_yA5fAQE4FRtkN6dMIRBZydWtKleV1bmccZRq9cH_cA2-7-EdyDttV5RKlVZir7gyP2g09Usy1zDvYtg9Kr2K5pY-pQa9PxIe2Jx8EbgIYwYitX_2RR_lOs5PrE8t6Bs4QU1lCqXGu-EPjZEvTT4olSmjhswEchhiC2MtwyUPXuhX97Jti2LA0ovler6tmOl7_56E=w607-h843-s-no-gm?authuser=0')" }}></div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ height: "200vh", width: "100vw" }}>
                    <div className="textLayer">
                        <div className="div1">
                            The concept of string art revolves around simple tools like a wooden board or a canvas, thread and nails.
                            <br /><br /><br />
                            Mary Everest Boole introduced String art in the 19th Century as a way to teach kids more about maths and mathematical formulas.
                        </div>
                        <div className="div4">
                            Each string of art creates thousands of memories, these arts are generally made by unemployed, uneducated women in rural and urban areas with the help of some engineers.
                            <br /><br /><br />
                            Each customer is helping in women empowerment.
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} style={{ height: "100vh", width: "100vw", backgroundColor: "black", opacity: "60%" }}>
                    <div className="window-component">
                        <div className="window-text">
                        In the realm of string art, our greatest achievement lies in seamlessly intertwining creativity and precision, transforming simple threads into intricate masterpieces that captivate the eye and celebrate the harmonious marriage of craftsmanship and imagination.                        
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} style={{ backgroundColor: "#a1866a" }}>
                    <div className="feedback-footer">
                        <FeedbackComponent />
                        <Footer />
                    </div>
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}
