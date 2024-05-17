import Cover from "./components/Cover/Cover";
import Installation from "./components/Installation/Installation";
import Form from "./components/Form/Form";
import Reviews from "./components/Reviews/Reviews";


export default function Home() {
  return (
    <>
        <Cover img="/static/img/cover.jpg" alt="Обложка" title="ООО" subtitle="ЭНЕРГОСИСТЕМЫ"/>
        <Installation />
        <Form />
        <Reviews />
    </>
  )
}
