import { Test } from "@/components/test";
import { compile } from "@onedoc/react-print";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  unstable_setRequestLocale("de");
  const messages = await getMessages({ locale: "de" }); // without locale:de this don't work
  const htmlString = await compile(<>
        <NextIntlClientProvider messages={messages} locale="de">
         <Test/>
        </NextIntlClientProvider>
        </>
    );

  return Response.json({});
}