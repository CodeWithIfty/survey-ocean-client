
const SurveyFilterForm = () => {
  return (
    <div className="mb-10 border-b ">
      <form className=" bg-gray m-5 p-5  rounded-xl">
        <div className="flex  gap-10 flex-wrap">
          <div className="flex flex-col ">
            <label
              htmlFor="category"
              className="ml-1 font-semibold text-gray-600"
            >
              Sort by Category:
            </label>
            <select
              name="category"
              id="category"
              className="border bg-white px-3 py-2 rounded-md w-72
        mt-2 text-gray-600 font-semibold"
            >
              <option value=""> Select Category</option>
              <option value=""> Select Category</option>
              <option value=""> Select Category</option>
              <option value=""> Select Category</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="category"
              className="ml-1 font-semibold text-gray-600"
            >
              Sort By:
            </label>
            <select
              name="category"
              id="category"
              className="border bg-white px-3 py-2 rounded-md w-72
        mt-2 text-gray-600 font-semibold"
            >
              <option value="Most Voted">Most Voted</option>
              <option value="Less Voted"> Less Voted</option>
            </select>
          </div>
        </div>

        <div className="">
          <input
            type="submit"
            value={"Submit"}
            className="bg-primary px-5 py-2 mt-5 text-white font-bold  rounded-lg cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default SurveyFilterForm;
