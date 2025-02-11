'use client';

import { handlers } from '@/mocks/handlers';
import { Suspense, use } from 'react';

const mockingEnabledPromise =
  typeof window !== 'undefined'
    ? // todo: 실행환경이 브라우저 일 때 (use client)
      import('@/mocks/browser').then(async ({ default: worker }) => {
        // todo: 운영모드 일 경우는 MSW 실행 X
        if (process.env.NODE_ENV === 'production') return;
        await worker.start({
          // todo: MSW 가 처리할 수 없는 요청이 들어왔을 때
          onUnhandledRequest(request, print) {
            // todo: _next 가 내부적으로 처리하는 요청이므로 MSW 가 할 필요 X
            if (request.url.includes('_next')) return;
            print.warning();
          },
        });
        worker.use(...handlers);
        (module as any).hot?.dispose(() => {
          worker.stop();
        });
        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);
  return children;
}
