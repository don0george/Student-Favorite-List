import React from 'react';

const FavoriteList = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
        {favorites.map((student,index) => (
          <div key={student} className="flex gap-4 text-2xl p-4 w-4/12 justify-between">
            <p>{index+1}.{student}</p>
            <button onClick={() => removeFromFavorites(student)} className="bg-red-500 text-white px-2 rounded-full" >Remove</button>
          </div>
        ))}
    </div>
  );
};

export default FavoriteList;
