import { useContext } from 'react';
import { PostContext } from '../../providers/Post/PostContex';
import { CardPost } from '../Card/CardPost/CardPost';
import { StyledListPost } from './style';

export const ListPost = () => {
  const { posts } = useContext(PostContext);

  return (
    <StyledListPost>
      <h1>Feed</h1>
      {posts.map((post) => (
        <CardPost
          type={post.type}
          key={post.id}
          url={post.link}
          description={post.description}
          avatar={post.user.avatar}
          name={post.user.name}
          postID={post.id}
          userPostID={post.userId}
          likes={post.like}
        />
      ))}
    </StyledListPost>
  );
};
