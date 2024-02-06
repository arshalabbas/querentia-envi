"use server";

import { revalidatePath } from "next/cache";
import Question from "../models/question.model";
import User from "../models/user.model";
import connectToDB from "../mongoose";
import mongoose from "mongoose";

interface Params {
  title: string;
  description: string;
  userId: string;
  path: string;
}

export async function postQuestion({
  title,
  description,
  userId,
  path,
}: Params) {
  try {
    connectToDB();

    const postedQuestion = await Question.create({
      title,
      description,
    });

    await User.findOneAndUpdate(
      { id: userId },
      {
        $push: { questions: postedQuestion._id },
      }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error posting question: ${error.message}`);
  }
}

export async function fetchQuestions(pageNumber = 1, pageSize = 20) {
  const skipAmount = (pageNumber - 1) * pageSize;
  try {
    connectToDB();
    const questionsQuery = Question.find({
      parentId: { $in: [null, undefined] },
    })
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(pageSize)
      .populate({
        path: "author",
        model: User,
      });

    const totalQuestionsCount = await User.countDocuments({
      parentId: { $in: [null, undefined] },
    });

    const questions = await questionsQuery.exec();
    const isNext = totalQuestionsCount > skipAmount + questions.length;
    return { questions, isNext };
  } catch (error: any) {
    throw new Error(`Error fetching questions: ${error.message}`);
  }
}
