import React from 'react';
import Card from 'react-bootstrap/Card';
import './Postcards.css'

const Postcards = () => {

    const props = [
        {
            headline:"My Cacti Growing Operation",
            description:"A photoessay detailing my cacti collection and my motivations behind it.",
            thumbnail:"https://picsum.photos/200/100",
            date:"Jan 31 2022"
        },
        {
            headline:"Hooper Marie",
            description:"A photoessay detailing my Hooper Marie and my motivations behind it.",
            thumbnail:"https://picsum.photos/200/100",
            date:"Jan 31 2022"
        },
        {
            headline:"How to take a fat Dab",
            description:"A photoessay detailing my fat dab and my motivations behind it.",
            thumbnail:"https://picsum.photos/200/100",
            date:"Jan 31 2022"
        }

    ]
    return props.map((postcard) => {
        return (
            <>
                <Card 
                className="postcards"
                >
                    <Card.Body>
                        <Card.Title>{postcard.headline}</Card.Title>
                        <Card.Text className='date'>{postcard.date}</Card.Text>
                        <Card.Img className='card_img'variant='bottom' src={postcard.thumbnail}/>
                        
                            
                        <Card.Text>{postcard.description}</Card.Text>
                        
                    </Card.Body>

                </Card>
                <hr/>
            </>

        )
    });
    

}

export default Postcards;