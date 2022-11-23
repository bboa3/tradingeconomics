import SEO from '@components/Layout/SEO'
import React, { ReactNode } from 'react'

interface Props {
  description: string
  keywords: string
  title: string
  children: ReactNode
}

const Layout: React.FC<Props> = ({ description, keywords, title, children }) => {
  return (
    <>
      <SEO description={description} keywords={keywords} title={title} />
      <div className='w-full h-full min-h-screen flex justify-center items-center'>
        <main className='w-full h-full min-h-screen overflow-hidden max-w-5xl flex flex-col justify-between items-center px-3 py-24 lg:pb-3 lg:pt-28'>
          { children }
        </main>
      </div>
    </>
  )
}

export default Layout
