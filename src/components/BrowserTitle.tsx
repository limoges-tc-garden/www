import { type Component } from "solid-js";
import { Title } from "@solidjs/meta";
import { CLUB_NAME } from "~/utils/constants";

const BrowserTitle: Component<{ title?: string }> = (props) => {
  const title = () => {
    const prefix = props.title ? props.title + " - " : "";
    return prefix + CLUB_NAME;
  };

  return <Title>{title()}</Title>;
}

export default BrowserTitle;