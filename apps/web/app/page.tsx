import { ZhuixunApiClient } from "@zhuixun/api-client";
import type { ZhuixunSnapshot } from "@zhuixun/api-client";

export const dynamic = "force-dynamic";

const apiBaseUrl = process.env.ZHUIXUN_API_URL ?? "http://localhost:8080";

export default async function HomePage() {
  const client = new ZhuixunApiClient(apiBaseUrl);
  const { snapshot, error } = await getSnapshot(client);

  if (error || !snapshot) {
    return (
      <main className="shell">
        <header className="topbar">
          <div className="brand">Zhuixun</div>
          <div className="user-pill">Offline demo</div>
        </header>
        <div className="layout">
          <aside className="sidebar" aria-label="People and accounts">
            <p className="section-title">People</p>
            <div className="empty-state">Start the API to load people and accounts.</div>
          </aside>
          <section className="timeline" aria-label="Mock timeline">
            <div className="timeline-header">
              <h1 className="timeline-title">Mock feed</h1>
              <div className="person-meta">0 follows connected</div>
            </div>
            <div className="empty-state">{error}</div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">Zhuixun</div>
        <div className="user-pill">{snapshot.session.user.displayName}</div>
      </header>

      <div className="layout">
        <aside className="sidebar" aria-label="People and accounts">
          <p className="section-title">People</p>
          <div className="person-list">
            {snapshot.people.map((person) => (
              <section className="person-card" key={person.id}>
                <div className="person-name">{person.displayName}</div>
                <div className="person-meta">{person.circle}</div>
                <div className="person-meta">{person.bio}</div>
              </section>
            ))}
          </div>

          <p className="section-title">Platform accounts</p>
          <div className="account-list">
            {snapshot.platformAccounts.map((account) => (
              <div className="account-line" key={account.id}>
                {account.platform} / {account.handle}
              </div>
            ))}
          </div>
        </aside>

        <section className="timeline" aria-label="Mock timeline">
          <div className="timeline-header">
            <h1 className="timeline-title">Mock feed</h1>
            <div className="person-meta">{snapshot.follows.length} follows connected</div>
          </div>

          {snapshot.feed.length === 0 ? (
            <div className="empty-state">No feed items yet.</div>
          ) : (
            <div className="feed-list">
              {snapshot.feed.map((item) => (
                <article className="feed-card" key={item.id}>
                  <div className="feed-title">
                    <h2>{item.personName}</h2>
                    <span className="platform">{item.platform}</span>
                  </div>
                  <div className="feed-meta">
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "medium",
                      timeStyle: "short"
                    }).format(new Date(item.publishedAt))}
                    {" / "}
                    <a href={item.sourceUrl}>Original source</a>
                  </div>
                  <p className="summary">{item.chineseSummary}</p>
                  <p className="original">{item.originalText}</p>
                  <div className="tags" aria-label="Topic tags">
                    {item.topicTags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

async function getSnapshot(
  client: ZhuixunApiClient
): Promise<{ snapshot: ZhuixunSnapshot; error: null } | { snapshot: null; error: string }> {
  try {
    return { snapshot: await client.getSnapshot(), error: null };
  } catch {
    return {
      snapshot: null,
      error: "API is not reachable. Start the Spring Boot API to load the Week 1 mock feed."
    };
  }
}
