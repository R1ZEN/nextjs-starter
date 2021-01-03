import React from 'react';
import { DesktopPageLayout } from 'src/components/common/desktop-page-layout/desktop-page-layout';
import { DesktopNotFound } from 'src/components/desktop-not-found/desktop-not-found';

export default function NotFoundPage() {
  return (
    <DesktopPageLayout>
      <DesktopNotFound />
    </DesktopPageLayout>
  );
}
