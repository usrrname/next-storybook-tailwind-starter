import React from 'react'
import Image from 'next/image'

export const getServerSideProps = async (context) => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Allowed-Origin": "localhost:3000",
      "Cache-Control":
        process.env.NEXT_PUBLIC_ENV === "development"
          ? "no-store, max-age=0"
          : "public, max-age=31536000, must-revalidate",
    },
  });

  const result = await res.json();
  return {
    props: {
      image: result.message,
      status: result.status
    },
  };
}

export default function Page(props) {
  console.log(props)
  return (
    <div>
      <main>
        <div>

          Hello World!
        </div>
      </main>
    </div>
  )
}

