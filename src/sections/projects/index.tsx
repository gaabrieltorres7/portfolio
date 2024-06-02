import axios from "axios"
import { FC, useEffect, useState } from "react"
import { tagColors } from "../../assets/theme"
import Card from "../../components/card"
import Link from "../../components/link"
import {
  CardsWrapper, Credits, HeadingWrapper,
  SectionWrapper, Title,
} from './styles'


interface Repo {
  id: number;
  name: string;
  language: string;
  description: string;
  svn_url: string;
}

const Projects: FC = () => {
  const [projects, setProjects] = useState<Repo[]>([]);
  const getProjects = async () => {
    try {
      const { data } = await axios.get<Repo[]>('https://api.github.com/users/gaabrieltorres7/repos');

      const reposIds = [687777590, 634353005, 719269851, 694403867]

      const filteredData = data.filter((repo) => reposIds.includes(repo?.id));
      
      setProjects(filteredData);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <SectionWrapper>
      <HeadingWrapper>
        <Title>Projects</Title>
        <Link href="https://github.com/gaabrieltorres7">see more on my github</Link>
      </HeadingWrapper>

      <CardsWrapper>
        {projects.map((project) => {
          const language = project.language.toLowerCase() as keyof typeof tagColors;

          return (
            <Card 
              key={project.id}
              title={project.name}
              tags={project.language ? [{
                label: project.language,
                color: language,
              }] : []}
              description={project.description}
              href={project.svn_url}
            />
        )})}
      </CardsWrapper>

      <Credits>enhanced by Github REST API</Credits>
    </SectionWrapper>
  )
};

export default Projects;