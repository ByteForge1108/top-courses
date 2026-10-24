import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses, category}) => {
  
  let allCourses = []; // empty array for storing all values
  const [likedCourses, setLikedCourses] = useState([]);
  const getCourses = () => {
    if(category === "All"){
    console.log("printing courses");
    console.log(courses);
    Object.values(courses).forEach( (courseCatagory) => {
        courseCatagory.forEach( (course) => {
            allCourses.push(course);
        })
    })

    return allCourses;
    }
    else{
        return courses[category];
    }
  }

    return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
        (!courses)? (
            <div>No data available.</div>
        ) : (
            getCourses().map( (course) => (
             <Card key={course.id} course={course} 
                                         likedCourses={likedCourses}
                                         setLikedCourses={setLikedCourses}/>
            )))
    }
    </div>
  )
}

export default Cards;
