export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                404 - Page Not Found
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Oops! The page you are looking for does not exist.
            </p>
            <a href="/" className="mt-4 text-blue-500 hover:underline">
                Go back home
            </a>
        </div>
    );
}