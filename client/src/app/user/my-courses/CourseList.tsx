"use client"
import React, { useState, useEffect } from 'react';
import CourseCard from '@/app/user/my-courses/CourseCard';
import { allCourses, allCoursesById } from "@/app/APICalls"
import { decodeToken } from '@/app/helpers/tokenDecoder';
import { SpinnerLoader } from '@/app/Loader';
interface Course {
    name: string;
    teacher: string;
    schedule: string;
    description: string;
}
interface CourseListProps {
    myCourse: boolean;
}
interface DecodedToken {
    userName: string;
    id: Number | string;
    role: string;
    iat: number;
    exp: number;
}
const CourseList: React.FC<CourseListProps> = ({ myCourse }) => {
    const [courseData, setCourseData] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                if (myCourse) {
                    const decodedToken: DecodedToken | null = await decodeToken();
                    if (decodedToken?.id) {
                        const courses = await allCoursesById(decodedToken.id);
                        setCourseData(courses);
                        setLoading(false)
                    }

                } else {
                    const courses = await allCourses();
                    console.log(courses)
                    setCourseData(courses);
                    setLoading(false)
                }
            } catch (err) {
                console.log("error---", err);
                setLoading(false)
            }
        };

        fetchData();
    }, []);


    return (
        <>{
            !loading ?

                <div className='flex flex-wrap justify-start'>
                    {
                        courseData && courseData?.map((course, index) => (
                            <div key={index} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2'>
                                <CourseCard
                                    courseName={course.name}
                                    instructor={course.teacher}
                                    schedule={course.schedule}
                                    description={course.description}
                                    myCourse={myCourse}
                                />
                            </div>
                        ))
                    }
                </div>
                : <SpinnerLoader />}
            {
                !loading && !courseData ? <p>No Course Assigned To You</p> : null

            }

        </>
    )
}

export default CourseList;
// const courseData: Course[] = [{
//     courseName: "Math 101",
//     instructor: "Prof. Smith",
//     schedule: "MWF 9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     courseName: "Math 102",
//     instructor: "Prof. Smith",
//     schedule: "MWF 9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     courseName: "Math 103",
//     instructor: "Prof. Smith",
//     schedule: "MWF 9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     courseName: "Math 104",
//     instructor: "Prof. Smith",
//     schedule: "MWF 9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     courseName: "Math 105",
//     instructor: "Prof. Smith",
//     schedule: "MWF 9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     courseName: "Math 106",
//     instructor: "Prof. Smith",
//     schedule: "MWF 9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     courseName: "Math 107",
//     instructor: "Prof. Smith",
//     schedule: "MWF 9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }];
