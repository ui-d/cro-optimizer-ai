import * as React from 'react';

import { Layout } from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { SearchInput } from '@/components/forms/SearchInput';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <div className='mt-[10%] w-full min-w-full px-10 xl:px-0'>
          <SearchInput
            type='url'
            label='Start here:'
            placeholder='https://example.com'
          />
        </div>
      </main>
    </Layout>
  );
}
