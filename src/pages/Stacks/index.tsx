import HelloComponent from '../../components/HelloComponent';

import { stackData } from '../../utils/stackData';

const Start = () => {
  return (
    <div>
      <HelloComponent />
      <div>
        <h2>My Techs</h2>
        <ul>
          {stackData.map((stack) => {
            return (
              <li key={stack.title}>
                <div>{stack.title}</div>
                <div>{<stack.reactIcon />}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Start;
