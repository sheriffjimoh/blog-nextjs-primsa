import prisma from '../../../lib/prisma';

// PUT /api/publish/:id
export default async function handle(req: { query: { id: any; }; }, res: {
        json: (arg0: {
            id: string; title: string;
            // PUT /api/publish/:id
            content: string; published: boolean; authorId: string;
        }) => void;
    }) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}