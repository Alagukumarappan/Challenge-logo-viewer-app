import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_CHALLENGES = gql`
{
  allChallenges{
    edges {
      node {
				title
        teaser
        logo
      }
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(private apollo: Apollo) { }

  getChallenges(): Observable<ApolloQueryResult<any>> {
    return this.apollo
      .watchQuery({
        query: GET_CHALLENGES,
      })
      .valueChanges
      .pipe(map(result => {
        // if (result.data) {
        //   // return (result.data as any).allChallenges.edges;
        // }
        return result.data as any;
      }));
  }
}
