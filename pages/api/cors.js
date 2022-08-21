export default function Cors(res, req) {
  req.headers['Access-Control-Allow-Origin'] = '*'
  req.headers = {
    'Access-Control-Allow-Origin': 'localhost:3000, localhost:3001',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  }

  const response = res.json()

  return {
    statusCode,
    headers,
    body: JSON.stringify(response)
  }

}