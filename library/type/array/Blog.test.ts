import { Post, Blog } from './Blog';

describe('BlogApp', () => {
    let blog: Blog;
    let post1: Post;
    let post2: Post;
    let post3: Post;

    beforeEach(() => {
        blog = new Blog();

        post1 = new Post('Introduction to TypeScript', 'TypeScript is a superset of JavaScript...');
        post2 = new Post('Building a RESTful API with Node.js', 'In this tutorial, we will...');
        post3 = new Post('Getting Started with React', 'React is a JavaScript library for building user interfaces...');
    });

    test('should add a post to the blog', () => {
        blog.addPost(post1);
        expect(blog.getPosts().length).toBe(1);
    });

    test('should display blog content', () => {
        blog.addPost(post1);
        blog.addPost(post2);
        blog.addPost(post3);

        const consoleSpy = jest.spyOn(console, 'log');
        blog.displayBlog();

        expect(consoleSpy).toHaveBeenCalledTimes(11); // 12 log statements (3 posts x 4 lines each)
        expect(consoleSpy).toHaveBeenCalledWith('Blog Content:');
        expect(consoleSpy).toHaveBeenCalledWith('-------------------------');
        expect(consoleSpy).toHaveBeenCalledWith('Title: Introduction to TypeScript');
        expect(consoleSpy).toHaveBeenCalledWith('Content: TypeScript is a superset of JavaScript...');
        expect(consoleSpy).toHaveBeenCalledWith('-------------------------');
    });
});
