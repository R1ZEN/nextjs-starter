import React from 'react';
import { DesktopPageLayout } from 'src/modules/core/components/common/desktop-page-layout/desktop-page-layout';
import { DesktopNotFound } from 'src/modules/desktop-not-found/desktop-not-found';

export default function NotFoundPage() {
  return (
    <DesktopPageLayout>
      <DesktopNotFound />
    </DesktopPageLayout>
  );
}
