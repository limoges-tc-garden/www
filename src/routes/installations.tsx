import { type Component } from "solid-js";

const Counter: Component<{
  amount: number
  description: string
}> = (props) => {
  return (
    <div class="flex flex-col">
      <p>{props.amount}</p>
      <p>{props.description}</p>
    </div>
  );
};

const Page: Component = () => {
  return (
    <main>
      <section>
        <h2>Les terrains</h2>
        <div class="flex">
          <Counter amount={4} description="Terrains au total" />
          <Counter amount={4} description="Courts en terre battue traditionnelle extérieurs" />
          <Counter amount={3} description="Courts en terre battue traditionnelle couverts l'hiver" />
        </div>

        <div class="flex flex-wrap">
          <img src="/courts_terre_ext.jpg" />
          <img src="/courts_couverts.jpg" />
          <img src="/courts_terre_ext_2.jpg" />
          <img src="/courts_couverts_2.jpg" />
        </div>
      </section>

      <section>
        <h2>Le club house</h2>
        <p>Le cœur de notre club est notre grand Club House. C'est un espace convivial destiné à nos membres et visiteurs. À l'intérieur, vous trouverez des vestiaires modernes pour vous préparer confortablement avant ou après vos matchs. Nous avons également veillé à fournir des sanitaires propres et pratiques pour votre commodité. Et pour ceux qui souhaitent se détendre, notre bar offre une atmosphère accueillante, parfaite pour déguster un rafraîchissement ou échanger après une partie.</p>
        <img src="/clubhouse.jpg" />
      </section>
    </main>
  );
};

export default Page;
