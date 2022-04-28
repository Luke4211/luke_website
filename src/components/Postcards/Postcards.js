import React from 'react';
import Card from 'react-bootstrap/Card';
import './Postcards.css'

const Postcards = () => {
    //TODO: Add props to function parameters, remove below mockup data
    const props = [
        {
            headline:"Gardening pt 1",
            description:"A photoessay detailing my garden",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            headline:"Hooper Marie",
            description:"A photoessay detailing my Hooper Marie and my motivations behind it.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            headline:"How to trim Hoopers nails",
            description:"A photoessay detailing how to trim hooper's nails.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            headline:"Gardening pt 1",
            description:"A photoessay detailing my garden",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            headline:"Hooper Marie",
            description:"A photoessay detailing my Hooper Marie and my motivations behind it.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            headline:"How to trim Hoopers nails",
            description:"A photoessay detailing how to trim hooper's nails.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        }

    ]
    return props.map((postcard) => {
        return (
            <>
                <Card
                    className="postcards"
                >
                    <Card.Body className='body'>
                        <div className="text">
                            <Card.Title>{postcard.headline}</Card.Title>
                            <Card.Text className='date'>{postcard.date}</Card.Text>
                            <Card.Text>{postcard.description}</Card.Text>
                        </div>
                        <Card.Img className='card_img' src={postcard.thumbnail} />
                    </Card.Body>
                </Card>
                <hr className="postcard_divider" />
            </>
        )
    });
    

}

export default Postcards;