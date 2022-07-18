import React from 'react';
import CustomPopup from '../customPopup/CustomPopup';



export const ItemDetail = (props) => {

    const {openPopup, setOpenPopup, item, categoryList} = props;

    let tempItem =  categoryList.filter(el => el.id === item);
    const { id, name, picture, description } = tempItem[0];

    return (
        <div>
        <CustomPopup
            title={name}
            contentText={description}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >
            <div>
                <div
                    key={id}
                    id={id}
                    style={{border: '1px solid black'}}
                >
                    <img 
                        src={picture} 
                        style={{width: '60px'}}
                        id={id}
                    ></img>       
                </div>
            </div>
        </CustomPopup>
    </div>
    )
    
}
