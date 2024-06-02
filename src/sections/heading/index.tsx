import { FC } from "react"
import Link from "../../components/link"

import {
  Description,
  DescriptionWrapper,
  HeadingContainer,
  LinkWrapper,
  Name,
  Subtitle,
  TitleWrapper,
} from './styles'

const Heading: FC = () => {
  return (
  <HeadingContainer>
    <TitleWrapper>
      <Name>
        Gabriel Torres
      </Name>

      <Subtitle>
        Software Engineer
      </Subtitle>
    </TitleWrapper>

    <DescriptionWrapper>
      <Description>
        Hi! I&apos;m a developer and I find my greatest fulfillment solving problems. I&apos;m also into chess, reading and playing football.
      </Description>
    </DescriptionWrapper>

    <LinkWrapper>
      <Link href="https://www.linkedin.com/in/gaabrieltorres7/">
        check out my linkedIn
      </Link>
    </LinkWrapper>
  </HeadingContainer>
)}

export default Heading;