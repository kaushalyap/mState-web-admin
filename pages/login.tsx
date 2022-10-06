import type { NextPage } from "next";
import Head from "next/head";
import SignIn from "../components/SignIn";
// import Image from "next/image";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sign In - mState Web Admin</title>
        <meta name="description" content="Web Admin to sign in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 md:flex justify-center md:h-[87vh] items-center">
        <div className="mx-auto mt-8 md:mt-0">
          <SignIn />
        </div>
      </main>
    </div>
  );
};

export default Login;
