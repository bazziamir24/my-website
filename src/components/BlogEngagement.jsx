import React, { useEffect, useMemo, useState } from 'react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function isConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

async function supabaseFetch(path, options = {}) {
  if (!isConfigured()) {
    throw new Error('Supabase is not configured.');
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase request failed with ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export default function BlogEngagement({ postSlug }) {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(isConfigured());

  const localLikeKey = useMemo(() => `blog-like:${postSlug}`, [postSlug]);

  useEffect(() => {
    if (!isConfigured()) {
      setLoading(false);
      return;
    }

    setLiked(localStorage.getItem(localLikeKey) === '1');

    Promise.all([loadLikes(postSlug), loadComments(postSlug)])
      .then(([likes, loadedComments]) => {
        setLikeCount(likes);
        setComments(loadedComments);
      })
      .catch(() => {
        setStatus('Could not load comments right now.');
      })
      .finally(() => setLoading(false));
  }, [localLikeKey, postSlug]);

  async function handleLike() {
    if (!isConfigured() || liked) {
      return;
    }

    setLiked(true);
    setLikeCount((count) => count + 1);
    localStorage.setItem(localLikeKey, '1');

    try {
      await supabaseFetch('blog_likes', {
        method: 'POST',
        body: JSON.stringify({ post_slug: postSlug }),
      });
    } catch {
      setLiked(false);
      setLikeCount((count) => Math.max(0, count - 1));
      localStorage.removeItem(localLikeKey);
      setStatus('Could not save your like right now.');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedBody = body.trim();

    if (!trimmedBody) {
      setStatus('Write a comment first.');
      return;
    }

    setStatus('Posting...');

    try {
      const [createdComment] = await supabaseFetch('blog_comments', {
        method: 'POST',
        body: JSON.stringify({
          post_slug: postSlug,
          author_name: trimmedName || 'Anonymous',
          body: trimmedBody,
        }),
      });

      setComments((current) => [createdComment, ...current]);
      setName('');
      setBody('');
      setStatus('Comment posted.');
    } catch {
      setStatus('Could not post your comment right now.');
    }
  }

  return (
    <section className="mt-16 border-t border-gray-200 pt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Join the discussion
          </h2>
          <p className="mt-2 text-gray-600">
            Leave a quick thought or like the post.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLike}
          disabled={!isConfigured() || liked}
          className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white shadow transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {liked ? 'Liked' : 'Like'} · {likeCount}
        </button>
      </div>

      {!isConfigured() ? (
        <p className="mt-6 rounded-lg bg-amber-50 p-4 text-sm leading-6 text-amber-800 ring-1 ring-amber-200">
          Comments and likes are ready in the code. Add the Supabase URL and
          anon key to enable them on the live site.
        </p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            />
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="Comment"
              rows={4}
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            />
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
            >
              Post comment
            </button>
            {status ? <p className="text-sm text-gray-500">{status}</p> : null}
          </form>

          <div className="mt-10 space-y-5">
            {loading ? (
              <p className="text-gray-500">Loading comments...</p>
            ) : comments.length ? (
              comments.map((comment) => (
                <article
                  key={comment.id}
                  className="rounded-lg bg-gray-50 p-5 ring-1 ring-gray-200"
                >
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {comment.author_name || 'Anonymous'}
                    </h3>
                    <time className="text-xs text-gray-500">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </time>
                  </div>
                  <p className="mt-3 whitespace-pre-wrap leading-7 text-gray-700">
                    {comment.body}
                  </p>
                </article>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>
        </>
      )}
    </section>
  );
}

async function loadLikes(postSlug) {
  const data = await supabaseFetch(
    `blog_likes?post_slug=eq.${encodeURIComponent(postSlug)}&select=id`
  );

  return data.length;
}

async function loadComments(postSlug) {
  return supabaseFetch(
    `blog_comments?post_slug=eq.${encodeURIComponent(
      postSlug
    )}&select=id,author_name,body,created_at&order=created_at.desc`
  );
}
