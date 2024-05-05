import { type Component } from "solid-js";
import BrowserTitle from "~/components/BrowserTitle";

const Counter: Component<{
  amount: number
  description: string
}> = (props) => {
  return (
    <div class="flex flex-col justify-center items-center border-2 border-orange px-6 py-4 rounded-lg w-fit mx-auto tablet:mx-0">
      <p class="text-2xl text-orange font-bold">
        {props.amount}
      </p>
      <p>{props.description}</p>
    </div>
  );
};

const Page: Component = () => {
  return (
    <>
      <BrowserTitle title="Installations" />
      <main>
        <section class="flex flex-col gap-8">
          <h2 class="font-medium text-3xl text-center">Les terrains</h2>
          
          <div class="flex justify-center gap-6 tablet:flex-row flex-col-reverse">
            <Counter amount={4} description="Terrains au total" />
            <Counter amount={4} description="Courts en terre battue traditionnelle extérieurs" />
            <Counter amount={3} description="Courts en terre battue traditionnelle couverts l'hiver" />
          </div>

          <div class="flex flex-wrap gap-10 px-6 justify-center max-w-[1000px] mx-auto">
            <img class="w-full tablet:max-w-[400px] rounded-lg" src="/courts_terre_ext.jpg" />
            <img class="w-full tablet:max-w-[400px] rounded-lg" src="/courts_couverts.jpg" />
            <img class="w-full tablet:max-w-[400px] rounded-lg" src="/courts_terre_ext_2.jpg" />
            <img class="w-full tablet:max-w-[400px] rounded-lg" src="/courts_couverts_2.jpg" />
          </div>
        </section>

        <section>
          <h2 class="font-medium text-3xl text-center pt-12 pb-6">Le club house</h2>

          <div class="flex gap-4 mx-auto tablet:flex-row tablet:max-w-[1000px] flex-col px-6">
            <img src="/clubhouse.jpg" class="tablet:w-[400px] w-full rounded-lg" />
            <p class="text-justify">Le cœur de notre club est notre grand Club House. C'est un espace convivial destiné à nos membres et visiteurs. À l'intérieur, vous trouverez des vestiaires modernes pour vous préparer confortablement avant ou après vos matchs. Nous avons également veillé à fournir des sanitaires propres et pratiques pour votre commodité. Et pour ceux qui souhaitent se détendre, notre bar offre une atmosphère accueillante, parfaite pour déguster un rafraîchissement ou échanger après une partie.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
