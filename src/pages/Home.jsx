import { useEffect, useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

const Home = () => {
  const { showForm } = useContext(GlobalContext);

  return (
    <>
        { showForm && <AddTask /> }
        <Tasks />
    </>
  )
}

export default Home