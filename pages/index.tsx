import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import DataTable from "../components/DataTable";
import DataRow from "../components/DataRow";
import { useEffect, useState } from "react";
import { readHistories } from "../services/ReadData";
import { History } from "../models/History";

const Home: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [histories, setHistories] = useState<any>([]);

  useEffect(() => {
    readHistories().then((item) => {
      if (item) {
        console.log(item);
        setHistories(item);
      } else console.error("Fetching histories failed!");
    });
  }, [setHistories]);

  const rows =
    histories != null
      ? histories.map((index: number, item: Array<History>) => {
          <DataRow key={index} data={item} />;
        })
      : null;

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
                Note : Test 1/2/3 indicate the most recent tests, where 1 is
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
