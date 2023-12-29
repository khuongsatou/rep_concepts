export class Post {
    constructor(public title: string, public content: string) {}
}

export class Blog {
    private posts: Post[] = [];

    addPost(post: Post): void {
        this.posts.push(post);
    }

    getPosts(): Post[] {
        return this.posts;
    }

    displayBlog(): void {
        console.log('Blog Content:');
        console.log('-------------------------');
        this.posts.forEach(post => {
            console.log(`Title: ${post.title}`);
            console.log(`Content: ${post.content}`);
            console.log('-------------------------');
        });
    }
}

// Example Usage:

const blog = new Blog();

const post1 = new Post('Introduction to TypeScript', 'TypeScript is a superset of JavaScript...');
const post2 = new Post('Building a RESTful API with Node.js', 'In this tutorial, we will...');
const post3 = new Post('Getting Started with React', 'React is a JavaScript library for building user interfaces...');

blog.addPost(post1);
blog.addPost(post2);
blog.addPost(post3);

blog.displayBlog();
