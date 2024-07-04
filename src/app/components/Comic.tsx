import { formatDistance } from 'date-fns'

async function getData() {
  const params = new URLSearchParams()
  params.append('email', 'a.petuhova@innopolis.university')
  const res = await fetch("https://fwd.innopolis.university/api/hw2?" + params.toString()) 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data1 = await res.json()
  const params2 = new URLSearchParams()
  params2.append('id', data1)
  const res2 = await fetch("https://fwd.innopolis.university/api/comic?" + params2.toString()) 
  if (!res2.ok) {
    throw new Error('Failed to fetch data')
  }
  return res2.json()
}
 
export default async function Comic() {
  const data = await getData()
  const year = Number(data.year)
  const month = Number(data.month)
  const day = Number(data.day)
  const d = new Date(year, month, day)
  const frNow = formatDistance(d, new Date())
  const finalDate = d.toLocaleDateString()
 
  return (
    <main>
      <h1 className="font-sans mt-10 text-5xl bold">{data.safe_title}</h1>
      <h3 className="text-2xl bold mt-6">{finalDate}</h3>
      <h4>{frNow}</h4>
      <img src={data.img} alt={data.alt} />
      <p className="mt-6">{data.alt}</p>
    </main>
  );
}