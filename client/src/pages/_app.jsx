// import { StateProvider } from "@/context/StateContext";
// import { initialState,reducer } from "@/context/StateReducers";
// import Head from "next/head";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return(
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <Head>
//         <title>Spengu</title>
//       </Head>
//       <Component {...pageProps} />;
//     </StateProvider>
//   )

// }
import { StateProvider } from "@/context/StateContext";
import { initialState, reducer } from "@/context/StateReducers";
import Head from "next/head";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Spengu</title>
        <link rel="shortcut icon" href="/avatars/favicon.png" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </StateProvider>
  );
}
