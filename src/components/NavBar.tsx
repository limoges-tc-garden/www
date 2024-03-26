import { type Component, type FlowComponent, Show, createSignal } from "solid-js";
import { DropdownMenu } from "@kobalte/core";
import { createBreakpoints } from "@solid-primitives/media";
import { BREAKPOINTS } from "~/utils/constants";
import clsx from "clsx";

import MdiChevronDown from '~icons/mdi/chevron-down'
import MdiMenu from '~icons/mdi/menu'
import MdiClose from '~icons/mdi/close'
import MdiTennis from '~icons/mdi/tennis'

const NavBar: Component = () => {
  const vw = createBreakpoints(BREAKPOINTS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

  const SubMenuItem: FlowComponent<{
    href: string;
  }> = (props) => {
    return (
      <DropdownMenu.Item
        class="bg-white hover:bg-gray-100 px-4 py-1.5 rounded-lg text-sm"
        as="a"
        // @ts-expect-error: href is not a valid prop (not inherited from `a`)
        href={props.href}
      >
        {props.children}
      </DropdownMenu.Item>
    )
  };

  const MenuItem: FlowComponent<{
    href: string
    target?: string
  }> = (props) => {
    return (
      <a href={props.href}
        class="hover:bg-gray/20 px-4 py-1.5 rounded-lg w-full text-center tablet:(w-fit) select-none"
      >
        {props.children}
      </a>
    )
  };

  return (
    <nav class="flex gap-2 px-6 py-4.5 border-b items-center flex-justify-end h-[62px]">
      <a class="mr-auto" href="/">
        Limoges TC Garden
      </a>

      <Show when={vw.tablet}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger class="flex gap-2 items-center">
            <span>Mon Club</span>
            
            <DropdownMenu.Icon class="text-lg">
              <MdiChevronDown />
            </DropdownMenu.Icon>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content class="flex flex-col gap-1 border shadow-lg outline-none rounded-lg bg-white min-w-[220px] p-2">
              <SubMenuItem href="/installations">
                Les installations
              </SubMenuItem>
              <SubMenuItem href="/dirigeants">
                Les dirigeants
              </SubMenuItem>
              <SubMenuItem href="/partenaires">
                Nos partenaires
              </SubMenuItem>
              <SubMenuItem href="/enseignement">
                L'enseignement
              </SubMenuItem>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Show>

      <Show when={vw.tablet || isMobileMenuOpen()}>
        <div class={clsx(
          "flex-col gap-2 items-center absolute top-[62px] inset-x-0 bg-white border-b py-4 tablet:(flex relative flex-row inset-auto border-0 p-0)",
          isMobileMenuOpen() ? "flex" : "hidden"
        )}>
          <MenuItem href="/actus">
            Actualités
          </MenuItem>
          <MenuItem href="/tournois">
            Résultats et tournois
          </MenuItem>
          <MenuItem href="/tarif_inscription">
            Inscriptions et tarifs
          </MenuItem>

          <Show when={!vw.tablet}>
            <MenuItem href="/installations">
              Les installations
            </MenuItem>
            <MenuItem href="/dirigeants">
              Les dirigeants
            </MenuItem>
            <MenuItem href="/partenaires">
              Nos partenaires
            </MenuItem>
            <MenuItem href="/enseignement">
              L'enseignement
            </MenuItem>
          </Show>
        </div>
      </Show>

      <a
        class="bg-orange text-white rounded-lg p-2 mobile:(px-4 py-1.5) flex items-center gap-2"
        href="https://tenup.fft.fr/"
        target="_blank"
        title="Réserver un terrain"
      >
        <MdiTennis /> <span class="hidden mobile:block">Réserver un terrain</span>
      </a>

      <Show when={!vw.tablet}>
        <button
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          class={clsx(
            "flex items-center justify-center text-lg p-1.5 hover:bg-gray/20 rounded",
            isMobileMenuOpen() && "bg-gray/20"
          )}
        >
          {isMobileMenuOpen() ? (
            <MdiClose />
          ) : (
            <MdiMenu />
          )}
        </button>
      </Show>
    </nav>
  )
};


export default NavBar;
