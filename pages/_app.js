import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="bg-primary1 ls:w-[360px] flex  flex-col mx-auto">
        <GA4Initializer />
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </div>

    </Fragment>
  );
}
