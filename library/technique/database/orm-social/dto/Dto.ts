export class Transformer {
  static transformToDTO<T, U>(source: T, destinationClass: { new (): U }): U {
    const destination = new destinationClass();
    Object.assign(destination, source);
    return destination;
  }
}

// user.dto.ts
export class UserDTO {
  userName: string;
  email: string;
  avatar: string;
}

// video.dto.ts
export class VideoDTO {
  videoPath: string;
  duration: number;
}

// view.dto.ts
export class ViewDTO {
  // Không cần fields trong trường hợp này
}


// like.dto.ts
export class LikeDTO {
  // Không cần fields trong trường hợp này
}

// comment.dto.ts
export class CommentDTO {
  content: string;
}
