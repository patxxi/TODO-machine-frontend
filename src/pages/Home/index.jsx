import React, { useState, useEffect } from 'react';
import { HomeUI } from './HomeUI';

const Home = () => {
  const [query, setQuery] = useState({
    low: false,
    medium: false,
    high: false,
    all: true,
  });
  const TODOItemsTest = [
    {
      id: 1,
      title: 'Todo 1',
      priority: 'Low',
      status: 'pending',
      completed: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      priority: 'Low',
      status: 'pending',
      completed: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      priority: 'Medium',
      status: 'doing',
      completed: false,
    },
    {
      id: 4,
      title: 'Todo 4',
      priority: 'Medium',
      status: 'doing',
      completed: false,
    },
    {
      id: 5,
      title: 'Todo 5',
      priority: 'High',
      status: 'finished',
      completed: true,
    },
    {
      id: 6,
      title: 'Todo 6',
      priority: 'High',
      status: 'finished',
      completed: true,
    },
  ];
  const [pendings, setPendings] = useState([]);
  const [doings, setDoings] = useState([]);
  const [finisheds, setFinisheds] = useState([]);

  const [TODOItems, setTODOItems] = useState(TODOItemsTest);
  const [filteredTOODs, setFilteredTODOs] = useState();
  const [open, setOpen] = useState(false);

/*
  Setting the filteredTODOs to the TODOItems every time TODOItems change. 

  It is called when component is mountend and when TODOItems change
*/
  useEffect(() => {
    setFilteredTODOs(TODOItems);
  }, [TODOItems]);

/* Setting the pendings, doings and finisheds to the filteredTODOs every time filteredTODOs change. */
  useEffect(() => {
    setPendings(
      filteredTOODs?.filter(item => item.status.toLowerCase() === 'pending')
    );
    setDoings(
      filteredTOODs?.filter(item => item.status.toLowerCase() === 'doing')
    );
    setFinisheds(
      filteredTOODs?.filter(item => item.status.toLowerCase() === 'finished')
    );
  }, [filteredTOODs]);

/* Filtering the TODOItems by the query. */
  useEffect(() => {
    let auxFiltered = [...TODOItems];
    if (query['all']) {
      setFilteredTODOs(TODOItems);
      return;
    }

    if (!query['low'] && !query['medium'] && !query['high'] && !query['all']) {
      setQuery({ ...query, all: true });
      setFilteredTODOs(TODOItems);
      return;
    }

    for (const property in query) {
      if (!query[property]) {
        auxFiltered = auxFiltered.filter(
          item => item.priority.toLowerCase() !== property
        );
      }
    }

    setFilteredTODOs(auxFiltered);
  }, [query]);

/**
 * The function takes a field as an argument, and then sets the query state to the current query state,
 * but with the field that was passed in toggled
 */
  const handleChangeQuery = field => {
    setQuery({ ...query, [field]: !query[field] });
  };

/**
 * If the id of the item is not equal to the id of the item we want to remove, then keep it in the
 * array.
 */
  const handleRemoveItem = id => {
    setTODOItems(previous => previous.filter(item => item.id !== id));
  };

/**
 * We're mapping over the TODOItems array, and if the item's id matches the id passed in, we're
 * toggling the item's completed property and setting the item's status to either 'finished' or
 * 'pending' depending on the item's completed property
 */
  const handleToggleCompleted = id => {
    setTODOItems(
      TODOItems.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;

          item.status = item.completed ? 'finished' : 'pending';
          return item;
        }

        return item;
      })
    );
  };

  return (
    <HomeUI
      query={query}
      handleChangeQuery={handleChangeQuery}
      pendings={pendings}
      doings={doings}
      finisheds={finisheds}
      handleRemoveItem={handleRemoveItem}
      handleToggleCompleted={handleToggleCompleted}
      open={open}
      onOpenModal={() => setOpen(true)}
      onCloseModal={() => setOpen(false)}
    />
  );
};

export default Home;