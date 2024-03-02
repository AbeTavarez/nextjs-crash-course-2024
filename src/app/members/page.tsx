import MemberItem from "@/components/member-item";
import { members } from "@/db";

export default function MembersPage() {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl mb-5">Members Page</h1>

        <div className="flex flex-wrap gap-5">
        {members.map((member) => (
          <MemberItem member={member} key={member.id} />
        ))}
      </div>

      </div>
    );
  }