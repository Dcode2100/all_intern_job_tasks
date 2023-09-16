import Image from "next/image";
import { Inter } from "next/font/google";
import signup from './auth/signup';
import Layout from '@/components/Layout'
import MyProfile from '@/components/MyProfile'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative w-[100%]">
      <Layout>
        <MyProfile/>
    </Layout>
    </main>
  );
}
