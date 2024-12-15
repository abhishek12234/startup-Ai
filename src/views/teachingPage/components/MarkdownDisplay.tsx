import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MessageInput from './MessageInput';

const MarkdownDisplay = ({ mdContent }: any) => {
  return (
    <div className="markdown-display-container">
      
      {/* Sticky Icon */}
    

      {/* Markdown content */}
      <div className="">
        <Markdown remarkPlugins={[remarkGfm]}>
          {mdContent}
        </Markdown>
      </div>
      
    </div>
  );
};

export default MarkdownDisplay;
