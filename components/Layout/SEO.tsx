import Head from 'next/head'
import React from 'react'

interface Props {
  description: string
  keywords: string
  title: string
}

const SEO: React.FC<Props> = ({ description, keywords, title }) => (
  <Head>
    <meta name="robots" content="index" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Arlindo Boa, contact arlindojosboa@gmail.com" />

    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <title>{title}</title>
  </Head>
)

export default SEO
