import dbClient from "@/db/mongodb";
import { redirect } from "next/navigation";

export default function MemberCreatePage() {


    // server action
    const createMember = async(formData: FormData) => {
        "use server"

        const name = formData.get('name') as string;
        const avatar = formData.get('avatar') as string;

        const member = await dbClient
        .db('next-members')
        .collection('members')
        .insertOne({name, avatar, createdAt: new Date().toISOString()});

        console.log(member);
        redirect('/members');
    }

  return (
    <form action={createMember}>
      <div className="flex flex-col gap-3 max-w-xl mx-auto bg-slate-300 p-5 rounded">
        <h3 className="font-bold m-3">Create new member</h3>

        <div className="flex gap-4">
          <label htmlFor="name" className="w-10">
            Name
          </label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="flex gap-4">
          <label htmlFor="avatar" className="w-10">
            Avatar
          </label>
          <input type="text" name="avatar" id="avatar" />
        </div>

        <button type="submit" className="rounded bg-green-500 p-2 w-full">
          Create
        </button>
      </div>
    </form>
  );
}
