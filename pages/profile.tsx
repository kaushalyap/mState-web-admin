import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const Profile: NextPage = () => {
  const { user } = useAuth();
  return (
    <div>
      <Head>
        <title>User Profile : mState Web Admin</title>
        <meta name="description" content="User Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container lg:mx-auto px-4 lg:px-6 md:px-6 py-8">
        {user ? (
          <div className="md:mt-6">
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Basic Info</h2>
              <div className="text-lg lg:text-xl">John Doe</div>
              <div className="text-lg lg:text-xl">No 26th, Neverland</div>
              <div className="text-lg lg:text-xl">+77 123 456 7</div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Guardian Info
              </h2>
              <div className="text-lg lg:text-xl">Marcus Bell</div>
              <div className="text-lg lg:text-xl">+77 123 456 7</div>
            </div>
          </div>
        ) : (
          <Link href="signin/">Sign In</Link>
        )}
      </main>
    </div>
  );
};

export default Profile;
