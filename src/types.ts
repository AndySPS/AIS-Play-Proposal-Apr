export type Provider = 'netflix' | 'prime' | 'disney' | 'hbo' | 'ais';

export interface ContentItem {
  id: string;
  title: string;
  synopsis: string;
  heroImg: string;
  thumbImg: string;
  provider: Provider;
  meta: string;
  cta?: string;
  progress?: number; // 0 to 1
  isLive?: boolean;
  duration?: string;
  videoId?: string;
}

export interface Section {
  id: string;
  title: string;
  items: ContentItem[];
  locked?: boolean;
  promoProvider?: string;
}
