import ModalComponent from "./modalComponent";
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
          Calling code
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

export default function CountryListComponent(props) {
  const { data, handleFilterFN, handleSortFN, handlePaginationFN } = props;

  const [searchState, setSearchState] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleRenderSearch = () => {
    return (
      <div className="p-4">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="table-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search country name"
            value={searchState}
            onChange={(event) => setSearchState(event.target.value)}
          />
          <button
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleFilterFN.nameCountryFN(searchState)}
          >
            Search
          </button>
        </div>
      </div>
    );
  };

  /**
   * dataProps contain each country list
   */
  const handleRenderBody = (dataCountry) => {
    const renderRow = dataCountry.map((elem, index) => {
      const { flags, cca3, cca2, idd, name, altSpellings } = elem;
      const fullAltinativeSpellings = altSpellings.join(" | ");
      // There are many native name in some countries, so I decide to pick only one at first.
      // There is one country that doesn't have any nativeName >>"ATA"<<,

      const getFistObject = Object.keys(name.nativeName)[0];
      const nativeOfficialName = name.nativeName[getFistObject]
        ? name.nativeName[getFistObject].official
        : "No Native Name";

      const combineCallingCode = `${idd.root}${idd.suffixes[0]}`; // decide to pick one, because USA there are so many code

      return (
        <tr
          key={index + 1}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          onClick={() => {
            setDataModal({
              flags,
              name,
              nativeOfficialName,
              fullAltinativeSpellings,
              cca2,
              cca3,
              combineCallingCode,
            });
            setVisibleModal(true);
          }}
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            <img
              className="h-auto max-w-full"
              alt={flags.alt}
              src={flags.png}
            />
          </th>
          <td className="px-6 py-4">{name.official}</td>
          <td className="px-6 py-4">{fullAltinativeSpellings}</td>
          <td className="px-6 py-4">{nativeOfficialName}</td>
          <td className="px-6 py-4">{combineCallingCode}</td>
          <td className="px-6 py-4">{cca2}</td>
          <td className="px-6 py-4">{cca3}</td>
        </tr>
      );
    });
    return <tbody>{renderRow}</tbody>;
  };

  const handleRenderPagination = () => {
    return (
      <div className="flex mt-5 mb-5 justify-between">
        <button
          className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => handleSortFN("ACS")}
        >
          Country Name ACS
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => handleSortFN("DES")}
        >
          Country Name Desc
        </button>
        <div className="flex ">
          <button
            className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handlePaginationFN.previous}
          >
            Previous
          </button>
          <button
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handlePaginationFN.next}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const onHideModalFN = () => setVisibleModal(false);

  const dataLength = data.length;

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
        {handleRenderPagination()}
        <ModalComponent
          data={dataModal}
          visible={visibleModal}
          onHideModal={onHideModalFN}
        />
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {handleRenderHeader()}
          {handleRenderBody(data)}
        </table>
      </div>
    </div>
  );
}
