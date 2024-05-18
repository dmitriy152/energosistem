import Cover from "../components/Cover/Cover"
import Form from "../components/Form/Form"
import Advantages from "../components/Advantages/Advantages"
export default function AdvantagesPage (){
    return(
        <>
            <Cover img="/static/img/cover4.jpg" alt="Обложка" title="Преимущества"/>
            <Advantages />
            <Form />
        </>
    )
}