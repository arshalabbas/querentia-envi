import { fetchQuestions } from "@/lib/actions/question.actions";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
  // const user = await currentUser();
  const result = await fetchQuestions(1, 30);
  return (
    <div>
      <h1 className="text-head">Home</h1>
      <section>
        {result.questions.length === 0 ? (
          <p className="text-secondary-content text-center text-3xl mt-10 font-extrabold">
            No Posts Yet
          </p>
        ) : (
          <>
            {result.questions.map((item) => (
              <p key={item.title}>{item.title}</p>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Page;
