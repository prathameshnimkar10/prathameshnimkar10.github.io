function Cards({ name }) {
    return (
        <div className="flex items-center justify-center w-full h-full p-4 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg text-lg font-semibold transition-transform duration-300 ease-in-out hover:scale-105 text-center">
            {name}
        </div>
    );
}

export default Cards;