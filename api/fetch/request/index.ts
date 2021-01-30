import { EndPoints } from '@api/fetch';

type Methods = 'GET';

const request = (url: EndPoints, query: string, method: Methods = 'GET'): Promise<Response> => {
  return fetch(`https://hotels4.p.rapidapi.com${url}${query}`, {
    method,
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY || 'api-key',
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    },
  });
};

export default request;
