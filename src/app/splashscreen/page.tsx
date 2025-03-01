import { TypewriterEffect } from '@/components/ui/typewritereffect';
import React from 'react';

function Page() {
  const wordsArray = [
    { text: 'Hello, World!' },
    { text: 'Welcome to TypeScript' },
    { text: 'Enjoy coding!' },
  ];

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex items-center justify-center">
      <div className=" p-4 rounded">
        <TypewriterEffect words={wordsArray} />
      </div>
    </div>
  );
}

export default Page;
