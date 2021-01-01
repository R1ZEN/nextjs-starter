declare module NodeJS {
  interface Global {
    nextServer: import('next/dist/next-server/server/next-server').default;
    server: import('express').Application;
  }
}
