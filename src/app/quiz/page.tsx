import dynamic from "next/dynamic";
import Link from "next/link";


const QuizModule = dynamic(
    () => import("@/components/quiz/quizModule"),
    { ssr: false }
  );

export default function QuizPage() {
    return (
        <>
            <div className="lg:max-w-[1920px] w-full px-5 lg:px-24 mx-auto pt-4">
                <div className="text-xs text-gray-400 mb-4">
                    <Link href="/" className="hover:text-black">HOME</Link>
                    <span className="mx-2">/</span>
                    <span className="text-black">Find Your Products</span>
                </div>
            </div>
            <QuizModule />
        </>
    );
}