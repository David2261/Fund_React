import {useMemo} from 'react';

/* Создание своего хука
Кастомные хуки - это хуки, которые внутри себя использую *стандартные react-хуки (useState, useMemo, etc.)
*/

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
	    if(sort) {
	      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
	    }
	    return posts;
	}, [sort, posts])

	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const sortedAndSearchedPosts = useMemo(() => {
    	return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
	}, [query, sortedPosts])

	return sortedAndSearchedPosts;
}