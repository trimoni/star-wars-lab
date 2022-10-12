const baseUrl = 'https://www.swapi.dev'

export async function getAllStartships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}