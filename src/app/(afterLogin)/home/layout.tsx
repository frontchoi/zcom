export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>홈 레이아웃</p>
      {children}
    </div>
  );
}
