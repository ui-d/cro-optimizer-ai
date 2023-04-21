import * as React from 'react';

import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { Container } from '@/components/containers/container';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <Container>
          <div className='grid grid-cols-3 justify-center justify-items-center gap-10 py-32'></div>
        </Container>
      </main>
    </Layout>
  );
}
