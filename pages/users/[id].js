import styles from '../../styles/user.module.scss';
import MainContainer from "../../components/MainContainer";
export default function ({user}) {
  return (
    <MainContainer keywords={`, ${user.name}`}>
        <div className={styles.user}>
            <h1>Пользователь {user.name}</h1>
            <p>С id: {user.id}</p>
        </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return {
      props: {user}, // will be passed to the page component as props
    }
  }