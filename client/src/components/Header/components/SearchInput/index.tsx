import React from 'react';

const SearchInput = () => {
  return (
    <div className="bg-white w-60 h-10 rounded overflow-hidden flex flex-row p-1">
      <input
        placeholder="Procurar"
        className="h-full flex flex-1 px-2 outline-none"
      ></input>
      <button className=" h-full aspect-square primary-btn p-0 bg-secondary">
        <span className="material-symbols-outlined block select-none text-[20px]">
          search
        </span>
      </button>
    </div>
  );
};

export default SearchInput;
