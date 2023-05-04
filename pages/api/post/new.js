import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목왜안써요");
    }
    if (req.body.content === "") {
      return res.status(500).json("내용왜안써요");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).redirect("/list");
  }
}

//서버는 요청 받으면 DB에 글저장
//DB에 document 하나 발행은 insertOne(데이터)
//응답과 동시에 페이지 이동시키려면 res.status(200).redirect("/경로");
