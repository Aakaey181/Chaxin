export interface CurrentUser {
  id: string;
  displayName: string;
  roles: string[];
}

export interface SessionResponse {
  authenticated: boolean;
  user: CurrentUser;
}

export interface Person {
  id: string;
  displayName: string;
  circle: string;
  bio: string;
}

export interface PlatformAccount {
  id: string;
  personId: string;
  platform: string;
  handle: string;
  profileUrl: string;
}

export interface Follow {
  id: string;
  userId: string;
  personId: string;
  createdAt: string;
}

export interface FeedItem {
  id: string;
  personId: string;
  platformAccountId: string;
  personName: string;
  platform: string;
  sourceUrl: string;
  publishedAt: string;
  originalText: string;
  chineseSummary: string;
  topicTags: string[];
}

export interface TraxynSnapshot {
  session: SessionResponse;
  people: Person[];
  platformAccounts: PlatformAccount[];
  follows: Follow[];
  feed: FeedItem[];
}

export class TraxynApiClient {
  constructor(private readonly baseUrl: string) {}

  async getSession(): Promise<SessionResponse> {
    return this.get("/api/auth/session");
  }

  async getPeople(): Promise<Person[]> {
    return this.get("/api/people");
  }

  async getPlatformAccounts(): Promise<PlatformAccount[]> {
    return this.get("/api/platform-accounts");
  }

  async getFollows(): Promise<Follow[]> {
    return this.get("/api/follows");
  }

  async getMockFeed(): Promise<FeedItem[]> {
    return this.get("/api/feed/mock");
  }

  async getSnapshot(): Promise<TraxynSnapshot> {
    const [session, people, platformAccounts, follows, feed] = await Promise.all([
      this.getSession(),
      this.getPeople(),
      this.getPlatformAccounts(),
      this.getFollows(),
      this.getMockFeed()
    ]);

    return { session, people, platformAccounts, follows, feed };
  }

  private async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: { accept: "application/json" },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Traxyn API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}
