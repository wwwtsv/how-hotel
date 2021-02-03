import { EndPoints } from '@api/fetch';
import { Query, Methods } from '@domain/fetch';

const request = (url: EndPoints, query: Query, method: Methods = 'GET'): Promise<Response> => {
  const uri = new URL(`https://hotels4.p.rapidapi.com${url}`);
  Object.keys(query).forEach((param) => uri.searchParams.append(param, query[param]));

  return fetch(uri.href, {
    method,
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY || 'api-key',
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    },
  });
};

export default request;
