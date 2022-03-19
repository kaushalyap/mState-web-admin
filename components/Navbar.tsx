import React from "react";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const { logOut } = useAuth();
  const router = useRouter();

  return (
    <nav className="h-24 bg-green-600 px-2 md:px-4 flex">
      <div className="container mx-auto flex justify-between items-center xl:ml-20">
        <Link href="/" passHref>
          <div>
            <Image
              className="rounded-lg cursor-pointer"
              src="/logo.svg"
              width={70}
              height={70}
              alt="mState logo"
            />
          </div>
        </Link>
        {router.pathname != "/login" ? (
          <button
            className="text-white font-bold tracking-wider text-lg xl:mr-12 2xl:mr-0 cursor-pointer"
            onClick={() => {
              logOut();
              router.push("/login");
            }}
          >
            Sign Out
          </button>
        ) : null}
      </div>
    </nav>
  );
}
