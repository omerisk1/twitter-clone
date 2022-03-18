import {useState} from "react";

import {
  ImageIcon,
  GIfIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
} from "../icon/icon";
import db from "../firebase"
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { set } from "firebase/database";




function TweetBox() {
    const [content, setContent] = useState('');
    const sendTweet = () => {
        if(content !== ''){
            db.collection('feed').add({
                displayName: 'Zinedine Sinan',
                username: '@SinanZinedine',
                content,
                // image: "https://iasbh.tmgrup.com.tr/8926d2/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sbh/2022/03/18/son-dakika-uefa-sampiyonlar-liginde-ceyrek-eslesmeleri-belli-oldu-1647602818169.jpg&mw=650",
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar: "https://pbs.twimg.com/profile_images/1496871260990681100/VHj6yBXm_400x400.jpg"

            });
            setContent("");
        }
    }
  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's Happening?"
        onChange={e => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-2">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <ImageIcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <GIfIcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <PollIcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <EmojiIcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <ScheduleIcon />
          </div>
        </div>
        <button 
        className="bg-primary-base text-white rounded-full px-4 py-2 font-medium hover:bg-primary-dark transform transition-colors duration-300"
        onClick={sendTweet}>
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TweetBox;
