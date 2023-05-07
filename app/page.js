import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

//DB입출력 코드는 serverComponent 에서만 작성하자
//ClientComponent 안에 적은 코드는 유저들도 쉽게 볼 수 있기 때문

//페이지 단위로 캐싱가능 => 서버자원절약 (ISR)
export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // await fetch("/URL", { cache: "force-cache" });

  return <div>안녕!</div>;
}
