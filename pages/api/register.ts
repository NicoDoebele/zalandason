import type { NextApiRequest, NextApiResponse } from 'next'
import { sendQueryToDatabase } from '../../database/sendQueryToDatabase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") return;

  const body = JSON.parse(req.body)

  let success = true

  await sendQueryToDatabase("insert into users values (?,?)", [body.username, body.password]).catch(err => {
    res.status(500).send("Error handling request")
    success = false
  })

  if (success) res.send("Success")
}