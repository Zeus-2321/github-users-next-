import React from 'react';

export default function UserList({ users }) {
  // Check if users are available, else display a loading message or error
  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
        >
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// Fetch users data in getStaticProps or getServerSideProps
export async function getStaticProps() {
  try {
    const res = await fetch('https://api.github.com/users');
    const users = await res.json();

    if (!users) {
      return { notFound: true };  // Handle case where no users are fetched
    }

    return {
      props: { users },
      revalidate: 3600,  // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { props: { users: [] } };  // Return empty array if fetch fails
  }
}
