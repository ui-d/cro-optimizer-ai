import * as React from 'react';

import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { SearchInput } from '@/components/forms/SearchInput';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <div className='mt-[10%] w-full min-w-full px-10 xl:px-0'></div>
      </main>
    </Layout>
  );
}
