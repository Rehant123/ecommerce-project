import React from "react";
import Layout from "../../components/layout/Layout";

const NoPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">
            This Page Does Not Exist
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Oops! The page you're looking for seems to have gotten lost in the
            vast expanse of the internet.
          </p>
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NoPage;
