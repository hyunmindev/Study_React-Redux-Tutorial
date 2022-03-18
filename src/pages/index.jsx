import ChangeRoot from 'src/components/ChangeRoot';
import DisplayNumberRoot from 'src/components/DisplayNumberRoot';
import DisplayTextRoot from 'src/components/DisplayTextRoot';
import PostList from 'src/components/PostList';

function Index() {
  return (
    <>
      <h1>Root</h1>
      <ChangeRoot />
      <DisplayNumberRoot />
      <DisplayTextRoot />
      <PostList />
    </>
  );
}

export default Index;
