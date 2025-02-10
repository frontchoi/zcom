import Image from 'next/image';
import Link from 'next/link';
import zLogo from '../../../public/zlogo.png';
import FollowRecommend from './_component/FollowRecommend';
import LogoutButton from './_component/LogoutButton';
import NavMenu from './_component/NavMenu';
import RightSearchZone from './_component/RightSearchZone';
import TrendSection from './_component/TrendSection';
import style from './layout.module.css';

export default async function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.lgoPill}>
                <Image src={zLogo} alt="로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSerction}>
            <RightSearchZone />
            <TrendSection />
            <div>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
