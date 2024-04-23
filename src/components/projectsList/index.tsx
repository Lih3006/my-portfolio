import { userData } from '../../utils/userData';
import {formatProjectName} from '../../utils/formattedName';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { IProject } from '../../providers/projectProvider';
import { StyledProjectListContainer } from './style';
import Tag from '../Tags';

const ProjectList = () => {
  const [repoList, setRepoList] = useState<IProject[]>([]);
  const [languageList, setLanguageList] = useState<Array<Array<string>>>([]);

  useEffect(() => {
    const getRepos = async () => {
      const repos = await api.get(`/users/${userData.githubUser}/repos`);
      const allRepos: IProject[] = repos.data;
      const allLanguages: string[][] = [];

      for (let i = 0; i < allRepos.length; i++) {
        if (allRepos[i]) {
          const { data } = await api.get(
            `/repos/${userData.githubUser}/${allRepos[i].name}/languages`
          );

          allRepos[i].languages = Object.keys(data);
          allLanguages.push(allRepos[i].languages);
          setRepoList(allRepos);
        }
      }
      setLanguageList(allLanguages);
    };
    getRepos();
  }, []);

  return (
    <StyledProjectListContainer>
      {repoList.map((project: IProject, index: number) => (
        <li key={project.id}>
          <h2 className='container--project-list-title'>{formatProjectName(project.name)}</h2>
          <p className='container--project-text'>{project.description}</p>
          <div className='container--project-links'>
            <a target='_blank' href={`${project.html_url}`}>
              <i className='fa-brands fa-github'></i> git repository
            </a>
            {project.homepage && (
              <a href={project.homepage} target='_blank'>
                <i className='fa-solid fa-arrow-up-right-from-square'></i>{' '}
                webpage
              </a>
            )}
          </div>
          <div className='container--project-list-tags'>
            {languageList[index] &&
              languageList[index].map((tec: string, index: number) => (
                <Tag key={tec + index} tec={tec}></Tag>
              ))}
          </div>
        </li>
      ))}
    </StyledProjectListContainer>
  );
};

export default ProjectList;
