import React, { useEffect, useState, useMemo, useRef } from 'react';
import useSearch from '../utils/useSearch';
import { JOBS } from '../jobs';
import classNames from 'classnames';
import { isVisible } from '../utils/utils';
import debounce from 'lodash.debounce';

import './SearchBar.scss';

const useKeyboardNavigation = () => {
  const [keyboardNavigating, setKeyboardNavigating] = useState(false);

  const debouncedSetKeyboardNavigating = useMemo(
    (bool) => debounce(() => setKeyboardNavigating(bool), 500),
    [],
  );

  return {
    keyboardNavigating,
    setKeyboardNavigating,
    debouncedSetKeyboardNavigating,
  };
};

const SearchBar = () => {
  const attributes = useMemo(() => ['jobTitle', 'location', 'term'], []);

  const [searchResults, search, setSearch] = useSearch(JOBS, attributes);
  const searchResultsRef = useRef();

  const [active, setActive] = useState(null);

  const {
    keyboardNavigating,
    setKeyboardNavigating,
    debouncedSetKeyboardNavigating,
  } = useKeyboardNavigation();

  const handleKeyDown = (e) => {
    const KEY_UP = e.keyCode === 38;
    const KEY_DOWN = e.keyCode === 40;

    if (!KEY_DOWN && !KEY_UP) {
      return;
    }

    setKeyboardNavigating(true);

    let nextActive;
    if (KEY_UP) {
      nextActive = active > 0 ? active - 1 : null;
    } else if (KEY_DOWN) {
      nextActive =
        active === null
          ? 0
          : active < searchResults.length - 1
          ? active + 1
          : active;
    }
    updateScrollPosition(nextActive);
    setActive(nextActive);

    debouncedSetKeyboardNavigating(false);
  };

  const updateScrollPosition = (active) => {
    let searchResultsContainer = searchResultsRef.current;

    if (searchResultsContainer) {
      if (active === null) {
        return;
      }

      let nextDiv = searchResultsContainer.querySelector(
        `[tabIndex="${active}"]`,
      );

      let { visible, top, bottom } = isVisible(nextDiv, searchResultsContainer);

      if (!visible) {
        let nextTop;
        if (!bottom) {
          nextTop =
            nextDiv.offsetTop +
            nextDiv.clientHeight -
            searchResultsContainer.clientHeight;
        } else if (!top) {
          nextTop = nextDiv.offsetTop;
        }
        searchResultsContainer.scroll({
          top: nextTop,
          left: 0,
          behaviour: 'smooth',
        });
      }
    }
  };

  const onMouserEnterSearchResult = (i) => {
    if (keyboardNavigating) {
      return;
    }
    setActive(i);
  };

  const searchContainerRef = useRef();
  const [showSearchResults, setShowSearchResults] = useState(true);

  useEffect(() => {
    const onClick = (event) => {
      const showSearchResults =
        searchContainerRef.current &&
        searchContainerRef.current.contains(event.target);
      setShowSearchResults(showSearchResults);
    };

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  const openJob = (job) => {
    alert(`open job page for ${JSON.stringify(job)}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (active === null) {
      alert(`search for ${search}`);
    } else {
      let activeResult = searchResults[active];
      openJob(activeResult);
    }
  };

  return (
    <div
      className={classNames('search-container', {
        searching: search && searchResults.length > 0,
      })}
      ref={searchContainerRef}
    >
      <form onSubmit={onSubmit}>
        <input
          className="form-control form-control-lg"
          id="jobsearch"
          type="text"
          placeholder="Job, Title or Keyword"
          value={search}
          onChange={setSearch}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-primary btn-lg px-4"
          id="submitButton"
          type="submit"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
      {search && showSearchResults && (
        <div className="search-results list-group" ref={searchResultsRef}>
          {searchResults.map((job, i) => (
            <div
              className={classNames('search-result list-group-item', {
                active: active === i,
              })}
              key={job._id.$oid}
              onClick={() => openJob(job)}
              tabIndex={i.toString()}
              onMouseEnter={() => onMouserEnterSearchResult(i)}
            >
              {job.jobTitle}{' '}
              <span className="text-secondary">
                - {job.location} - {job.term}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
