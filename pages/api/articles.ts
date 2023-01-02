// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sendQueryToDatabase } from '../../database/sendQueryToDatabase'

type Data = {
  articleID: number
  name: string
  price: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "GET") return;

  const data = await sendQueryToDatabase("select * from articles").catch(err => {
    res.status(500).send([])
    return
  })

  res.send(data)
}