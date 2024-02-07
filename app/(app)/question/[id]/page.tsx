import QuestionActionCard from "@/components/ui/QuestionActionCard";
// import QuestionCard from "@/components/ui/QuestionCard";
import { fetchQuestionById } from "@/lib/actions/question.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  const question = await fetchQuestionById(params.id);
  return (
    <section>
      <QuestionActionCard
        title={question.title}
        description={question.description}
        author={question.author}
        questionId={question._id}
      />
    </section>
  );
};

export default Page;
