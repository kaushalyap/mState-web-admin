import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import DataTable from "../components/DataTable";

const Home: NextPage = () => {
  const { user } = useAuth();
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
      <main>
        {user ? (
          <>
            <div className="pt-10 md:px-4 mx-auto container">
              <DataTable />
            </div>
          </>
        ) : (
          router.push("login/")
        )}
      </main>
    </div>
  );
};

export default Home;
