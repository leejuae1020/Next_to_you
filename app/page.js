import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

//DB입출력 코드는 serverComponent 에서만 작성하자
//ClientComponent 안에 적은 코드는 유저들도 쉽게 볼 수 있기 때문
export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return <div>안녕!</div>;
}
