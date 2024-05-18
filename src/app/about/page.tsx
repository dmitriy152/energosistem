import Form from "../components/Form/Form"
import Cover from "../components/Cover/Cover"
import About from "../components/About/About"
export default function AboutUs (){
    return(
        <>
            <Cover img="/static/img/cover1.jpg" alt="Обложка" title="О нас"/>
            <About />
            <Form />
        </>
    )
}