// server 리다이렉트
// import { redirect } from 'next/navigation';

// export default function Login() {
//   return redirect('/i/flow/login');
// }

'use client';
import { useRouter } from 'next/navigation';
import Main from '../_component/Main';

export default function Loign() {
  const router = useRouter();

  router.replace('/i/flow/login');
  return <Main />;
}
