import { from } from 'rxjs';
import { gqlClient } from '../../graphql/graphqlRequest';

class RocketService {
  getRockets() {
    return from(gqlClient.getRockets());
  }
}
export const rocketService = new RocketService();
