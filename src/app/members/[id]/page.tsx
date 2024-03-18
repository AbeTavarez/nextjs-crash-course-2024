import { members } from "@/db";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import dbClient from "@/db/mongodb";
import { ObjectId } from "mongodb";

interface MemberPageProps {
  params: {
    id: string;
  };
}

export default async function MemberPage(props: MemberPageProps) {
  // const member = members.find((m) => m.id === props.params.id);

  const member = await dbClient
    .db("next-members")
    .collection("members")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(member);

  if (!member) {
    return notFound();
  }

  async function deleteMember(id: ObjectId) {
    "use server";
    await dbClient
      .db("next-members")
      .collection("members")
      .findOneAndDelete({ _id: new ObjectId(props.params.id) });
    redirect("/members");
  }

  return (
    <div className="container mx-auto bg-blue-700">
      <div className="p-2 flex items-center">
        <Image
          width={200}
          height={200}
          src={member.avatar}
          alt="member photo"
          className="border-4 rounded-full"
        />

        <div className="flex-col text-white ml-5">
          <div className="text-2xl font-bold">{member.name}</div>
          <div>Member Since: {member.createdAt}</div>
        </div>
      </div>

      <div className="flex gap-2 justify-end p-5">
        <form>
          <button className="bg-yellow-300 p-3 rounded">Edit</button>
        </form>

        <form action={deleteMember.bind(null, member._id)}>
          <button className="bg-red-500 p-3 rounded">Delete</button>
        </form>
      </div>
    </div>
  );
}
