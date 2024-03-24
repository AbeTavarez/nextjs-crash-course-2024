import MemberEditForm from "@/components/member-edit-form";
import dbClient from "@/db/mongodb";
import { Member } from "@/types";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";

interface EditMemberPageProps {
  params: {
    id: string;
  };
}

export default async function EditMemberPage(props: EditMemberPageProps) {
  const member = await dbClient
    .db("next-members")
    .collection<Member>("members")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(member);

  if (!member) {
    return notFound();
  }

  return (
    <div>
      <MemberEditForm member={member} />
    </div>
  );
}
