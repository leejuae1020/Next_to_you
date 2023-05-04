"use client";

import { useRouter } from "next/navigation";
import { IoHome } from "react-icons/io5";

export default function DetailLink() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      <IoHome />
    </button>
  );
}
