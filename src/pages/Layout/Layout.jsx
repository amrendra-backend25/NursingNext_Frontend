import { Helmet } from "react-helmet";

function Layout({ children, title, description }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  );
}

export default Layout;
