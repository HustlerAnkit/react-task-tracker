import { useSelector } from 'react-redux';

import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

const Home = () => {
  const showForm = useSelector(store => store.showForm);
  return (
    <>
        { showForm && <AddTask/> }
        <Tasks />
    </>
  )
}

export default Home