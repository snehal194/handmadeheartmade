import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            {/* ✨ Featured Creations */}
            {title}
          </h2>

           {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                    {subtitle}
                </p>
            )}

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-pink-400"></div>
        </div>
  )
}

export default SectionTitle
