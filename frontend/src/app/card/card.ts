/**
 * Created by wiekonek on 10.11.16.
 */
export class Card {
  key: string;
  name: string;
  avatarUrls: AvatarUrls;
}

export interface AvatarUrls {
  '48x48': string;
  '24x24': string;
  '16x16': string;
  '32x32': string;
}
