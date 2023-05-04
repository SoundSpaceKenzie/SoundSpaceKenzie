import { useContext } from 'react';
import { PostContext } from '../../providers/Post/PostContex';
import { CardPost } from '../Card/CardPost';

export const ListPost = () => {
  const { posts } = useContext(PostContext);

  return (
    <ul>
      {posts.map((post) => (
        <CardPost 
          type ={post.type}
          key={post.id}
          url={post.link}
          description={post.description}
          avatar={post.user.avatar}
          name={post.user.name}
        />
      ))}
    </ul>
  );
};