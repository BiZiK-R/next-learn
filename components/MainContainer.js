import Head from "next/head";
import A from "./A";
const MainContainer =({children, keywords}) => {
  return (
    <>
        <Head>
            <meta keywords={"next, test, SSR" + keywords}></meta>
            <title>Главная Страница</title>
        </Head>
        <div className="navbar">
            <A href="/" text="Главная" />
            <A href="/users" text="Пользователи" />
        </div>
        <div>
            {children}
        </div>
        <style jsx>
        {`
          .navbar {
            background: azure;
            padding: 14px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer;
