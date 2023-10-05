'use client';
import React from 'react'
import Typewriter from "typewriter-effect"

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{ loop: true }}
      onInit={(typewriter) => {
        typewriter.typeString('Productivity, but cooler.').
        pauseFor(1000).deleteAll()
        .typeString('Let AI assist your writing.')
        .start()
      }}
    />
  );
}

export default TypewriterTitle