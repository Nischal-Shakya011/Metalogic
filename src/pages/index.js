import React from "react";
import Head from 'next/head';
import Navigation from '../components/Navigation'
export default function Home(){

  return(
    <>
    <Head>
                <title>MetaLogic - Home Page</title>
                <meta name="description" content="Welcome to MetaLogic - Your destination for innovative solutions" />
                <meta name="keywords" content="MetaLogic, innovative solutions, technology, services" />
                <meta name="author" content="MetaLogic Team" />
                
                <meta property="og:title" content="MetaLogic - Home Page" />
                <meta property="og:description" content="Welcome to MetaLogic - Your destination for innovative solutions" />
                <meta property="og:image" content="https://metalogic.com.np/" /> 
                <meta property="og:url" content="https://metalogic.com.np/" />
                <meta property="og:type" content="website" />
                
                <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "MetaLogic",
                  "url": "https://metalogic.com.np/",
                  "logo": "https://metalogic.com.np/",
                  "description": "MetaLogic is dedicated to providing innovative solutions for businesses.",
                  "sameAs": [
                    "https://www.linkedin.com/company/metalogic-software-pvt-ltd/",
                    "https://www.instagram.com/metalogicsoftware?igsh=bDE5dG1pdGFoMGg3",
                    "https://www.facebook.com/metalogicsoftware"
                  ]
                }
                `}
                </script>
            </Head>
      <Navigation/>
    
    </>

  )
}