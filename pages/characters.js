import { useState } from "react";
import MainContainer from "../components/MainContainer";
import ItemList from '../components/itemList';
import ItemDetails, {Field} from '../components/itemDetails';
import RowBlock from '../components/rowBlock';
import GotService from '../services/gotService';

const Character = ({characters}) => {
    const gotService = new GotService();

    const [selectedChar, setSelectedChar] = useState(130);

    const onItemSelected = (id) => {
        setSelectedChar(id)
    }

    const itemList = (
        <ItemList 
            onItemSelected={onItemSelected} 
            data={characters}
            renderItem={({name, gender}) => `${name} (${gender})`}/>
    )

    const charDetails = (
        <ItemDetails 
            itemId={selectedChar}
            getData={gotService.getCharacter}
            selectError={'Please select a character'}>
            <Field field='gender' label='Gender'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
            <Field field='culture' label='Culture'/>
        </ItemDetails>
    )

  return (    
    <MainContainer keywords={", Character page"}>
      <RowBlock left={itemList} right={charDetails} />
    </MainContainer>
  )
}

export default Character;

export async function getStaticProps(context) {
    const gotService = new GotService();
    const characters = await gotService.getAllCharacters();
    return {
      props: {characters}, // will be passed to the page component as props
    }
  }
