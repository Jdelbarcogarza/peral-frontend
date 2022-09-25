
import clientPromise from "../../lib/mongodb"

export default async function handler(req, res){

    const client = await clientPromise

    const DB_NAME = 'HackMTY'

    const db = client.db(DB_NAME)

    let users = await db.collection("pipe_points").find({}).toArray()
    res.status(200).json({users})
}