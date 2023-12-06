const { useState, useEffect } = require("react");

const handleRenderHeader = () => {
  return (
    <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Flag
        </th>
        <th scope="col" className="px-6 py-3">
          Country Name
        </th>
        <th scope="col" className="px-6 py-3">
          Alternative Name
        </th>
        <th scope="col" className="px-6 py-3">
          Native Name
        </th>
        <th scope="col" className="px-6 py-3">
          Code cca2
        </th>
        <th scope="col" className="px-6 py-3">
          Code cca3
        </th>
      </tr>
    </thead>
  );
};

/**
 * dataProps contain each country list
 */
const handleRenderBody = (dataCountry) => {
  const renderRow = dataCountry.map((elem, index) => {
    const { cca3, cca2, name, altSpellings } = elem;
    const fullAltinativeSpellings = altSpellings.join(" | ");
    // There are many native name in some countries, so I decide to pick only one at first.
    // There is one country that doesn't have any nativeName >>"ATA"<<,
    console.log('name.nativeName : ', name.nativeName);
    const getFistObject = Object.keys(name.nativeName)[0];
    const nativeOfficialName = name.nativeName[getFistObject]
      ? name.nativeName[getFistObject].official
      : "No Native Name";

    return (
      <tr
        key={index + 1}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          expect flag
        </th>
        <td className="px-6 py-4">{name.official}</td>
        <td className="px-6 py-4">{fullAltinativeSpellings}</td>
        <td className="px-6 py-4">{nativeOfficialName}</td>
        <td className="px-6 py-4">{cca2}</td>
        <td className="px-6 py-4">{cca3}</td>
      </tr>
    );
  });
  return (
    <tbody>
      {renderRow}
      {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          expect flag
        </th>
        <td className="px-6 py-4">Cambodia</td>
        <td className="px-6 py-4">ព្រះរាជាណាចក្រកម្ពុជា</td>
        <td className="px-6 py-4">KH</td>
        <td className="px-6 py-4">KHM</td>
        <td className="px-6 py-4">Kingdom of Cambodia</td>
      </tr> */}
    </tbody>
  );
};

const handleRenderPagination = () => {
  return (
    <div className="flex mt-5 justify-end">
      <a
        href="#"
        className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </a>
      <a
        href="#"
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </a>
    </div>
  );
};

export default function CountriesList(props) {
  const [searchState, setSearchState] = useState("");

  const { data, handleFilterFN } = props;
  const dataLength = data.length;

  const handleRenderSearch = () => {
    return (
      <div className="p-4">
        <label className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            value={searchState}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
            onBlur={() => {
              handleFilterFN.nameCountryFN(searchState);
            }}
            onChange={(event) => setSearchState(event.target.value)}
          />
        </div>
      </div>
    );
  };

  if (dataLength < 1) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {handleRenderSearch()}
          <h1>There is no data load</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {handleRenderSearch()}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {handleRenderHeader()}
          {handleRenderBody(data)}
        </table>
        {handleRenderPagination()}
      </div>
    </div>
  );
}
