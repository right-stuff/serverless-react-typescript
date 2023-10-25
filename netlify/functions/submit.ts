import { Handler, HandlerEvent } from '@netlify/functions';

export const handler: Handler = async (event:HandlerEvent) => {
  const { name, favoriteColor } = JSON.parse(event.body||'');

  console.log({ name, favoriteColor });

  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      favoriteColor,
      message: `My name is ${name} and my favorite color is ${favoriteColor}.`,
    }),
  };
};