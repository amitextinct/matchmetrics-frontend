import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Comments(){
  const { id } = useParams();
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState('');
  const username = localStorage.getItem('username');
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(`http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}/comments`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
    fetchComments();
  }, [id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  async function fetchComments() {
    try {
      const response = await fetch(`http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}/comments`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  }
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newComment, username: username }), // Include the username in the body of the request
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments(prevComments => [...prevComments, data]);
      setNewComment('');
      fetchComments(); 
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  if (!comments) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <div>
      <h1>{username}</h1>
      <h1>Comments</h1>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{new Date(comment.date).toLocaleString()}: {comment.username} - {comment.text}</p>
        </div>
      ))}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default Comments;