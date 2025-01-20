import {useParams} from 'react-router-dom';

function Produto(){

    const {id} = useParams();

    return(
        <div>
            produto {id}
        </div>
    )
}

export default Produto;