import { ITag } from '../../providers/projectProvider';
import { StyledTagText } from './style';
const Tag = ({ tec }: ITag) => {
  return <StyledTagText>{tec}</StyledTagText>;
};

export default Tag;
