import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Widget from "./Widgets";
import { PopulerIcon } from "../icon/icon";
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import db from "../firebase";
import FeedList from "../components/FeedList";

function Content() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("feed")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="bg-white sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://pbs.twimg.com/profile_images/1496871260990681100/VHj6yBXm_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        ></img>
        <TweetBox />
      </div>
      <FeedList tweets={tweets}/>
    </main>
  );
}

export default Content;
