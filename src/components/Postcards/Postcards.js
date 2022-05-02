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



    return (
        <div>
            {havePosts ? (
                posts.map((postcard) => {
                    return (
                        <div
                        key={postcard.id}                       
                        >
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
                        </div>
                    )

                })

            ) : (
                <p>no posts</p>

            )}
        </div>
    )
    

}

export default Postcards;