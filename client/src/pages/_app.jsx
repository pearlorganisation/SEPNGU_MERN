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

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Spengu</title>
        <link rel="shortcut icon" href="/avatars/favicon.png"/>
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
}
