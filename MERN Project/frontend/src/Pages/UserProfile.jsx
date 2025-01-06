// ProfilePage.js

import LoadingScreen from "../Components/Loader";
import { useUserComments } from "../Hooks/useGetComments";
import { useProfile } from "../Hooks/useGetProfile";

const ProfilePage = () => {
  const { data, isLoading, isError, error } = useProfile();
  const { userDetails } = data || {};
  const { username, email, phone, joiningDate, isAdmin } = userDetails || {};

  const { data: comments = [] } = useUserComments(username);  // Default to an empty array if no comments are available

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg font-semibold">
        Error: {error.message}
      </div>
    );
  }

  // Helper function to format the joining date
  const formatDate = (date) => {
    try {
      return new Date(date).toLocaleDateString();
    } catch (error) {
      return 'Invalid date';  // Return a fallback if the date is invalid
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-md transform transition hover:scale-105 duration-300">
        <div className="flex flex-col items-center p-8 bg-gradient-to-r from-purple-400 to-indigo-400 text-white">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-4xl font-bold text-gray-800">
            {username ? username.charAt(0).toUpperCase() : 'U'}
          </div>
          <h1 className="text-2xl font-semibold">{username}</h1>
          <p className="text-gray-100">{email}</p>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-lg font-medium text-gray-800">Profile Details</h2>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Username:</span>
            <span className="text-gray-800">{username}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Email:</span>
            <span className="text-gray-800">{email}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Phone:</span>
            <span className="text-gray-800">{phone || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Joining Date:</span>
            <span className="text-gray-800">{formatDate(joiningDate)}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Admin:</span>
            <span className="text-gray-800">{isAdmin ? "Yes" : "No"}</span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-lg font-medium text-gray-800">My Comments</h2>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="py-2 border-b border-gray-200">
                <p className="text-gray-800"><strong>{comment.name}:</strong> {comment.message}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No comments available.</p>  // Fallback message if no comments
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
