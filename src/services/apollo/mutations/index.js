import gql from 'graphql-tag';

export const ADD_EMAIL = gql`
  mutation addEmailCampaing($input: EmailCampaingInput) {
    addEmailCampaing(input: $input) {
      status
      res
    }
  }
`;
