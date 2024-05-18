import Form from "../components/Form/Form"
import Cover from "../components/Cover/Cover"
import Contacts from "../components/Contacts/Contacts"


export default function ContactsPage (){
    return(
        <>
            <Cover img="/static/img/cover3.jpg" alt="Обложка" title="Контакты"/>
            <Contacts />
            <Form />
        </>
    )
}