interface Environment {
  production: boolean;
  apiEndpoint: string;
}
export const environment: Environment = {
  production: false,
  apiEndpoint: process.env['API_BE_ENDPOINT'] || 'http://localhost:3000',
};
