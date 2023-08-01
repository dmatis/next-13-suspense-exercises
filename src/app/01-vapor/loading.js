import React from 'react';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton/LibraryGameCardSkeleton';
import { range } from '@/utils';
import ArticleWrapper from '@/components/ArticleWrapper';

async function VaporLoading() {
  return (
    <ArticleWrapper>
      {range(12).map((_, index) => (
        <LibraryGameCardSkeleton key={index} />
      ))}
    </ArticleWrapper>
  );
}

export default VaporLoading;
