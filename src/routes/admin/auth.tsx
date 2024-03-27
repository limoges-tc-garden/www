import { authenticate } from "~/client/user";
import { createSignal } from "solid-js";

import { TextField } from "@kobalte/core";
import ShowWhenNotAuthenticated from "~/components/admin/ShowWhenNotAuthenticated";

export default function Page () {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleLogin = async (event: SubmitEvent) => {
    event.preventDefault();

    const emailValue = email();
    const passwordValue = password();

    // On ne fait rien si les champs sont vides.
    if (!emailValue || !passwordValue) return;

    // On authentifie l'utilisateur.
    await authenticate(emailValue, passwordValue);
  };

  return (
    <ShowWhenNotAuthenticated>
      <form onSubmit={handleLogin}>
        <TextField.Root value={email()} onChange={setEmail}>
          <TextField.Label>
            E-Mail
          </TextField.Label>
          <TextField.Input type="email" />
        </TextField.Root>

        <TextField.Root value={password()} onChange={setPassword}>
          <TextField.Label>
            Mot de passe
          </TextField.Label>
          <TextField.Input type="password" />
        </TextField.Root>
      </form>
    </ShowWhenNotAuthenticated>
  )
};
