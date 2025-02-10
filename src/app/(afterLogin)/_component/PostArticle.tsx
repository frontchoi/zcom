/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

// import { useRouter } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import style from './post.module.css';

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  return (
    <article
      className={style.post}
      onClickCapture={() => {
        router.push(`${post.User.id}/status/${post.postId}`);
      }}
    >
      {children}
    </article>
  );
}
