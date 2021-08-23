import React from 'react';
import Post from './Post';

export default function PostList({ data }) {
  return (
    <div>
      {data.map((post) => (
        <Post data={post} />
      ))}
    </div>
  );
}
