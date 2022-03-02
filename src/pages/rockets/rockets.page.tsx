import { FC } from 'react';
import styled from 'styled-components';
import { GetRocketsQuery } from '../../graphql/generatedModel';
import { RocketCard } from '../../shared/components/rocketCard/rocketCard.component';

const Rockets: FC<IRocketsProps<GetRocketsQuery>> = ({ data }) => {
  const rockets = data.rockets?.map((rocket) => {
    return <RocketCard key={rocket!.id} data={rocket!} />;
  });
  return <Wrapper>{rockets}</Wrapper>;
};
export default Rockets;
export interface IRocketsProps<T> {
  data: T;
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
`;
