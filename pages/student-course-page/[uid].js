import { useRouter } from "next/router";
import MainHeader from "../../components/main-header";
import ProfessionVideoEditingContaine from "../../components/profession-video-editing-containe";
import CourseContainer from "../../components/course-container";
import Footer from "../../components/footer";
import { prisma } from "../../helpers/prisma";

const StudentCoursePage = (props) => {
    const router = useRouter();
    console.log(props)
    const onCoursesByJohnClick = () => {
        router.push("/student-homepage");
    };

    return (
        <div className="relative bg-shades-white w-full h-[1357px] flex flex-col items-start justify-start gap-[3px]">
            <MainHeader
                dimensions="/mask-group@2x.png"
                onCoursesByJohnClick={onCoursesByJohnClick}
            />
            <ProfessionVideoEditingContaine course={props.course} />
            <CourseContainer />
            <Footer productId="/group-56.svg" />
        </div>
    );
};

export default StudentCoursePage;

export async function getServerSideProps(ctx) {
    const course = await prisma.courses.findUnique({
        where: {
            id: ctx.params.uid
        },
        include: {
            User: true
        }
    })
    if (!course) {
        return {
            redirect: {
                destination: '/404'
            }
        }
    }
    return {
        props: {
            course: JSON.parse(JSON.stringify(course))
        }
    }
}
