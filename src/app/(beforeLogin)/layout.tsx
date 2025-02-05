export default function BeforeLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <p>비포 로그인 레이아웃</p>
      {children}
      {modal}
    </>
  );
}
