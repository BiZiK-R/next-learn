import MainContainer from "../../components/MainContainer";
import ItemDetails, {Field} from '../../components/itemDetails';
import GotService from '../../services/gotService';
export default function ({book}) {
  return (
    <MainContainer keywords={`, ${book.name}`}>
        <ItemDetails  
            itemId={book.id} 
            data={book}
            selectError={'Please select a book'}>
            <Field field='publiser' label='Publiser'/>
            <Field field='released' label='Released'/>
            <Field field='numberOfPages' label='Number Of Pages'/>
        </ItemDetails>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
    const gotService = new GotService();
    const book = await gotService.getBook(params.id);
    return {
      props: {book}, // will be passed to the page component as props
    }
  }