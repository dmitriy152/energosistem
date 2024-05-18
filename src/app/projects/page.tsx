import Form from "../components/Form/Form";
import Cover from "../components/Cover/Cover";
import Portfolio from "../components/Portfolio/Portfolio";
export default function Projects (){
    return(
        <>
            <Cover img="/static/img/cover2.jpg" alt="Обложка" title="Примеры"/>
            <Portfolio />
            <Form />
        </>
    )
}