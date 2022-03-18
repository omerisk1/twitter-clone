import React from 'react'
import { SearchIcon } from '../icon/icon'
import { Timeline } from 'react-twitter-widgets'

function Widgets() {

  return (
    <aside className="bg-white -80">
      <div className="flex items-center space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base">
        <SearchIcon className="" />
        <input
          type="text"
          placeHolder="Search Twitter"
          className=" placeolder-gray-dark bg-transparent focus:outline-none w-full text-sm"></input>
      </div>
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'SinanZinedine'
          }}
          options={{
            height: '850'
          }}
        />
      </div>
    </aside>
  )
}

export default Widgets