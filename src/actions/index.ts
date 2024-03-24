"use server";

import dbClient from "@/db/mongodb";
import { Member } from "@/types";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

/**
 * Edit Member
 * @param member 
 */
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

/**
 * Create Member
 * @param formData 
 */
export const createMember = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const avatar = formData.get("avatar") as string;

  const member = await dbClient
    .db("next-members")
    .collection("members")
    .insertOne({ name, avatar, createdAt: new Date().toISOString() });

  console.log(member);
  redirect("/members");
};


/**
 * Delete Member
 * @param id 
 */
export const deleteMember = async (id: ObjectId) => {
  await dbClient
    .db("next-members")
    .collection("members")
    .findOneAndDelete({ _id: new ObjectId(id) });
  redirect("/members");
};
