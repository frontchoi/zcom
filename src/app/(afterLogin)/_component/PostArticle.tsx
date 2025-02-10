/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ReactNode } from 'react';
import style from './post.module.css';

type Props = {
  children: ReactNode;
  post: {
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  return <article className={style.post}>{children}</article>;
}
