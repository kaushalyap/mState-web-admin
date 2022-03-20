import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { User } from "../../models/User";
import { readUser } from "../../services/ReadData";

const Profile: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (router.isReady) {
      let uid = router.query.uid?.toString();
      readUser(uid!!).then((item) => {
        if (item) {
          setProfile(item);
          setLoading(false);
        }
      });
    }
  }, [setProfile, setLoading, router.isReady, router.query]);

  return (
    <div>
      <Head>
        <title>User Profile : mState Web Admin</title>
        <meta name="description" content="User Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container lg:mx-auto px-4 lg:px-6 md:px-6 py-8">
        {user ? (
          !loading ? (
            <div className="md:mt-6">
              <div className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Basic Info
                </h2>
                <div className="text-lg lg:text-xl">{profile.name}</div>
                <div className="text-lg lg:text-xl">{profile.address}</div>
                <div className="text-lg lg:text-xl">{profile.mobileNo}</div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Guardian Info
                </h2>
                <div className="text-lg lg:text-xl">
                  {profile.guardian.fullName}
                </div>
                <div className="text-lg lg:text-xl">{profile.mobileNo}</div>
              </div>
            </div>
          ) : (
            <h1>Loading data...</h1>
          )
        ) : (
          <h1>Unauthorized</h1>
        )}
      </main>
    </div>
  );
};

export default Profile;
