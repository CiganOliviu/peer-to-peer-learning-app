import React from 'react'
import ThreeImagesContainer from "../ThreeImagesContainer/ThreeImagesContainer";
import romanianMaterialsFree from "../../pages/DocxPage/Images/languageMaterialsFree.jpeg";
import mathematicsMaterialsFree from "../../pages/DocxPage/Images/mathMaterialsFree.jpeg";
import informaticsMaterialsFree from "../../pages/DocxPage/Images/informaticsMaterialsFree.jpeg";

function GetFreeContent() {
    return (
        <div className="Docx">
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
        </div>
    )
}

export default GetFreeContent;