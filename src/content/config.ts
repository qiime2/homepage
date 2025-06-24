import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const distroCollection = defineCollection({
  loader: async () => {
    const response = await fetch("https://library.qiime2.org/json/distros.json");
    const data = await response.json();
    return data.distros.map((obj) => ({
      id: obj.name,
      ...obj,
      callToAction: {
        variant: 'tertiary',
        text: 'Get Started',
        href: 'https://library.qiime2.org/quickstart/' + obj.name,
        target: '_blank',
        icon: 'tabler:external-link',
      }
    }))
  }
})


const blogLoader = async () => {
    let api_key =  import.meta.env.DISCOURSE_API_KEY
    let headers = {
     'Api-Key': api_key,
     'Api-Username': 'system'
    }

    const releaseResp = await fetch("https://forum.qiime2.org/tag/release.json", { headers });
    const newsResp = await fetch("https://forum.qiime2.org/c/miscellaneous-categories/news/38.json", { headers });

    const releases = (await releaseResp.json()).topic_list.topics;
    const news = (await newsResp.json()).topic_list.topics;

    const ignoreAbouts = [33324]
    const topics = [...releases, ...news]
      .filter((topic) => !ignoreAbouts.includes(topic.id))
      .sort((a, b) => b.created_at.localeCompare(a.created_at))

    let posts = topics.map(async (post, idx) => {
      let postURL = `https://forum.qiime2.org/t/${post.id}.json`
      // the poor man's waterfall
      await new Promise(r => setTimeout(r, 350 * idx));
      let topic = await fetch(postURL);
      let data;

      try {
        data = await topic.json();
      } catch {
        console.log("Rate limited on: " + postURL)
      }
      let content = data.post_stream.posts[0].cooked
      return {
        id: "" + post.id,
        slug: post.slug,
        title: post.title,
        tags: post.tags,
        publishDate: new Date(post.created_at),
        content
      }
    });

    return Promise.all(posts)
}


const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: blogLoader,
  // schema: z.object({
  //   publishDate: z.date().optional(),
  //   updateDate: z.date().optional(),
  //   draft: z.boolean().optional(),

  //   title: z.string(),
  //   excerpt: z.string().optional(),
  //   image: z.string().optional(),

  //   category: z.string().optional(),
  //   tags: z.array(z.string()).optional(),
  //   author: z.string().optional(),

  //   metadata: metadataDefinition(),
  // }),
});

export const collections = {
  post: postCollection,
  distros: distroCollection,
};
