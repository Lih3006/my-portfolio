import { userData } from '../../utils/userData';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { IProject } from '../../providers/projectProvider';

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
    <>
      <ul>
        {repoList.map((project: IProject, index: number) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.created_at}</p>
            <p>{project.description}</p>
            <a href={`${project.html_url}`}>Repo</a>
            <div>
              {languageList[index] &&
                languageList[index].map((tec: string) => (
                  <button key={tec}>{tec}</button>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
