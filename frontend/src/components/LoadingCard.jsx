import React from 'react'

const LoadingCard = () => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
    <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg shadow animate-pulse">
      <div className="h-40 rounded w-full bg-slate-700 mb-6"></div>
      <div className="space-y-4">
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
  
  )
}

export default LoadingCard