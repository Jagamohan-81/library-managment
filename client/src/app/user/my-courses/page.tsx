import CourseList from "./CourseList"
export default function Home() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">My Courses</h2>
            <CourseList />
            {/* <p>No Course Assigned To You</p> */}
            <h2 className="text-2xl font-bold mb-4">All Courses</h2>
            <CourseList />
        </>
    )
}
