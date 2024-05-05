import { type Component } from "solid-js";
import { CLUB_ADDRESS, CLUB_ID, CLUB_NAME, FACEBOOK_URL, YOUTUBE_URL } from "~/utils/constants";

import MdiFacebook from '~icons/mdi/facebook'
import MdiYoutube from '~icons/mdi/youtube'

const Footer: Component = () => {
  return (
    <footer class="flex flex-col tablet:flex-row justify-center px-6 border-t p-6 gap-12 tablet:gap-16">
      <div class="flex flex-col items-center gap-4">
        <a href="https://www.fft.fr/" target="_blank" class="flex justify-center">
          <img src="/fft_club_affilie.png" alt="FFT Club Affilié" class="max-w-[250px]" />
        </a>
        <p>CLUB FFT N°{CLUB_ID} - {CLUB_NAME.toUpperCase()}</p>
        <div class="flex gap-6">
          <a href="/legal">
            Mention légales
          </a>
          <a href="https://admin.ltcg.club/">
            Administration
          </a>
        </div>
      </div>

      <div class="flex flex-col-reverse gap-4 items-center text-center">
        <div>
          <p>{CLUB_NAME}</p>
          <p>{CLUB_ADDRESS.STREET}</p>
          <p>{CLUB_ADDRESS.POSTAL_CODE} {CLUB_ADDRESS.CITY}</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.274670176645!2d1.2438680760686913!3d45.82578297108211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fecbf3bb27f3f5%3A0xc6c1b7c2bc57b436!2sLIMOGES%20GARDEN%20TC!5e0!3m2!1sfr!2sfr!4v1688310523377!5m2!1sfr!2sfr"
           class="border-0 rounded-lg max-w-[300px]" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="flex flex-col gap-4">
        <img src="/ltcg.jpg" alt={CLUB_NAME} title={CLUB_NAME} class="max-w-[250px] mx-auto tablet:pb-4" />
        <p class="text-center">
          Retrouvez nous sur les réseaux !
        </p>
        <div class="flex gap-6 text-4xl justify-center items-center text-orange">
          <a href={FACEBOOK_URL} target="_blank">
            <MdiFacebook />
          </a>
          <a href={YOUTUBE_URL} target="_blank">
            <MdiYoutube />
          </a>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
