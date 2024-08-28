import {Test} from '@/components/test';
import {compile} from '@onedoc/react-print';
import {NextApiRequest, NextApiResponse} from 'next';
import {NextIntlClientProvider} from 'next-intl';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const locale = 'de';
  const messages = (await import('../../../messages/' + locale + '.json'))
    .default;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const htmlString = await compile(
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone={timeZone}
    >
      <Test />
    </NextIntlClientProvider>
  );

  res.status(200).json(htmlString);
}
