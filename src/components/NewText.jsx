function NewText({ handler }) {
  return (
    <form className="flex flex-row mt-3 mb-3" onSubmit={handler}>
      <input
        className="bg-violet-500 text-white font-semibold py-1 px-2 border-b-4 border-violet-700 placeholder-violet-200 placeholder:hover:text-violet-800 basis-5/6 focus:outline-none "
        placeholder="New text"
      />
      <button className="bg-violet-500 hover:bg-violet-400 text-white font-semibold py-1 px-2 border-b-4 border-violet-700 hover:border-violet-500 rounded basis-1/6 ml-1 transition-colors duration-200 ">
        Change text
      </button>
    </form>
  );
}

export default NewText;
