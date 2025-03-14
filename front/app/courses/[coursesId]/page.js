'use client'
import { shortCourses, workshops } from "@/components/CoursesAndWorkshop/CoursesAndWorkshop";
import CoursesDetail from "@/components/CoursesAndWorkshop/CoursesDetail";
import { notFound } from "next/navigation";

const CoursePage = ({ params }) => {
    const id = Number(params.coursesId);

    const course = shortCourses.find((item) => item.id === id);

    if (!course) return notFound(); 

    return <CoursesDetail coursesAndWorkshop={course} />;
};

export default CoursePage;