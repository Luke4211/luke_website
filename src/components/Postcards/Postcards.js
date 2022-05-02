import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Postcards.css'
import { useState } from 'react';
import AboutPanel from '../Layout/AboutPanel';




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

    return (
        <div>

            {havePosts ? (
                posts.docs.map((postcard) => {
                    return (
                        <div
                            key={postcard.id}
                        >
                            <Card
                                className="postcards"
                            >
                                <Card.Body className='body'>
                                    <div className="text">
                                        <Card.Title>{postcard.get("headline")}</Card.Title>
                                        <Card.Text className='date'>{(postcard.get("date").toDate()).toDateString()}</Card.Text>
                                        <Card.Text>{postcard.get("description")}</Card.Text>
                                    </div>
                                    <Card.Img className='card_img' src={postcard.get("thumbnail")} />
                                </Card.Body>
                            </Card>
                            <hr className="postcard_divider" />
                        </div>
                    )

                })

            ) : (
                <div />
            )}

        </div>
    )
    

}

export default Postcards;