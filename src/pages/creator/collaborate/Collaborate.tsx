import { Heading } from "@wai-react/components/heading"
import { CollaborateForm } from "../../../components/CollaborateForm"
import { MarkerMap } from "../../../components/MarkerMap"


export const Collaborate = () => {

    return (
        <>
           <Heading>Roadmap</Heading>
           <MarkerMap /> 
           <CollaborateForm />
        </>
    )
}