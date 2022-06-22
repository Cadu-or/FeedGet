import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({type, comment, screenshot}: FeedbackCreateData) {
    await prisma.feedbacks.create({
      data: {
        type,
        comment,
        screenshot,
      }
    });
  }
} 