import React from 'react';
import AssignmentCard from '@/app/user/my-assignments/AssignmentCard';
interface Assignment {
    assignmentName: string, deadline: string, description: string
}

const AssignmentsList: React.FC = () => {
    const assignmentData: Assignment[] = [{
        assignmentName: "Math 101",
        deadline: "9:00 AM - 10:30 AM",
        description: "Introduction to Algebra and Calculus."
    }, {
        assignmentName: "Math 102",
        deadline: "9:00 AM - 10:30 AM",
        description: "Introduction to Algebra and Calculus."
    }, {
        assignmentName: "Math 103",
        deadline: "9:00 AM - 10:30 AM",
        description: "Introduction to Algebra and Calculus."
    }, {
        assignmentName: "Math 104",
        deadline: "9:00 AM - 10:30 AM",
        description: "Introduction to Algebra and Calculus."
    }, {
        assignmentName: "Math 105",
        deadline: "9:00 AM - 10:30 AM",
        description: "Introduction to Algebra and Calculus."
    }, {
        assignmentName: "Math 106",
        deadline: "9:00 AM - 10:30 AM",
        description: "Introduction to Algebra and Calculus."
    }, {
        assignmentName: "Math 107",
        deadline: "9:00 AM - 10:30 AM",
        description: "Introduction to Algebra and Calculus."
    }];

    return (
        <>
            <div className='flex flex-wrap justify-start'>
                {
                    assignmentData.map((course, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2'>
                            <AssignmentCard
                                assignmentName={course.assignmentName}
                                deadline={course.deadline}
                                description={course.description}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AssignmentsList;
