import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({ tweets }) => {
  return (
    <div>
        {
            tweets.map((tweet,key) => (
                <FeedItem  {...tweet} key={key}></FeedItem>
            ))
        }
    </div>
  )
}

export default FeedList