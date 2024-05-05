import { type Component } from "solid-js";
import BrowserTitle from "~/components/BrowserTitle";
import { CLUB_ADDRESS, CLUB_EMAIL, CLUB_NAME } from "~/utils/constants";

const Page: Component = () => {
  return (
    <>
      <BrowserTitle title="Mention légales" />
      <main class="max-w-[1000px] mx-auto px-6">
        <h1 class="font-bold text-3xl pb-6 text-center">
          Mention légales
        </h1>

        <h2 class="font-medium text-1xl text-center">
          Protection des données personnelles
        </h2>

        <h3 class="font-medium text-lg py-4">1. Coordonnées personnelles</h3>

        <p>
          Dans certains cas, le club peut être amené à demander aux internautes de laisser leurs coordonnées personnelles, notamment les adresses électroniques et/ou physiques. Ces informations pourront donner lieu à un traitement informatique aux fins de publipostage [envoi de messages promotionnels, d’information etc.] par le club, qui pourra également être amené à les échanger ou les céder à ses partenaires commerciaux. Chacune de ces demandes, consultables le cas échéant aux pages concernées du site Internet du club, est accompagnée d'une case à cocher, autorisant ou non le club à utiliser les données collectées. En cas d'acceptation par la validation de la case correspondant à l’utilisation souhaitée, le club se réserve le droit d'adresser des publipostages à l’utilisateur pour lui proposer des informations, des offres émanant du club ou de ses partenaires commerciaux, et/ou de procéder à l’échange ou à la cession, à titre gratuit ou onéreux, des informations considérées.
        </p>

        <h3 class="font-medium text-lg py-4">2. Droits</h3>

        <p>
          Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril 2016, l'utilisateur bénéficie d'un droit d'accès, de rectification, de portabilité et d'effacement de ses données. L'utilisateur peut également demander la limitation du traitement portant sur ses données personnelles. L'utilisateur peut enfin, pour des motifs légitimes, s'opposer au traitement de ses données personnelles. Sous réserve de la production d'un justificatif d'identité valide, l'utilisateur peut exercer ses droits en contactant le club par courrier ou email :
        </p>
        <div class="m-6">
          <p>{CLUB_NAME}</p>
          <p>{CLUB_ADDRESS.STREET}</p>
          <p>{CLUB_ADDRESS.POSTAL_CODE} {CLUB_ADDRESS.CITY}</p>
          <a href={`mailto:${CLUB_EMAIL}`} class="text-orange font-500">{CLUB_EMAIL}</a>
        </div>

        <p>
        L’utilisateur peut également, pour des motifs légitimes, s’opposer au traitement des données le concernant. L'utilisateur trouvera des informations sur ses droits et devoirs et sur la protection des données individuelles sur le site de la Commission Nationale Informatique et Libertés (www.cnil.fr). Les utilisateurs de ce site Internet sont invités à faire connaître au club leurs remarques sur d'éventuels dysfonctionnement du site au regard des libertés individuelles, à l'adresse indiquée email ci-avant.
        </p>
      </main>
    </>
  )
};

export default Page;
