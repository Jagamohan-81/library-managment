import React from 'react'
import CourseCard from '@/app/components/Common/CourseCard'
function CourseList() {
    return (
        <>
            <div className='flex flex-wrap justify-start'>
                {
                    courseData.map((course, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2'>
                            <CourseCard
                                courseName={course.courseName}
                                instructor={course.instructor}
                                schedule={course.schedule}
                                description={course.description}
                            />
                        </div>
                    ))
                }
            </div>

        </>
    )
}


const courseData = [{
    courseName: "Math 101",
    instructor: "Prof. Smith",
    schedule: "MWF 9:00 AM - 10:30 AM",
    description: "Introduction to Algebra and Calculus."
}, {
    courseName: "Math 102",
    instructor: "Prof. Smith",
    schedule: "MWF 9:00 AM - 10:30 AM",
    description: "Introduction to Algebra and Calculus."
}, {
    courseName: "Math 103",
    instructor: "Prof. Smith",
    schedule: "MWF 9:00 AM - 10:30 AM",
    description: "Introduction to Algebra and Calculus."
}, {
    courseName: "Math 104",
    instructor: "Prof. Smith",
    schedule: "MWF 9:00 AM - 10:30 AM",
    description: "Introduction to Algebra and Calculus."
}, {
    courseName: "Math 105",
    instructor: "Prof. Smith",
    schedule: "MWF 9:00 AM - 10:30 AM",
    description: "Introduction to Algebra and Calculus."
}, {
    courseName: "Math 106",
    instructor: "Prof. Smith",
    schedule: "MWF 9:00 AM - 10:30 AM",
    description: "Introduction to Algebra and Calculus."
}, {
    courseName: "Math 107",
    instructor: "Prof. Smith",
    schedule: "MWF 9:00 AM - 10:30 AM",
    description: "Introduction to Algebra and Calculus."
},]


export default CourseList