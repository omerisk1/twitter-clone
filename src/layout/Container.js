import React from 'react'

function Container({ children }) {
  return (
    <div className="flex min-h-screen max-w-7xl bg-primary-base mx-auto">
        {children}
    </div>
  )
}

export default Container