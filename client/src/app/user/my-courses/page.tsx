import CourseList from "./CourseList"
export default function Home() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">My Courses</h2>
            <CourseList myCourse={true} />
            <h2 className="text-2xl font-bold mb-4">All Courses</h2>
            <CourseList myCourse={false} />
        </>
    )
}
