import { useParams } from "react-router";

const Dynamic = () => {

    const { id } = useParams();
    return ( 
        <div>This is dynamic page. - { id }</div>
     );
}
 
export default Dynamic;