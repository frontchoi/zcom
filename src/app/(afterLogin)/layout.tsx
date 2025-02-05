export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>애프터 로그인 레이아웃</p>
      {children}
    </div>
  );
}
