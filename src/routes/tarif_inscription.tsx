import { type FlowComponent, type Component } from "solid-js";

const TarifCard: FlowComponent<{ title: string }> = (props) => (
  <div>
    <h3>{props.title}</h3>
    {props.children}
  </div>
);

const TarifCardEntry: Component<{ name: string, value: string }> = (props) => (
  <div class="flex justify-between">
    <p>{props.name}</p>
    <p>{props.value}</p>
  </div>
);

const Page: Component = () => {
  return (
    <div>
      <h1>Inscriptions et tarifs</h1>

      <section>
        <h2>Inscription</h2>
        <p>Pour vous inscrire, veuillez nous contacter :</p>
        <ul>
          <li>Adresse email: <a href="mailto:contact@ltcg.eu">contact@ltcg.eu</a></li>
          <li>Téléphone: <a href="tel:0555342408">05 55 34 24 08</a></li>
        </ul>
      </section>

      <section>
        <h2>Tarif saison 2024</h2>

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
      </section>

      <section>
        <h2>Tarif licence</h2>
        <p>La licence est obligatoire à la pratique du tennis, elle permet d'être assuré et de participer aux compétitions homologuées individuelles et par équipe.</p>
        <ul>
          <li>6 ans et moins: 12 €</li>
          <li>7-18 ans: 22 €</li>
          <li>Adulte: 32 €</li>
        </ul>
      </section>

      <section>
        <h2>Informations complémentaires</h2>

        <p>Adhésion enfant sans cours collectif: 160 €</p>
        <p>Nouvel adhérent adulte: 300 € (50 € de réduction)</p>
        <p>15% de réduction à partir de 3 enfants ou plus</p>
        <p>La lumière est gratuite sous la bulle, soit une économie annuelle d'environ 100€ pour une personne jouant 1 h par semaine.</p>
        <p>Les courts sont chauffés gratuitement sous la bulle l'hiver.</p>
        <p>CEC (Centre d’entraînement de club) : le joueur s'engage à participer aux matchs par équipe durant toute la saison.</p>
        <p>Modes de règlement acceptés : en ligne sur TENUP, chèque (à l'ordre du LTCG), prélèvement en ligne, espèces, tickets CAF, coupons sports, chèques vacances, etc.</p>
        <p>Rappel : tout adhérent doit avoir un certificat médical de non contre indication à la pratique du tennis en compétition valable 3 ans et/ou attester avoir rempli le questionnaire de santé, ainsi que de sa licence de l'année sportive.</p>
      </section>
    </div>
  );
};

export default Page;
