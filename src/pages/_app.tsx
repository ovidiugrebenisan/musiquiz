import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Common } from "~/components/Common";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Common {...pageProps}>
        <Component {...pageProps} />
      </Common>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
