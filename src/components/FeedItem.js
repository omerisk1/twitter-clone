import { useState
} from "react";
import {ReplyIcon,RetweetIcon,LikeIcon,ShareIcon} from '../icon/icon'

function FeedItem({
  avatar,
  content,
  displayName,
  image,
  timeStamp,
  username,
}) {
    const [replyIcon, setReplyIcon] = useState(11);
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="Profile" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName}</h4>
          <span className="text-gray-dark">{username}</span>
          <div className=" mx-2 bg-gray-dark h-1 w-1 rounded-full" />
          <span className="text-gray-dark">
            {timeStamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        {image && <img src={image} className="my-2 rounded-xl max-h-96"></img>}
        <ul className="mt-3 flex items-center justify-between max-w-md">
            <li className=" flex items-center group w-8 space-x-3 text-gray-dark">
                <div className="flex items-center justify-center rounded-full group-hover:bg-blue-100 cursor-pointer w-25 h-25">
                    <ReplyIcon/>
                </div>
                <span className="group-hover:text-primary-base text-sm">{replyIcon}</span>
            </li>

            <li className=" flex items-center group w-8 space-x-3 text-gray-dark">
                <div className="flex items-center justify-center rounded-full group-hover:bg-green-200 cursor-pointer">
                    <RetweetIcon/>
                </div>
                <span className="group-hover:text-green-500 text-sm">2</span>
            </li>

            <li className=" flex items-center group w-8 space-x-3 text-gray-dark">
                <div className="flex items-center justify-center rounded-full group-hover:bg-red-200 cursor-pointer">
                    <LikeIcon/>
                </div>
                <span className="group-hover:text-red-500 text-sm">25</span>
            </li>

            <li className=" flex items-center group w-8 space-x-3 text-gray-dark">
                <div className="flex items-center justify-center rounded-full group-hover:bg-blue-100 cursor-pointer">
                    <ShareIcon/>
                </div>
                
            </li>
        </ul>
        
      </div>
    </article>
  );
}

export default FeedItem;
