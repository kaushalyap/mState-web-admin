import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import DataTable from "../components/DataTable";
import DataRow from "../components/DataRow";

const Home: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const elements = [
    {
      uid: "jaslvnavsvl",
      name: "John Doe",
      test1: { type: "EPDS", score: 8.0, date: "12/03/22" },
      test2: { type: "PHQ9", score: 15.0, date: "12/03/22" },
      test3: { type: "EPDS", score: 30.0, date: "12/03/22" },
      test4: { type: "EPDS", score: 17.0, date: "12/03/22" },
      test5: { type: "EPDS", score: 26.0, date: "12/03/22" },
      settings: { sms: true, call: false },
    },
    {
      uid: "ljsfljaslfjs",
      name: "Marcus Bell",
      test1: { type: "PHQ9", score: 10.0, date: "12/03/22" },
      test2: { type: "EPDS", score: 17.0, date: "12/03/22" },
      test3: { type: "EPDS", score: 26.0, date: "12/03/22" },
      test4: { type: "EPDS", score: 17.0, date: "12/03/22" },
      test5: { type: "EPDS", score: 26.0, date: "12/03/22" },
      settings: { sms: true, call: false },
    },
  ];
  const rows = elements.map((element) => (
    <DataRow key={element.uid} item={element} />
  ));

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
              <p className="mx-2 mb-4 text-sm md:text-base md:mb-6 lg:text-lg text-gray-600 xl:mb-10 tracking-wide">
                Note : Test 1/2/3/4/5 indicate the most recent tests, where 1 is
                considered the most recent.
              </p>
              <DataTable>{rows}</DataTable>
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
