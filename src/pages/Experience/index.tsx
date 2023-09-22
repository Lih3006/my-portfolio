import { userExperience } from '../../utils/userExperience';
import { StyledExperienceContainer } from './style';

const Experience = () => {
  /*  useEffect(() => {}); */

  return (
    <StyledExperienceContainer>
      <h2 className='container--about container--experience-title'>
        EXPERIENCE
      </h2>
      <ul>
        {userExperience.map((experience) => (
          <li key={experience.id}>
            <div>
              <p className='container--experience-subtitle'>
                {experience.period}
              </p>
            </div>
            <h2 className='container--experience-title'>{experience.name}</h2>
            <h3 className='container--experience-details'>
              {experience.place + ' - ' + experience.country}
            </h3>
            <p className='container--experience-text'>
              {experience.description}
            </p>
          </li>
        ))}
      </ul>
    </StyledExperienceContainer>
  );
};

export default Experience;
