import React from 'react';

const StudentList = ({ students, addToFavorites }) => {
  return (
    <div >
        {students.map((student,index) => (
          <div key={student} className="flex gap-4 text-2xl p-4 w-4/12 justify-between">
            <p>{index+1}.{student}</p>
            <button onClick={() => addToFavorites(student) } className="bg-black text-white px-2 rounded-full ">Add to Favorite</button>
          </div>
        ))}
    </div>
  );
};

export default StudentList;
