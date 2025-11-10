const Events = () =>{
    return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="m-4 max-w-lg rounded-xl bg-white p-8 text-center shadow-2xl dark:bg-gray-800 sm:p-12">
        {/* Icon/Emoji */}
        <div 
          className="mb-6 text-7xl text-yellow-500" 
          role="img" 
          aria-label="Under construction barrier"
        >
          🚧
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Page Under Construction
        </h1>

        {/* Message */}
        <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
          We're working hard to bring you something amazing!
          This page is currently being built and will be available soon.
        </p>

        {/* Optional: Back to Home button */}
        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default Events;