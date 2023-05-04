"use client";

import Link from "next/link";
import { BsPencilFill } from "react-icons/bs";
import { IoTrashBin } from "react-icons/io5";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + result[i]._id}>
            <h4>{result[i].title} </h4>
          </Link>

          <Link href={"/edit/" + result[i]._id}>✏️</Link>

          <button
            className="list-btn"
            onClick={(e) => {
              //   fetch("/api/post/delete", { method: "DELETE", body: result[i]._id })
              //   .then(() => {
              //     e.target.parentElement.style.opacity = 0;
              //     setTimeout(() => {
              //       e.target.parentElement.style.display = "none";
              //     }, 1000);
              //   });

              fetch("/api/test?name=Lee&age=32");
            }}
          >
            🗑️
          </button>

          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
