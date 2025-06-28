import "./../globals.css";
import "nextra-theme-docs/style.css";

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Logo from "./logo";
import { themeColorSettings } from "../theme";
import { site, vendor, base, locale, license } from "../settings";

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  openGraph: {
    url: site.url,
    siteName: site.name,
    locale: locale,
    type: "website",
  },
};

const banner = <Banner storageKey="pre-release">This is a pre-release version. Please watch for the updates!</Banner>;

const navbar = (
  <Navbar
    logo={Logo()}
    projectLink={base.project}
  />
);

const sidebar = {
  autoCollapse: false,
  defaultMenuCollapseLevel: 1,
  defaultOpen: true,
  toggleButton: true,
};

const footer = (
  <Footer>
    {" "}
    <div style={{ margin: "auto" }}>
      <span>
        {license} {new Date().getFullYear()} ©{" "}
        <a href={vendor.url} target="_blank">
          {vendor.name}
        </a>
      </span>
    </div>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head color={themeColorSettings}>
      </Head>
      <body>
        <Layout
          darkMode={true}
          banner={banner}
          navbar={navbar}
          sidebar={sidebar}
          pageMap={await getPageMap()}
          docsRepositoryBase={base.docs}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
