export default function UserList({ users }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative">
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {user.login}
            </h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
