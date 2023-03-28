import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerformers } from '../actions';
import PerformerListItem from './PerformerListItem';

const Performers = () => {
  const dispatch = useDispatch();
  const performers = useSelector(state => state.performers);

  useEffect(() => {
    dispatch(fetchPerformers());
  }, [dispatch]);

  return (
    <div>
      <h2>Performers</h2>
      <div className="performers-list">
        {performers.map(performer => (
          <PerformerListItem key={performer.id} performer={performer} />
        ))}
      </div>
    </div>
  );
};

export default Performers;
