import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'src/store/rootAction';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const isLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    posts.map(({ id, title }) => <div key={id}>{title}</div>)
  );
}

export default PostList;
