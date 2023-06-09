import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { RecoilRoot } from 'recoil'
import toast, { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
   
    <RecoilRoot>
      <Toaster/>
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
    
  )
}
