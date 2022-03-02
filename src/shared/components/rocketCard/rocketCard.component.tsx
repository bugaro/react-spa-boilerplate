import { FC } from 'react';
import styled from 'styled-components';
import { Rocket } from '../../../graphql/generatedModel';
import { Colors } from '../../../styles/colors';

export const RocketCard: FC<IRocketCardProps> = ({ data }) => {
  return (
    <Card>
      <h1>{data.name}</h1>
      <Desc>{data.description}</Desc>
    </Card>
  );
};
export interface IRocketCardProps {
  data: Pick<Rocket, 'name' | 'description'>;
}
const Card = styled.div`
  width: calc(25% - 2 * 15px);
  min-height: 240px;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0.8rem 0.8rem 1.4rem ${Colors.greyLight2}, -0.2rem -0.2rem 1.8rem white;
  background-color: ${Colors.greyLight1};
`;
const Desc = styled.p`
  font-size: 1.2em;
`;
