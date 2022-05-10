import React, { useEffect, useState } from 'react';
import NewsListItem from './components/NewsListItem';
import { NewsListProps } from './types';

import axios from 'axios';

const NewsList: React.FC<NewsListProps> = ({ query }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = (await axios.get('http://localhost:3000/articles'))
          .data;

        setData(response.data);
      } catch (err) {}
    };

    getArticles();
  }, []);

  return (
    <ul className="flex flex-col space-y-20">
      {data.map((item: any) => (
        <NewsListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NewsList;
