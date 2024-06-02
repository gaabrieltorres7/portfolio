import { FC } from "react"
import { ReactComponent as Icon } from "../../assets/images/link.svg"
import { LinkAnchor } from "./styles"

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link: FC<LinkProps> = ({ children, href }) => {
  return (
    <LinkAnchor href={href} target="_blank">
      {children}
      <Icon />
    </LinkAnchor>
  )
};

export default Link;
