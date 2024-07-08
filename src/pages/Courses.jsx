import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const coursesData = [
  { id: 1, title: "Course 1", description: "Learn the basics of coding with this introductory course." },
  { id: 2, title: "Course 2", description: "Intermediate course to enhance your coding skills." },
  { id: 3, title: "Course 3", description: "Advanced topics for experienced coders." },
];

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      toast.success("Successfully enrolled in the course!");
    } else {
      toast.error("You are already enrolled in this course.");
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl text-center">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursesData.map((course) => (
          <div key={course.id} className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold">{course.title}</h2>
            <p className="text-muted-foreground">{course.description}</p>
            <Button
              variant="primary"
              className="mt-4"
              onClick={() => handleEnroll(course.id)}
            >
              Enroll
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;