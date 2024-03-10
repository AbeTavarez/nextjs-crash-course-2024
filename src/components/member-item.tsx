import Link from "next/link";
import Image from "next/image";
import { Member } from "@/types";


interface MemberItemProps {
    member: Member
}

export default function MemberItem(props: MemberItemProps) {
const {member} = props;

  return (
    <Link href={`/members/${member._id}`} className="flex flex-col items-center">
        <Image 
        width={100}
        height={100}
        src={member.avatar} alt="member photo"
        className="border-2 border-blue-700 rounded-full" 
        />
      <div className="font-bold text-center">{member.name}</div>
    </Link>
  );
}
