import { Html, Head, Main, NextScript } from 'next/document'
// NOTE: The <Head /> component used in _document is not the same as next/head. 
// The <Head /> component is used to add meta tags to the <html> tag.

// The Document component is used to render the <html> tag and customize whatever should lie in the <head>, <body> and otherwise would-be third-party script inclusions
export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="This is a description of the website" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="Lora Ipsem" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}