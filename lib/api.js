import Vimeo from 'vimeo';

const client = new Vimeo(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.ACCESS_TOKEN);

async function fetchAPI() {
  const res = await client.request({
    method: 'GET',
    path: '/tutorial',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer `
    }
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  })
}