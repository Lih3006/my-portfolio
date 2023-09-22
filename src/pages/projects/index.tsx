import ProjectList from '../../components/ProjectsList';
import { StyledProjectContainer } from './style';

const Projects = () => {
  return (
    <StyledProjectContainer>
      <h2 className='container--project container--project-title'>PROJECTS</h2>
      <ProjectList />
    </StyledProjectContainer>
  );
};

export default Projects;
