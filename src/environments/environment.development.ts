
interface Environment {
    production: boolean;
    apiEndpoint: string;
  }
  export const environment: Environment = {
    production: false,
    apiEndpoint: 'http://localhost:3000',
  };