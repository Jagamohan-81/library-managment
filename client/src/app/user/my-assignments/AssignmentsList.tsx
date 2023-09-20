"use client"
import React, { useState, useEffect } from 'react';
import AssignmentCard from '@/app/user/my-assignments/AssignmentCard';
import { allAssignmentsById } from '@/app/APICalls';
import { decodeToken } from '@/app/helpers/tokenDecoder';
import { SpinnerLoader } from '@/app/Loader';
interface Assignment {
    name: string, submission_date: string, description: string, teacher: string
}
interface DecodedToken {
    userName: string;
    id: Number | string;
    role: string;
    iat: number;
    exp: number;
}
const AssignmentsList: React.FC = () => {
    const [assignmnets, setAssignments] = useState<Assignment[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {

                const decodedToken: DecodedToken | null = await decodeToken();
                if (decodedToken?.id) {
                    const courses = await allAssignmentsById(decodedToken.id);
                    setAssignments(courses);
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

                < div className='flex flex-wrap justify-start'>
                    {
                        assignmnets.map((assignment, index) => (
                            <div key={index} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2'>
                                <AssignmentCard
                                    assignmentName={assignment.name}
                                    deadline={assignment.submission_date}
                                    instructor={assignment.teacher}
                                    description={assignment.description}
                                />
                            </div>
                        ))
                    }
                </div > : <SpinnerLoader />
        }
        </>
    )
}

export default AssignmentsList;

//const assignmentData: Assignment[] = [{
//     assignmentName: "Math 101",
//     deadline: "9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     assignmentName: "Math 102",
//     deadline: "9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     assignmentName: "Math 103",
//     deadline: "9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     assignmentName: "Math 104",
//     deadline: "9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     assignmentName: "Math 105",
//     deadline: "9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     assignmentName: "Math 106",
//     deadline: "9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }, {
//     assignmentName: "Math 107",
//     deadline: "9:00 AM - 10:30 AM",
//     description: "Introduction to Algebra and Calculus."
// }];