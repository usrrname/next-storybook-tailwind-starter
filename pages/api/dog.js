// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  req = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'localhost:3000',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  }
  const fetchDogPics = await fetch('https://dog.ceo/api/breeds/image/random', req)
  const data = await fetchDogPics.json().catch(err => console.warn(err))
  return res.status(200).json(data)
}
