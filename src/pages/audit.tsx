import * as React from 'react';

import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { Card } from '@/components/cards/card';
import { Container } from '@/components/containers/container';
import { BsSpeedometer2 } from 'react-icons/bs';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <Container>
          <div className='grid grid-cols-3 justify-center justify-items-center gap-10 py-32'>
            {/*<Card icon={<BsSpeedometer2 size='100px' />} />*/}
            {/*<Card />*/}
            {/*<Card />*/}
            {/*<Card />*/}
            {/*<Card />*/}
            {/*<Card />*/}
            {/*<Card />*/}
            {/*<Card />*/}
            {/*<Card />*/}
            {/*<Card />*/}
          </div>
        </Container>
      </main>
    </Layout>
  );
}
