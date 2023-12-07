export default function ModalComponent(props) {
  const { visible, onHideModal, data } = props;
  if (!visible) return null;

  const {
    flags,
    name,
    nativeOfficialName,
    fullAltinativeSpellings,
    cca2,
    cca3,
  } = data;
  // Main modal
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Country information
            </h3>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <img className="max-w-full" alt={flags.alt} src={flags.png} />
            </div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Official Name : {name.official}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Altinative Spelling Name : {fullAltinativeSpellings}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Native Official Name : {nativeOfficialName}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              CCA2 : {cca2}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              CCA3 : {cca3}
            </p>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onHideModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
