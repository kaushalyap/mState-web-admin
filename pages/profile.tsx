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
      <main className="p-6 md:grid md:place-items-center h-screen">
        {user ? (
          <div>
            <div>
              <h2>Basic Info</h2>
              <div>
                <span>Name :</span>
                <span>John Doe</span>
              </div>
              <div>
                <span>Address :</span>
                <span>No 26th, Neverland</span>
              </div>
              <div>
                <span>Mobile No :</span>
                <span>+77 123 456 7</span>
              </div>
            </div>
            <div>
              <h2>Guardian Info</h2>
              <div>
                <span>Full Name :</span>
                <span>Marcus Bell</span>
              </div>
              <div>
                <span>Mobile No :</span>
                <span>+77 123 456 7</span>
              </div>
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
