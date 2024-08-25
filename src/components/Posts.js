export function Posts({ posts }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts.map((post) => (
        <li key={post._id}>
          <a
            className="block p-4 hover:bg-blue-50"
            href={`/posts/${post?.slug?.current}`}
          >
            {post?.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
