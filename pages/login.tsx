import type { NextPage } from "next";
import Head from "next/head";
import SignIn from "../components/SignIn";
import Image from "next/image";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sign In - mState Web Admin</title>
        <meta name="description" content="Web Admin to sign in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 md:grid md:place-items-center h-screen">
        <div>
          <div className="mb-6 mx-auto text-center">
            <Image
              className="rounded-3xl"
              src="/logo.svg"
              width={200}
              height={200}
              alt="mState logo"
            />
          </div>
          <div className="mx-auto">
            <SignIn />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
