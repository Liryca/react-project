import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
        <ul className="user-list">
          {Array(12)
            .fill('')
            .map((item, index) => (
              <li className="user-card" key={index}>
                <Skeleton className='user-card-avatar' circle={true} width={75} height={75}  />
                <div className="user-info">
                  <div className='user-card-name'>
                  <Skeleton width={144} height={16} borderRadius={50} />
                  </div>
                 <Skeleton  width={80} height={12} borderRadius={50} />
                </div>
              </li>
            ))}
        </ul> 

    );
  };
  export default SkeletonCard;


