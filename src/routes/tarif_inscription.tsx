import { type FlowComponent, type Component } from "solid-js";
import BrowserTitle from "~/components/BrowserTitle";
import { CLUB_EMAIL, CLUB_PHONE } from "~/utils/constants";

const TarifCard: FlowComponent<{ title: string }> = (props) => (
  <div class="border rounded-lg w-full max-w-[350px] p-4 hover:border-orange">
    <h3 class="font-medium text-xl text-center pb-4">{props.title}</h3>
    {props.children}
  </div>
);

const TarifCardEntry: Component<{ name: string, value: string }> = (props) => (
  <div class="flex justify-between">
    <p class="font-medium">{props.name}</p>
    <p>{props.value}</p>
  </div>
);

const Page: Component = () => {
  return (
    <>
      <BrowserTitle title="Inscriptions et tarifs" />
      <div>
        <h1 class="font-bold text-3xl pb-8 text-center">
          Inscriptions et tarifs
        </h1>

        <section>
          <div class="flex flex-col items-center gap-1">
            <h2 class="font-medium text-xl">Inscription</h2>
            <p>Pour vous inscrire, veuillez nous contacter.</p>
          </div>
          <ul class="text-center px-6 py-2 rounded-lg">
            <li><a class="font-medium" href={`mailto:${CLUB_EMAIL}`}>{CLUB_EMAIL}</a></li>
            <li><a class="font-medium" href={`tel:${CLUB_PHONE.split(" ").join("")}`}>{CLUB_PHONE}</a></li>
          </ul>
        </section>

        <section>
          <h2 class="font-medium text-xl text-center pt-8 pb-6">
            Tarif saison 2024
          </h2>

          <div class="flex flex-wrap gap-4 justify-center px-8 max-w-[1400px] mx-auto">
            <TarifCard title="Baby tennis (4 ans)">
              <TarifCardEntry name="Adhésion obligatoire" value="150 €" />
              <TarifCardEntry name="Cours collectif 1h/semaine" value="inclus" />
              <TarifCardEntry name="Montant déductible" value="5 % soit 7.5 €" />
            </TarifCard>
            <TarifCard title="Mini tennis (5-10 ans)">
              <TarifCardEntry name="Adhésion obligatoire" value="200 €" />
              <TarifCardEntry name="Cours collectif 1h/semaine" value="inclus" />
              <TarifCardEntry name="2e heure de cours collectifs" value="160 €" />
              <TarifCardEntry name="Montant déductible" value="5 % soit 10 €" />
            </TarifCard>
            <TarifCard title="Junior (11-18 ans)">
              <TarifCardEntry name="Adhésion obligatoire" value="320 €" />
              <TarifCardEntry name="Cours collectif 1h/semaine" value="inclus" />
              <TarifCardEntry name="2e heure de cours collectifs" value="160 €" />
              <TarifCardEntry name="Montant déductible" value="	5 % soit 16 €" />
            </TarifCard>
            <TarifCard title="CEC">
              <TarifCardEntry name="Adhésion obligatoire" value="150 €" />
              <TarifCardEntry name="Cours collectif 1h/semaine" value="inclus" />
              <TarifCardEntry name="2e heure de cours collectifs" value="inclus" />
              <TarifCardEntry name="Montant déductible" value="5 % soit 24 €" />
            </TarifCard>
            <TarifCard title="Étudiants">
              <TarifCardEntry name="Adhésion obligatoire" value="200 €" />
              <TarifCardEntry name="Cours collectif 1h/semaine" value="160 €" />
              <TarifCardEntry name="2e heure de cours collectifs" value="160 €" />
              <TarifCardEntry name="Montant déductible" value="20 % soit 40 €" />
            </TarifCard>
            <TarifCard title="Adultes">
              <TarifCardEntry name="Adhésion obligatoire" value="350 €" />
              <TarifCardEntry name="Cours collectif 1h/semaine" value="160 €" />
              <TarifCardEntry name="2e heure de cours collectifs" value="160 €" />
              <TarifCardEntry name="Montant déductible" value="25 % soit 87.5 €" />
            </TarifCard>
          </div>

        </section>

        <section>
          <h2 class="font-medium text-xl text-center pt-8 pb-2">
            Tarif licence
          </h2>
            <p class="text-center max-w-[800px] mx-auto pb-6">
              La licence est obligatoire à la pratique du tennis, elle permet d'être assuré et de participer aux compétitions homologuées individuelles et par équipe.
            </p>

          <div class="mx-auto max-w-[200px] rounded-lg border py-4 px-6 border-orange">

            <div>
              <TarifCardEntry name="6 ans et moins" value="12 €" />
              <TarifCardEntry name="7-18 ans" value="22 €" />
              <TarifCardEntry name="Adulte" value="32 €" />
            </div>
          </div>
        </section>

        <section>
          <h2 class="font-medium text-xl text-center pt-8 pb-6">Informations complémentaires</h2>

          <div class="max-w-[1000px] mx-auto flex flex-col gap-2">
            <p><strong>Adhésion enfant sans cours collectif</strong>: 160 €</p>
            <p><strong>Nouvel adhérent adulte</strong>: 300 € (50 € de réduction)</p>
            <p>15% de réduction à partir de 3 enfants ou plus.</p>
            <p>La lumière est gratuite sous la bulle, soit une économie annuelle d'environ 100€ pour une personne jouant 1h par semaine.</p>
            <p>Les courts sont chauffés gratuitement sous la bulle l'hiver.</p>
            <p>CEC (Centre d'Entraînement de Club) : le joueur s'engage à participer aux matchs par équipe durant toute la saison.</p>
            <p><strong>Modes de règlement acceptés</strong> : en ligne sur TENUP, chèque (à l'ordre du LTCG), prélèvement en ligne, espèces, tickets CAF, coupons sports, chèques vacances, etc.</p>
          
            <p class="font-medium pt-6">Rappel : tout adhérent doit avoir un certificat médical de non contre indication à la pratique du tennis en compétition valable 3 ans et/ou attester avoir rempli le questionnaire de santé, ainsi que de sa licence de l'année sportive.</p>
          </div>

        </section>
      </div>
    </>
  );
};

export default Page;
