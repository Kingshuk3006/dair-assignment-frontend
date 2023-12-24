import "@/styles/globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import { UserContextProvider } from "../../context/userContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </PrimeReactProvider>
  );
}
