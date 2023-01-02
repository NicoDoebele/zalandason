import type { NextApiRequest, NextApiResponse } from 'next'
import { sendQueryToDatabase } from '../../database/sendQueryToDatabase'
import { articlesStructure } from '../../interfaces/databaseStructures';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<articlesStructure[] | null>
) {

  if (req.method !== "GET") return;

  const data = await sendQueryToDatabase("select * from articles").catch(err => {
    res.status(500).send(null)
    return
  }) as articlesStructure[]

  res.send(data)
}