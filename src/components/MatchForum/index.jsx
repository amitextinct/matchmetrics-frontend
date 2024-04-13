import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigationbar from "../NavBar";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState("");
  const username = localStorage.getItem("username");
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}/comments`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComments(data);
        window.scrollTo(0, document.body.scrollHeight);
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
      const response = await fetch(
        `http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}/comments`
      );
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
      const response = await fetch(
        `http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newComment, username: username }), // Include the username in the body of the request
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments((prevComments) => [...prevComments, data]);
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  if (!comments) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigationbar />
      </div>
      <div className="p-11 flex justify-center">
        <div className="bg-gray-900 rounded-2xl mb-11 pt-11">
          <div className="mt-16 mx-1/5 border border-gray-900 mb-16 w-4/5 bg-white m-4 p-7 overflow-auto whitespace-normal ">
            {comments.map((comment, index) => (
              <div key={index}>
                <div className="mx-11 border border-gray-900 rounded-3xl">
                  <div className="text-l italic">{"→"}{comment.username}</div>
                  <div className="overflow-auto whitespace-normal text-xl mb-2 mt-2 ml-10 mr-10 border border-t-gray-900 rounded-xl ">
                    {comment.text}
                  </div>
                  <div className="text-sm">
                    {new Date(comment.date).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}
                  </div>
                </div>
              </div>
            ))}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 flex  justify-center text-2xl pb-11 bg-white mx-auto max-w-screen-xl px-4 py-2 border border-t-gray-900">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment"
              required
              className=" border border-gray-500 rounded-2xl text-center placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-400"
            />
            <div className="flex flex-row justify-center pt-3">
              <button
                type="submit"
                color="gray"
                size="lg"
                className="flex flex-row items-center justify-center space-x-20 border border-gray-500 rounded-2xl px-8 py-2  text-white bg-gray-900 hover:text-gray-900 hover:bg-black"
                fullWidth
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments;
