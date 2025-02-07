import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';

export default function Home() {
  return (
    <div className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
      </TabProvider>
    </div>
  );
}
