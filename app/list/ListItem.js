"use client";

import Link from "next/link";

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
              fetch("/api/post/delete", { method: "DELETE", body: result[i]._id }).then(() => {
                e.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  e.target.parentElement.style.display = "none";
                }, 1000);
              });
<<<<<<< HEAD

              fetch("/api/abc/Lee");
=======
>>>>>>> b207a5243507c53114d34b786d2606880be255ee
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
