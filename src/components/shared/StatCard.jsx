const StatCard = ({ title, icon, value }) => {
  return (
    <div className="min-w-0 rounded-lg shadow-xs overflow-hidden  dark:bg-gray-800 border flex  items-center">
      <div className="p-4 flex items-center ">
        <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4 text-2xl">
          {icon}
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
