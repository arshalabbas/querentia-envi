import QuestionCard from "@/components/ui/QuestionCard";
import { fetchQuestions } from "@/lib/actions/question.actions";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
  // const user = await currentUser();
  const result = await fetchQuestions(1, 30);
  return (
    <div>
      <h1 className="text-head">Home</h1>
      <section className="flex flex-col gap-3 py-5">
        {result.questions.length === 0 ? (
          <p className="text-secondary-content text-center text-3xl mt-10 font-extrabold">
            No Posts Yet
          </p>
        ) : (
          <>
            {result.questions.map((question) => (
              <QuestionCard
                key={question._id}
                title={question.title}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur nam ab consequatur corporis non corrupti illum, harum error dignissimos culpa molestiae pariatur amet, iusto veritatis vero deserunt nemo reprehenderit!"
                }
                author={question.author}
                questionId={question._id}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Page;
