import {getServerSession} from "next-auth/next";
import {authConfig} from "@/configs/auth";
import Image from "next/image";

const Profile =async () => {
    const session = await getServerSession(authConfig)
    console.log(session)
    return (
        <div>
            <h1>Profile information: {session?.user?.name}</h1>
            <h2>Name: {session?.user?.name}</h2>
            <h2>Email: {session?.user?.email}</h2>
            <image src={session?.user?.image}
                   alt='prof photo'/>
        </div>
    );
};

export default Profile;
