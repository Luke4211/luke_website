import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Postcards.css'
import { useState } from 'react';





const Postcards =  ({onFetchPosts}) => {

    const [posts, setPosts] = useState({});
    const [havePosts, setHavePosts] = useState(false);

    async function handleFetchPosts() {
        const posts = await onFetchPosts();

        if (posts) {
            setPosts(posts);
            setHavePosts(true);
        } else {
            console.log("Error fetching posts...");
        }

    }

    // This is called after rendering to grab posts from db
    useEffect(() => {
        handleFetchPosts();

    }, []);

    //const posts = getDocs(collection,(db, 'posts'));

    //TODO: Add props to function parameters, remove below mockup data
    
    const props = [
        {   
            key: "0",
            headline:"Gardening pt 1",
            description:"A photoessay detailing my garden",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            key: "1",
            headline:"Hooper Marie",
            description:"A photoessay detailing my Hooper Marie and my motivations behind it.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            key: "2",
            headline:"How to trim Hoopers nails",
            description:"A photoessay detailing how to trim hooper's nails.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            key: "3",
            headline:"Gardening pt 1",
            description:"A photoessay detailing my garden",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            key: "4",
            headline:"Hooper Marie",
            description:"A photoessay detailing my Hooper Marie and my motivations behind it.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        },
        {
            key: "5",
            headline:"How to trim Hoopers nails",
            description:"A photoessay detailing how to trim hooper's nails.",
            thumbnail:"https://picsum.photos/100/100",
            date:"Jan 31 2022"
        }

    ]
    /*
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
    */

    return (
        <div>
            {havePosts ? (
                posts.map((postcard) => {
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

                })

            ) : (
                <p>no posts</p>

            )}
        </div>
    )
    

}

export default Postcards;