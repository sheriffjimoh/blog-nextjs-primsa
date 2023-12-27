import prisma from '../../../lib/prisma';

// DELETE /api/post/:id
export default async function handle(req: { query: { id: any; }; method: string; }, res: {
        json: (arg0: {
            id: string; title: string;
            // DELETE /api/post/:id
            content: string; published: boolean; authorId: string;
        }) => void;
    }) {
  const postId = req.query.id;
  if (req.method === 'DELETE') {
    const post = await prisma.post.delete({
      where: { id: postId },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}