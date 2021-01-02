declare module NodeJS {
  interface Global {
    nextDesktopServer: import('next/dist/next-server/server/next-server').default;
    nextMobileServer: import('next/dist/next-server/server/next-server').default;
    server: import('express').Application;
  }
}
