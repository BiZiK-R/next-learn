import { useState } from "react";
import Head from "next/head";
import Header from '../header';
import RandomChar from '../randomChar';
import style from './style.module.scss';

const MainContainer =({children, keywords}) => {

  const [showRandomChar, setShowRandomChar] = useState(true);

  const onToggleRandomChar = () => {
    setShowRandomChar(!showRandomChar);
  }

  const randomChar = showRandomChar ? <RandomChar interval={3000}/> : null;

  return (
    <>
      <Head>
          <meta keywords={"next, test, SSR" + keywords}></meta>
          <title>Главная Страница</title>
      </Head>
      <div className={style.MainContainer}>
        <Header />
      </div>
      <div className={style.MainContainer}>
        <div className={style.MainContainer__random}>
          {randomChar}
          <button className={style.MainContainer__btn} onClick={onToggleRandomChar} color="primary">
            Toggle random character
          </button>
        </div>
        {children}
      </div>
    </>
  )
}

export default MainContainer;
