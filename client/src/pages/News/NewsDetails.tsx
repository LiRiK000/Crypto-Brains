import React, {FC} from 'react';
import ND from "components/PageComponents/BlogComp/NewsComp/NewsDetails/ND";
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import NR from "components/PageComponents/BlogComp/NewsComp/NewsRelated/NR";

const NewsDetails: FC = () => {
    const imagesNR: string[] = [
        require('./RelatedNewsImg/1.png'),
        require('./RelatedNewsImg/2.png'),
        require('./RelatedNewsImg/3.png'),
        require('./RelatedNewsImg/4.png')
    ]
    const title: string = 'Crypto Has New Announcement About Russia And ...'
    return (
        <>
            <MenuCont/>
            <ND/>
            <NR images={imagesNR} title={title} />
        </>
    );
}

export default NewsDetails;