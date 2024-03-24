"use server";

import dbClient from "@/db/mongodb";
import { Member } from "@/types";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

// Edit member form action
export const editMemberAction = async (member: Member) => {
  await dbClient
    .db("next-members")
    .collection<Member>("members")
    .findOneAndUpdate(
      { _id: new ObjectId(member._id) },
      {
        $set: {
          name: member.name,
          avatar: member.avatar,
        },
      },
    );

  redirect(`/members/${member._id}`);
};
