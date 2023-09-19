import css from "styled-jsx/css";

import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

// Define the custom CSS using styled-jsx
const styles = css`
  .light-pink-bg {
    background-color: #264653;
  }
`;

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${styles.className}`}>
      {postPreviews}
      {styles.styles}
    </div>
  );
};

export default HomePage;
