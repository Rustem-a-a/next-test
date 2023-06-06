import React from 'react';
type Props = {
    promise:Promise<Post[]>
}

export default async function UserPosts({promise}:Props){
    const userPosts = await promise
    return (
        <div>
        {userPosts.map(post=>(
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <br/>
                </article>
        ))}
        </div>
    );
};
