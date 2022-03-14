import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const Home: NextPage = () => {
  const { user, signOut } = useAuth();
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>mState Web Admin</title>
        <meta
          name="description"
          content="Web Admin to monitor mState mobile app users"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 md:grid md:place-items-center h-screen">
        {user ? (
          <button
            onClick={() => {
              signOut();
              router.push("/signin");
            }}
          >
            Sign Out
          </button>
        ) : (
          <Link href="signin/">Sign In</Link>
        )}
      </main>
    </div>
  );
};

export default Home;
