import React from 'react'
import ThreeImagesContainer from "../ThreeImagesContainer/ThreeImagesContainer";
import romanianMaterialsFree from "../../pages/DocxPage/Images/languageMaterialsFree.jpeg";
import mathematicsMaterialsFree from "../../pages/DocxPage/Images/mathMaterialsFree.jpeg";
import informaticsMaterialsFree from "../../pages/DocxPage/Images/informaticsMaterialsFree.jpeg";
import romanianMaterials from "../../pages/DocxPage/Images/languageMaterials.jpeg";
import mathematicsMaterials from "../../pages/DocxPage/Images/mathMaterials.jpeg";
import informaticsMaterials from "../../pages/DocxPage/Images/informaticsMaterials.jpeg";


function GetPremiumContent() {
    return (
        <div className="Docx">
            <div>&nbsp;</div>

            <ThreeImagesContainer imageLeft = { romanianMaterialsFree }
                                  imageCenter = { mathematicsMaterialsFree }
                                  imageRight = { informaticsMaterialsFree }
                                  titleLeft = { "Romana Free" }
                                  titleCenter = { "Matematica Free" }
                                  titleRight = { "Informatica Free" }
                                  contentLeft = { "" }
                                  contentCenter = { "" }
                                  contentRight = { "" }
            />

            <ThreeImagesContainer imageLeft = { romanianMaterials }
                                  imageCenter = { mathematicsMaterials }
                                  imageRight = { informaticsMaterials }
                                  titleLeft = { "Romana Premium" }
                                  titleCenter = { "Matematica Premium" }
                                  titleRight = { "Informatica Premium" }
                                  contentLeft = { "Materiale premium pentru rezultate premium" }
                                  contentCenter = { "Materiale premium pentru rezultate premium" }
                                  contentRight = { "Materiale premium pentru rezultate premium" }
            />
            <br/>
            <br/>
        </div>
    )
}

export default GetPremiumContent;