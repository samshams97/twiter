import React from 'react';
import Tweet from './Tweet';

export default function TweetList({ data }) {
  return (
    <div>
      {data.map((post) => (
        <Tweet data={post} />
      ))}
    </div>
  );
}
