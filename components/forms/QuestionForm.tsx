"use client";

import PostHeader from "@/components/shared/PostHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  QuestionValidation,
  QuestionValidationType,
} from "@/lib/validation/QuestionValidation";

const QuestionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuestionValidationType>({
    resolver: zodResolver(QuestionValidation),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: QuestionValidationType) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start"
    >
      <PostHeader
        register={register}
        placeholder="What's your problem?"
        errors={errors}
      />
      <button type="submit" className="btn btn-info btn-wide mt-3">
        Post
      </button>
    </form>
  );
};

export default QuestionForm;
