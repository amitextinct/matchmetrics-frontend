import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigationbar from "../NavBar";
import Footer16 from "../Home/footer";

function Comments() {
  const { id } = useParams();
  const imageUrl = localStorage.getItem("imageUrl");
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [match, setMatch] = useState(null);
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
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
    async function fetchMatch() {
      try {
        const response = await fetch(
          `http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMatch(data);
      } catch (error) {
        // handle error
      }
    }
    fetchMatch();
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
          body: JSON.stringify({ text: newComment, username: username ,userImage : imageUrl}), // Include the username in the body of the request
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
      <br /><br /><br /><br /><br /><br />
      <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white justify-center">
          {match?.team1} vs {match?.team2}
            </h2>
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion Board
            </h2>
            {/* <img src={imageUrl} alt="" /> */}
          </div>
          <form class="mb-6" onSubmit={handleCommentSubmit}>
            <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                value={newComment}
                onChange={handleCommentChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center border border-gray-500 rounded-2xl  text-white bg-gray-900 hover:text-gray-900 hover:bg-black"
            >
              Post comment
            </button>
          </form>
          {[...comments].reverse().map((comment, index) => (
              <div key={index}>
          <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    class="mr-2 w-6 h-6 rounded-full"
                    src={comment.userImage}
                    alt=""
                  />
                  {"→"}
                    {comment.username}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-4">
                {new Date(comment.date).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                </p>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400 ml-5">
            {comment.text}
            </p>
          </article>
          </div>
        ))}
        
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
      <Footer16 />
    </div>
  );
}

export default Comments;
