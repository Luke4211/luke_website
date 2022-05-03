import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './Postcards.css';

function Postcards({ onFetchPosts }) {
  Postcards.propTypes = {
    onFetchPosts: PropTypes.func.isRequired,
  };

  const [posts, setPosts] = useState({});
  const [havePosts, setHavePosts] = useState(false);

  async function handleFetchPosts() {
    const fetchedPosts = await onFetchPosts();

    if (fetchedPosts) {
      setPosts(fetchedPosts);
      setHavePosts(true);
    } else {
      // eslint-disable-next-line no-console
      console.log('Error fetching posts...');
    }
  }

  // This is called after rendering to grab posts from db
  useEffect(() => {
    handleFetchPosts();
  }, []);

  return (
    <div>

      {havePosts ? (
        posts.docs.map((postcard) => (
          <div
            key={postcard.id}
          >
            <Card
              className="postcards"
            >
              <Card.Body className="postcard_body">
                <div className="postcard_text">
                  <Card.Title>{postcard.get('headline')}</Card.Title>
                  <Card.Text className="postcard_date">{(postcard.get('date').toDate()).toDateString()}</Card.Text>
                  <Card.Text>{postcard.get('description')}</Card.Text>
                </div>
                <Card.Img className="postcard_img" src={postcard.get('thumbnail')} />
              </Card.Body>
            </Card>
            <hr className="postcard_divider" />
          </div>
        ))

      ) : (
        <div />
      )}

    </div>
  );
}

export default Postcards;
