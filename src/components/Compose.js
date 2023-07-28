

const Compose = () => {
    return (
        <>
            <div className="p-2 m-2">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div> <label className="tag block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="tag">Tag: </label>
                        <input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  id="tag" type="text" /></div>
                    <div>
                        <label  for="heading" className="tag block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading: </label>
                        <input id="heading" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                    </div>
                    <div>
                        <label  for="data" className="tag block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog: </label>
                        <input  id="data"className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                    </div>
                   <button className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Compose;