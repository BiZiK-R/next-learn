import MainContainer from "../../components/MainContainer";
import ItemList from '../../components/itemList';
import GotService from '../../services/gotService';
import Link from "next/link";
import { useRouter } from 'next/router'

const Books = ({books}) => {
  const router = useRouter()
  return (
    <MainContainer keywords={", Books page"}>
      <ItemList 
        data={books}
        onItemSelected={(id) => router.push(`/books/${id}`)}
        renderItem={(item) => item.name}/>
    </MainContainer>
  )
}

export default Books;

export async function getStaticProps(context) {
    const gotService = new GotService();
    const books = await gotService.getAllBooks();
    return {
      props: {books}, // will be passed to the page component as props
    }
  }
