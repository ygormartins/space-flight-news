import React from 'react';

const NewsListItem = ({
  title,
  url,
  imageUrl,
  summary,
  publishedAt,
  newsSite,
}: {
  title: string;
  url: string;
  imageUrl: string;
  summary?: string;
  publishedAt: string;
  newsSite: string;
}) => {
  return (
    <li className="mx-auto w-2/5 flex space-x-12 odd:flex-row odd:space-x even:flex-row-reverse even:space-x-reverse">
      <img
        className="w-1/3 aspect-[4/3] object-cover self-start"
        src={imageUrl}
        alt={title}
      />
      <div className="w-full flex flex-col space-y-2">
        <h2 className="font-bold line-clamp-3">{title}</h2>
        <div className="flex justify-between items-center">
          <span className="text-sm">{publishedAt}</span>
          <span className="bg-secondary text-white px-2 py-0.5">
            {newsSite}
          </span>
        </div>
        <p className="flex flex-1 line-clamp-[6] text-justify">
          {summary || ''}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="self-start primary-btn"
        >
          Ver Mais
        </a>
      </div>
    </li>
  );
};

export default NewsListItem;
