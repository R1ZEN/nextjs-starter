declare namespace Express {
  export interface Request {
    isMobile: boolean;
    isDesktop: boolean;
    isTablet: boolean;
  }
}
