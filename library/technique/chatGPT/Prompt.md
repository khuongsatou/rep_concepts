# Key concepts
- OpenAI Cookbook
- Token
- Tiktoken
# Các chức năng chính:
- Text generation models: code generation, summarization, conversation, creative writing, and more
- Assistants: 
- Embeddings: search, clustering, recommendations, anomaly detection, classification, and more
- Token: 1 token tương đương khoảng 4 ký tự hoặc 0.75 từ cho văn bản tiếng Anh

# Các model và chức năng:
MÔ HÌNH MÔ TẢ
- GPT-4 và GPT-4 Turbo: Một bộ mô hình cải tiến so với GPT-3.5 và có khả năng hiểu cũng như tạo ra ngôn ngữ tự nhiên hoặc mã
- GPT-3.5: Một bộ mô hình cải tiến so với GPT-3 và có khả năng hiểu cũng như tạo ra ngôn ngữ tự nhiên hoặc mã
- DALL·E: Một mô hình có khả năng tạo và chỉnh sửa hình ảnh dựa trên một yêu cầu ngôn ngữ tự nhiên
- TTS: Một bộ mô hình có thể chuyển đổi văn bản thành âm thanh nói tự nhiên
- Whisper: Một mô hình có thể chuyển đổi âm thanh thành văn bản
- Embeddings: Một bộ mô hình có thể chuyển đổi văn bản thành một biểu diễn số học
- Moderation: Một mô hình được điều chỉnh tốt có thể phát hiện xem văn bản có thể nhạy cảm hoặc không an toàn không
- GPT cơ bản: Một bộ mô hình không có chế độ tuân thủ hướng dẫn có thể hiểu cũng như tạo ra ngôn ngữ tự nhiên hoặc mã
-> deprecated : Một danh sách đầy đủ các mô hình đã deprecated cùng với mô hình thay thế đề xuất
-> Chúng tôi cũng đã công bố các mô hình mã nguồn mở bao gồm Point-E, Whisper, Jukebox và CLIP.

# GPT-4 and GPT-4 Turbo
- gpt-4-1106-preview: 128,000 token
- gpt-4-32k-0613: 32,768 tokens
# GPT-3.5
- gpt-3.5-turbo-1106: 16,385 tokens
- gpt-3.5-turbo-0301: 4,096 tokens
# DALL-E
- dall-e-3: Tạo hình ảnh 2023
- dall-e-2: Tạo hình ảnh 2022
# TTS
- tts-1: văn bản thành giọng nói Nhanh
- tts-2-hd: văn bản thành giọng nói Chất lượng
# Whisper
- Whisper v2-large: Giọng nói sang văn bản
# Embeddings
- text-embedding-ada-002: Embeddings hữu ích cho các nhiệm vụ tìm kiếm, phân nhóm, đề xuất, phát hiện bất thường và phân loại
# Moderation
- text-moderation-latest: Các mô hình cung cấp khả năng phân loại để tìm kiếm nội dung trong các danh mục sau: căm ghét, đe doạ/căm ghét, tự tử, tình dục, tình dục/vi phạm, bạo lực và bạo lực/hình ảnh
# GPT base
- babbage-002: khả năng hiểu và tạo ra ngôn ngữ tự nhiên
- davinci-002: khả năng hiểu và tạo ra ngôn ngữ tự nhiên
# Default usage policies by endpoint
/v1/chat/completions*	No	30 days	Yes, except image inputs*
/v1/files	No	Until deleted by customer	No
/v1/assistants	No	Until deleted by customer	No
/v1/threads	No	60 days *	No
/v1/threads/messages	No	60 days *	No
/v1/threads/runs	No	60 days *	No
/v1/threads/runs/steps	No	60 days *	No
/v1/images/generations	No	30 days	No
/v1/images/edits	No	30 days	No
/v1/images/variations	No	30 days	No
/v1/embeddings	No	30 days	Yes
/v1/audio/transcriptions	No	Zero data retention	-
/v1/audio/translations	No	Zero data retention	-
/v1/audio/speech	No	30 days	No
/v1/fine_tuning/jobs	No	Until deleted by customer	No
/v1/moderations	No	Zero data retention	-
/v1/completions	No	30 days	Yes
# Model endpoint compatibility
/v1/assistants	All models except gpt-3.5-turbo-0301 supported. retrieval tool requires gpt-4-1106-preview or gpt-3.5-turbo-1106.
/v1/audio/transcriptions	whisper-1
/v1/audio/translations	whisper-1
/v1/audio/speech	tts-1, tts-1-hd
/v1/chat/completions	gpt-4 and dated model releases, gpt-4-1106-preview, gpt-4-vision-preview, gpt-4-32k and dated model releases, gpt-3.5-turbo and dated model releases, gpt-3.5-turbo-16k and dated model releases, fine-tuned versions of gpt-3.5-turbo
/v1/completions (Legacy)	gpt-3.5-turbo-instruct, babbage-002, davinci-002
/v1/embeddings	text-embedding-ada-002
/v1/fine_tuning/jobs	gpt-3.5-turbo, babbage-002, davinci-002
/v1/moderations	text-moderation-stable, text-moderation-latest
/v1/images/generations	dall-e-2, dall-e-3


# Library:
- openai

# Environment:
- Chỉnh sửa hồ sơ bash: Sử dụng lệnh nano ~/.bash_profile hoặc nano ~/.zshrc
- Sử dụng lệnh source ~/.bash_profile hoặc source ~/.zshrc để tải lại hồ sơ đã cập nhật

# Basic
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

# Các chức năng Text generation models
- Soạn thảo văn bản
- Viết mã máy tính
- Trả lời câu hỏi về cơ sở kiến thức
- Phân tích văn bản
- Cung cấp giao diện ngôn ngữ tự nhiên cho phần mềm
- Hướng dẫn trong nhiều chủ đề
- Dịch ngôn ngữ
- Mô phỏng nhân vật cho trò chơi
- Với việc phát hành gpt-4-vision-preview, bạn cũng có thể xây dựng hệ thống xử lý và hiểu hình ảnh


# Code Text generation models
 const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

# Kết quả
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "The 2020 World Series was played in Texas at Globe Life Field in Arlington.",
        "role": "assistant"
      },
      "logprobs": null
    }
  ],
  "created": 1677664795,
  "id": "chatcmpl-7QyqpwdfhqwajicIEznoc6Q47XAyW",
  "model": "gpt-3.5-turbo-0613",
  "object": "chat.completion",
  "usage": {
    "completion_tokens": 17,
    "prompt_tokens": 57,
    "total_tokens": 74
  }
}

# Nội dung: completion.choices[0].message.content

# response_format: { type: "json_object" },Trả về JSON

# "Counting tokens for chat API calls" Tính số token sau mỗi lần gọi
# Chi phí token.
# Các mô hình ngôn ngữ đọc và viết văn bản theo các đoạn gọi là token: Ví dụ, chuỗi "ChatGPT is great!" được mã hóa thành sáu token: ["Chat", "G", "PT", " is", " great", "!"].
- Cả token đầu vào và đầu ra đều tính đến các số này. Ví dụ, nếu cuộc gọi API của bạn sử dụng 10 token trong đầu vào tin nhắn và bạn nhận được 20 token trong đầu ra tin nhắn, bạn sẽ bị tính phí cho 30 token.

# completions API Legacy
const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Write a tagline for an ice cream shop.'
});

# Chat Completions API
- finish_reason
- logprobs
{
  "choices": [
    {
      "finish_reason": "length",
      "index": 0,
      "logprobs": null,
      "text": "\n\n\"Let Your Sweet Tooth Run Wild at Our Creamy Ice Cream Shack"
    }
  ],
  "created": 1683130927,
  "id": "cmpl-7C9Wxi9Du4j1lQjdjhxBlO22M61LD",
  "model": "gpt-3.5-turbo-instruct",
  "object": "text_completion",
  "usage": {
    "completion_tokens": 16,
    "prompt_tokens": 10,
    "total_tokens": 26
  }
}


# Kỹ thuật prompt
- prompt engineering
Ví dụ: Translate the following English text to French: "{text}"
- Bằng cách cung cấp cho mô hình ngữ cảnh bổ sung nó có thể được kiểm soát nhiều hơn
- Lưu ý rằng bạn chỉ sẽ bị tính phí cho số lượng token được tạo ra, ngay cả khi sử dụng max_tokens lớn hơn.
- Ưu tiên finish_reason == "stop".  Khi mô hình đạt đến một điểm dừng tự nhiên hoặc một chuỗi dừng do người dùng cung cấp, nó sẽ đặt finish_reason là "stop"
- Lưu ý: nếu tất cả các mẫu trả về đều có finish_reason == "length", có khả năng max_tokens quá nhỏ và mô hình hết token trước khi nó có thể kết nối prompt và hậu tố một cách tự nhiên. Xem xét tăng max_tokens trước khi resampling.
- Trong một số trường hợp để hỗ trợ quá trình tạo ra của mô hình, bạn có thể cung cấp gợi ý bằng cách đưa ra một vài ví dụ về các mẫu

# Function calling
- When these models generate a function call and the arguments include non-ASCII characters, the API may return Unicode escape sequences instead of the Unicode character directly.
- Most applications should not be affected by this, as JSON parsers in languages like Python and Javascript will parse these strings into the correct objects

- send_email(to: string, body: string)
- get_current_weather(location: string, unit: 'celsius' | 'fahrenheit')
- get_customers(min_revenue: int, created_before: string, limit: int)
- extract_data(name: string, birthday: string)
- sql_query(query: string)

# Parallel function calling
const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: messages,
    tools: tools,
    tool_choice: "auto", // auto is default, but we'll be explicit
  });
  const responseMessage = response.choices[0].message;

# Fine-tuning
- Higher quality results than prompting: Kết quả chất lượng cao hơn so với việc sử dụng lời nhắc
- Ability to train on more examples than can fit in a prompt: Khả năng đào tạo trên nhiều ví dụ hơn so với lời nhắc có thể chứa
- Token savings due to shorter prompts: Tiết kiệm token do lời nhắc ngắn gọn
- Lower latency requests: Yêu cầu có độ trễ thấp hơn

# Ở mức cao, fine-tuning bao gồm các bước sau:
B1>Chuẩn bị và tải lên dữ liệu đào tạo.
B2>Đào tạo một mô hình mới được fine-tuned.
B3>Đánh giá kết quả và quay lại bước 1 nếu cần thiết.
B4>Sử dụng mô hình fine-tuned của bạn.

# Các trường hợp sử dụng phổ biến Một số trường hợp sử dụng phổ biến mà fine-tuning có thể cải thiện kết quả:
- Thiết lập phong cách, tông, định dạng hoặc các khía cạnh chất lượng khác
- Cải thiện độ tin cậy trong việc tạo ra đầu ra mong muốn
- Sửa các vấn đề không tuân theo các lời nhắc phức tạp
- Xử lý nhiều trường hợp biên trong các cách cụ thể
- Thực hiện một kỹ năng hoặc công việc mới mà khó diễn đạt trong một lời nhắc

# Embeddings
- Tìm kiếm (nơi kết quả được xếp hạng theo mức liên quan đến một chuỗi truy vấn)
- Gom cụm (nơi các chuỗi văn bản được nhóm lại theo độ tương đồng)
- Đề xuất (nơi các mục với các chuỗi văn bản liên quan được đề xuất)
- Phát hiện bất thường (nơi các điểm ngoại lệ có mức liên quan thấp được xác định)
- Đo lường đa dạng (nơi phân tích các phân phối tương đồng)
- Phân loại (nơi các chuỗi văn bản được phân loại dựa trên nhãn tương đồng nhất của chúng)

# embeddings in action
- Phân loại
- Gom cụm chủ đề
- Tìm kiếm
- Đề xuất

# Mô hình:
- ID mô hình embedding (text-embedding-ada-002)
- https://api.openai.com/v1/embeddings

{
  "data": [
    {
      "embedding": [
        -0.006929283495992422,
        -0.005336422007530928,
        ...
        -4.547132266452536e-05,
        -0.024047505110502243
      ],
      "index": 0,
      "object": "embedding"
    }
  ],
  "model": "text-embedding-ada-002",
  "object": "list",
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 5
  }
}

- Usage is priced per input token, at a rate of $0.0004 per 1000 tokens, or about ~3,000 pages per US dollar (assuming ~800 tokens per page)

- client.embeddings.create(input = [text], model=model).data[0].embedding

- t-SNE model

# Tạo mô hình Fine-tuned
# Example format
- {"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "What's the capital of France?"}, {"role": "assistant", "content": "Paris, as if everyone doesn't know that already."}]}


# Estimate costs
- giá cơ bản cho mỗi 1,000 token * số token trong tệp đầu vào * số epoch đã được đào tạo
+ Ví dụ: Đối với một tệp đào tạo có 100,000 token được đào tạo qua 3 epoch, chi phí dự kiến sẽ là khoảng ~$2.40 USD.

# Upload a training file
- await openai.files.create({ file: await fetch('https://somesite/mydata.jsonl'), purpose: 'fine-tune' });

# Yêu cầu:
- File train và giới hạn tối đa là 1GB
- Thiết lập: validation_file và hyperparameters

# Create a fine-tuned model 
const fineTune = await openai.fineTuning.jobs.create({ training_file: 'file-abc123', model: 'gpt-3.5-turbo' })

// Liệt kê 10 công việc fine-tuning
let page = await openai.fineTuning.jobs.list({ limit: 10 });

// Truy xuất trạng thái của một công việc fine-tune
let fineTune = await openai.fineTuning.jobs.retrieve('ftjob-abc123');

// Hủy một công việc
let status = await openai.fineTuning.jobs.cancel('ftjob-abc123');

// Liệt kê tối đa 10 sự kiện từ một công việc fine-tuning
let events = await openai.fineTuning.jobs.listEvents(fineTune.id, { limit: 10 });

// Xóa một mô hình fine-tuned (phải là chủ sở hữu của tổ chức tạo ra mô hình)
let model = await openai.models.delete('ft:gpt-3.5-turbo:acemeco:suffix:abc123')

# Sử dụng mô hình đã train
const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "ft:gpt-3.5-turbo:my-org:custom_suffix:id",
  });


{
    "object": "fine_tuning.job.event",
    "id": "ftevent-abc-123",
    "created_at": 1693582679,
    "level": "info",
    "message": "Step 100/100: training loss=0.00",
    "data": {
        "step": 100,
        "train_loss": 1.805623287509661e-5,
        "train_mean_token_accuracy": 1.0
    },
    "type": "metrics"
}

- Mỗi tệp CSV kết quả có các cột sau: step, train_loss, train_accuracy, valid_loss, và valid_mean_token_accuracy.
# Iterating on hyperparameters
- epochs
- learning rate multiplier
- batch size

- const fineTune = await openai.fineTuning.jobs.create({training_file: "file-abc123", model: "gpt-3.5-turbo", hyperparameters: { n_epochs: 2 }});

# Image generation
API Hình Ảnh cung cấp ba phương thức để tương tác với hình ảnh:
- Tạo hình ảnh từ đầu dựa trên một gợi ý văn bản (DALL·E 3 và DALL·E 2).
- Tạo phiên bản chỉnh sửa của hình ảnh bằng cách thay thế một số khu vực của một hình ảnh đã tồn tại, dựa trên một gợi ý văn bản mới (chỉ DALL·E 2).
- Tạo các biến thể của một hình ảnh hiện có (chỉ DALL·E 2).

# Yêu cầu
+ Khi sử dụng DALL·E 3, hình ảnh có thể có kích thước 1024x1024, 1024x1792 hoặc 1792x1024 pixel.
+ quality: "hd"

const response = await openai.createImage({
  model: "dall-e-3",
  prompt: "a white siamese cat",
  n: 1,
  size: "1024x1024",
});
image_url = response.data.data[0].url;

->  the input image must be a square PNG image less than 4MB in size
# Edit ảnh với DALL-E 2
const response = await openai.createImageEdit(
  fs.createReadStream("sunlit_lounge.png"),
  fs.createReadStream("mask.png"),
  "dall-e-2",
  "A sunlit indoor lounge area with a pool containing a flamingo",
  1,
  "1024x1024"
);
image_url = response.data.data[0].url;

# Variations
const response = await openai.createImageVariation(
  fs.createReadStream("corgi_and_cat_paw.png"),
  "dall-e-2",
  1,
  "1024x1024"
);
image_url = response.data.data[0].url;

# Using in-memory image data
const image = await openai.images.createVariation({ model: "dall-e-2", image: buffer, n: 1, size: "1024x1024" });
  console.log(image.data);

- image: fs.createReadStream("image.png") as any,
- const buffer: Buffer = [your image data];
# Error handling

# Vision

# Uploading URL
response = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "Có gì trong hình ảnh này?"},
        {
          "type": "image_url",
          "image_url": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)

# Uploading base 64 encoded images
# Hàm mã hóa hình ảnh
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')


payload = {
  "model": "gpt-4-vision-preview",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Có gì trong hình ảnh này?"
        },
        {
          "type": "image_url",
          "image_url": {
            "url": f"data:image/jpeg;base64,{base64_image}"
          }
        }
      ]
    }
  ],
  "max_tokens": 300
}

response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

# Multiple image inputs: client.chat.completions.create
"content": [
        {
          "type": "text",
          "text": "What are in these images? Is there any difference between them?",
        },
        {
          "type": "image_url",
          "image_url": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
        {
          "type": "image_url",
          "image_url": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
      ],

# Low or high fidelity image understanding
"content": [
        {
          "type": "text",
          "text": "Trong hình ảnh này có gì?"
        },
        {
          "type": "image_url",
          "image_url": {
            "url": f"data:image/jpeg;base64,{base64_image}"
          },
          "detail": "high"  # Thay đổi giữa low, high hoặc auto
        }
      ]

- low sẽ tắt "chế độ high res". Mô hình sẽ nhận một phiên bản hình ảnh thấp res là 512px x 512px và biểu diễn hình ảnh với ngân sách 65 mã thông báo

- high sẽ bật "chế độ high res", cho phép mô hình nhìn thấy hình ảnh low res trước và sau đó tạo ra các cắt chi tiết của hình ảnh đầu vào là các hình vuông 512px dựa trên kích thước hình ảnh đầu vào. Mỗi cắt chi tiết sử dụng ngân sách mã thông báo gấp đôi (65 mã thông báo) để tổng cộng là 129 mã thông báo.

# Điểm yếu của mô hình vision
- Hình ảnh y tế: Mô hình không phù hợp để giải mã hình ảnh y tế chuyên sâu như CT scans và không nên được sử dụng cho tư vấn y tế.
- Tiếng Anh: Mô hình có thể không hoạt động tối ưu khi xử lý hình ảnh có văn bản trong bảng - chữ cái phi-Latin, chẳng hạn như tiếng Nhật hoặc tiếng Hàn.
- Chữ nhỏ: Phóng to văn bản trong hình ảnh để cải thiện khả đọc, nhưng tránh cắt bớt các chi tiết quan trọng.
- Quay: Mô hình có thể hiểu nhầm về văn bản hoặc hình ảnh bị quay / lật ngược.
- Yếu tố hình ảnh: Mô hình có thể gặp khó khăn khi hiểu biết đồ thị hoặc văn bản trong đó màu sắc hoặc kiểu như đường nét liền, đứt, hoặc chấm nổi.
- Ra quyết định không gian: Mô hình gặp khó khăn trong các nhiệm vụ yêu cầu xác định không gian chính xác, chẳng hạn như xác định vị trí của các quân cờ trong cờ vua.
- Chính xác: Mô hình có thể tạo ra mô tả hoặc chú thích không chính xác trong một số tình huống.
- Hình dạng hình ảnh: Mô hình gặp khó khăn với các hình ảnh toàn cảnh và hình ảnh cái mắt cá chân.
- Metadata và thay đổi kích thước: Mô hình không xử lý tên tệp gốc hoặc siêu dữ liệu và hình ảnh được thay đổi kích thước trước khi phân tích, làm ảnh hưởng đến kích thước ban đầu của chúng.
- Đếm: Có thể cung cấp số lượng xấp xỉ đối với các đối tượng trong hình ảnh.
- CAPTCHA: Vì lý do an toàn, chúng tôi đã triển khai một hệ thống để chặn việc gửi CAPTCHA.*

# Chi phí token
- Chi phí token của một hình ảnh cụ thể được xác định bởi hai yếu tố: kích thước của nó và tùy chọn detail trên mỗi khối image_url.
- detail: low có chi phí 85 token mỗi hình ảnh
- Một hình vuông 1024 x 1024 ở chế độ detail: high có giá là 765 token
- Một hình ảnh 2048 x 4096 ở chế độ detail: high có giá là 1105 token
- Một hình ảnh 4096 x 8192 ở chế độ detail: low có giá là 85 token

# Text to speech
+ The TTS model generally follows the Whisper model in terms of language support
response = client.audio.speech.create(
  model="tts-1",
  voice="alloy",
  input="Today is a wonderful day to build something people love!"
)

response.stream_to_file(speech_file_path)


- Opus: Dùng cho truyền phát và giao tiếp trực tuyến, thấp độ trễ.
- AAC: Dùng cho nén âm thanh kỹ thuật số, được ưa chuộng bởi YouTube, Android, iOS.
- FLAC: Dùng cho nén âm thanh không mất mát, được ưa chuộng bởi người yêu thích âm thanh để lưu trữ.


response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Hello world! This is a streaming test.",
)

response.stream_to_file("output.mp3")

# Speech to text
- Chuyển đổi âm thanh thành văn bản cho bất kỳ ngôn ngữ nào trong âm thanh.
- Dịch và chuyển đổi âm thanh thành tiếng Anh.
- Hiện tại, tải lên tệp bị giới hạn là 25 MB và các loại tệp đầu vào hỗ trợ bao gồm: mp3, mp4, mpeg, mpga, m4a, wav và webm.
- Transcriptions
- translations
- transcript = client.audio.transcriptions.create(
  model="whisper-1", 
  file=audio_file
)

- transcript = client.audio.transcriptions.create(
  model="whisper-1", 
  file=audio_file, 
  response_format="text"
)

- transcript = client.audio.translations.create(
  model="whisper-1", 
  file=audio_file
)

# PyDub xử lý thời gian theo mili giây
ten_minutes = 10 * 60 * 1000

first_10_minutes = song[:ten_minutes]

first_10_minutes.export("good_morning_10.mp3", format="mp3")

# Moderation
https://api.openai.com/v1/moderations

{
  "id": "modr-XXXXX",
  "model": "text-moderation-005",
  "results": [
    {
      "flagged": true,
      "categories": {
        "sexual": false,
        "hate": false,
        "harassment": false,
        "self-harm": false,
        "sexual/minors": false,
        "hate/threatening": false,
        "violence/graphic": false,
        "self-harm/intent": false,
        "self-harm/instructions": false,
        "harassment/threatening": true,
        "violence": true,
      },
      "category_scores": {
        "sexual": 1.2282071e-06,
        "hate": 0.010696256,
        "harassment": 0.29842457,
        "self-harm": 1.5236925e-08,
        "sexual/minors": 5.7246268e-08,
        "hate/threatening": 0.0060676364,
        "violence/graphic": 4.435014e-06,
        "self-harm/intent": 8.098441e-10,
        "self-harm/instructions": 2.8498655e-11,
        "harassment/threatening": 0.63055265,
        "violence": 0.99011886,
      }
    }
  ]
}


# Assistants API
- Tạo một Trợ lý trong API bằng cách xác định hướng dẫn tùy chỉnh của nó và chọn một mô hình. Nếu cần thiết, kích hoạt các công cụ như Code Interpreter, Retrieval và Function calling.
- Tạo một Thread khi người dùng bắt đầu một cuộc trò chuyện.
- Thêm các Tin nhắn vào Thread khi người dùng đặt câu hỏi.
- Chạy Trợ lý trên Thread để kích hoạt các phản hồi. Điều này tự động gọi các công cụ liên quan.

const assistant = await openai.beta.assistants.create({
  name: "Math Tutor",
  instructions: "You are a personal math tutor. Write and run code to answer math questions.",
  tools: [{ type: "code_interpreter" }],
  model: "gpt-4-1106-preview"
});

# Create a Thread
- Một Thread đại diện cho một cuộc trò chuyện.
const thread = await openai.beta.threads.create();


# Bạn vẫn có thể tải lên hình ảnh và xử lý chúng qua công cụ Retrieval.
const message = await openai.beta.threads.messages.create(
  thread.id,
  {
    role: "user",
    content: "I need to solve the equation `3x + 11 = 14`. Can you help me?"
  }
);

{
  "object": "list",
  "data": [
    {
      "created_at": 1696995451,
      "id": "msg_abc123",
      "object": "thread.message",
      "thread_id": "thread_abc123",
      "role": "user",
      "content": [{
        "type": "text",
        "text": {
          "value": "I need to solve the equation `3x + 11 = 14`. Can you help me?",
          "annotations": []
        }
      }],}],
}

const run = await openai.beta.threads.runs.create(
  thread.id,
  { 
    assistant_id: assistant.id,
    instructions: "Please address the user as Jane Doe. The user has a premium account."
  }
);


const run = await openai.beta.threads.runs.retrieve(
  thread.id,
  run.id
);


const messages = await openai.beta.threads.messages.list(
  thread.id
);


# Assistants Beta
- Trợ lý có thể gọi các mô hình của OpenAI với hướng dẫn cụ thể để điều chỉnh tính cách và khả năng của chúng.
- Trợ lý có thể truy cập nhiều công cụ cùng một lúc. Các công cụ này có thể là các công cụ do OpenAI tổ chức - chẳng hạn như Code Interpreter và Knowledge Retrieval - hoặc các công cụ bạn xây dựng/đặt ở đâu đó (thông qua Function Calling).
- Trợ lý có thể truy cập Threads (Luồng) liên tục. Threads giúp đơn giản hóa quá trình phát triển ứng dụng AI bằng cách lưu trữ lịch sử tin nhắn và cắt giảm nó khi cuộc trò chuyện trở nên quá dài so với chiều dài ngữ cảnh của mô hình. Bạn tạo một Thread một lần, và đơn giản chỉ cần thêm Tin nhắn vào nó khi người dùng của bạn trả lời.
- Trợ lý có thể truy cập Files (Tệp) ở nhiều định dạng - hoặc là một phần của quá trình tạo chúng, hoặc là một phần của Threads giữa Trợ lý và người dùng. Khi sử dụng các công cụ, Trợ lý cũng có thể tạo ra các tệp (ví dụ: hình ảnh, bảng tính, v.v.) và trích dẫn các tệp mà họ tham chiếu trong các Tin nhắn họ tạo ra.

# Đối tượng

- Trợ lý (Assistant): Trợ lý AI được xây dựng với việc sử dụng mô hình và gọi các công cụ.
- Thread (Luồng): Một phiên trò chuyện giữa Trợ lý và người dùng. Threads lưu trữ Messages và tự động xử lý cắt giảm khi cuộc trò chuyện trở nên quá dài so với ngữ cảnh của mô hình.
- Message (Tin nhắn): Một tin nhắn được tạo ra bởi Trợ lý hoặc người dùng. Tin nhắn có thể bao gồm văn bản, hình ảnh và các tệp khác.
- Run (Chạy): Một lời kêu gọi của Trợ lý trên một Thread. Trợ lý sử dụng cấu hình của mình và Messages của Thread để thực hiện các nhiệm vụ bằng cách gọi mô hình và công cụ. Là một phần của Run, Trợ lý thêm Messages vào Thread.
- Run Step (Bước chạy): Một danh sách chi tiết các bước Trợ lý thực hiện trong một Run. Trợ lý có thể gọi các công cụ hoặc tạo Messages trong quá trình chạy. Việc kiểm tra Bước chạy cho phép bạn tự kiểm tra cách Trợ lý đạt được kết quả cuối cùng.

# Ví dụ, để tạo một Trợ lý có thể tạo hình ảnh dữ liệu dựa trên một tệp .csv, đầu tiên tải lên một tệp.
const file = await openai.files.create({
  file: fs.createReadStream("mydata.csv"),
  purpose: "assistants",
});

# Và sau đó tạo Trợ lý với tệp đã tải lên.

const assistant = await openai.beta.assistants.create({
  name: "Data visualizer",
  description: "You are great at creating beautiful data visualizations. You analyze data present in .csv files, understand trends, and come up with data visualizations relevant to those trends. You also share a brief text summary of the trends observed.",
  model: "gpt-4-1106-preview",
  tools: [{"type": "code_interpreter"}],
  file_ids: [file.id]
});

-> Đính kèm tối đa 20 tệp cho mỗi Trợ lý, và chúng có thể là tối đa 512 MB mỗi tệp
-> Kích thước của tất cả các tệp được tải lên bởi tổ chức của bạn không được vượt quá 100 GB
-> Ngoài giới hạn kích thước tệp 512 MB, mỗi tệp chỉ có thể chứa 2,000,000 token.

# Bạn có thể tạo một Thread với một danh sách ban đầu các Messages như sau:

const thread = await openai.beta.threads.create({
  messages: [
    {
      "role": "user",
      "content": "Tạo 3 biểu đồ dữ liệu dựa trên các xu hướng trong tệp này.",
      "file_ids": [file.id]
    }
  ]
});

-> Assistants (giới hạn kích thước tệp 512 MB và giới hạn token 2,000,000).

# file_citation
# file_path

# Tools
-> Cung cấp quyền truy cập cho Trợ lý đến các công cụ do OpenAI cung cấp như Code Interpreter và Knowledge Retrieval, hoặc xây dựng các công cụ riêng của bạn bằng cách sử dụng Function calling. 
- Code Interpreter (Trình Phiên Dịch Mã)
-> Code Interpreter được tính phí là $0.03 cho mỗi phiên

const assistant = await openai.beta.assistants.create({
  instructions: "Bạn là một gia sư toán cá nhân. Khi được hỏi một câu hỏi toán học, hãy viết và chạy mã để trả lời câu hỏi.",
  model: "gpt-4-1106-preview",
  tools: [{"type": "code_interpreter"}]
});



// Tải lên một tệp với mục đích là "assistants"
const file = await openai.files.create({
  file: fs.createReadStream("mydata.csv"),
  purpose: "assistants",
});

// Tạo một trợ lý bằng cách sử dụng ID của tệp
const assistant = await openai.beta.assistants.create({
  instructions: "Bạn là một gia sư toán cá nhân. Khi được hỏi một câu hỏi toán học, hãy viết và chạy mã để trả lời câu hỏi.",
  model: "gpt-4-1106-preview",
  tools: [{"type": "code_interpreter"}],
  file_ids: [file.id]
});

-> Tệp có kích thước tối đa là 512 MB.
-> Code Interpreter hỗ trợ nhiều định dạng tệp bao gồm .csv, .pdf, .json và nhiều định dạng khác.


const assistant = await openai.beta.assistants.create({
  instructions: "Bạn là một chatbot hỗ trợ khách hàng. Sử dụng cơ sở kiến thức của bạn để phản hồi tốt nhất cho các truy vấn của khách hàng.",
  model: "gpt-4-1106-preview",
  tools: [{"type": "retrieval"}]
});

- Nếu bạn bật truy xuất cho một Trợ lý cụ thể, tất cả các tệp được đính kèm sẽ tự động được lập chỉ mục và bạn sẽ bị tính phí $0.20/GB mỗi Trợ lý mỗi ngày. Bạn có thể bật/tắt truy xuất bằng cách sử dụng điểm cuối Modify Assistant.


// Tải lên một tệp với mục đích "assistants"
const file = await openai.files.create({
  file: fs.createReadStream("knowledge.pdf"),
  purpose: "assistants",
});

// Thêm tệp vào trợ lý
const assistant = await openai.beta.assistants.create({
  instructions: "Bạn là một chatbot hỗ trợ khách hàng. Sử dụng cơ sở kiến thức của bạn để phản hồi tốt nhất cho các truy vấn của khách hàng.",
  model: "gpt-4-1106-preview",
  tools: [{"type": "retrieval"}],
  file_ids: [file.id]
});

- Kích thước tệp tối đa là 512 MB và không quá 2,000,000 token (tự động tính khi bạn đính kèm một tệp)

-  Truy xuất hỗ trợ nhiều định dạng tệp bao gồm .pdf, .md, .docx và nhiều định dạng khác nữa. Chi tiết hơn về các định dạng tệp (và các MIME-type tương ứng) được hỗ trợ có thể được tìm thấy trong Phần Tệp Được Hỗ Trợ ở dưới đây

# Dell
const fileDeletionStatus = await openai.beta.assistants.files.del(
  assistant.id,
  file.id
);


# Sáu Chiến Lược Để Đạt Được Kết Quả Tốt Hơn

1. **Viết Hướng Dẫn Rõ Ràng**
   - Nếu đầu ra quá dài, yêu cầu câu trả lời ngắn gọn.
   - Nếu đầu ra quá đơn giản, yêu cầu viết theo cấp độ chuyên gia.
   - Mô tả định dạng nếu bạn không thích định dạng mặc định.

2. **Bao Gồm Chi Tiết trong Câu Truy Vấn**
   - Sử dụng các ký tự ngăn cách để phân biệt các phần khác nhau.
   - Chỉ rõ chiều dài mong muốn của đầu ra.
   - Cung cấp ví dụ và văn bản tham chiếu.

3. **Sử Dụng Công Cụ Bên Ngoài**
   - Bù đắp cho nhược điểm bằng cách cung cấp đầu ra của các công cụ khác.
   - Sử dụng tìm kiếm dựa trên vector nhúng và thực thi mã bên ngoài.

4. **Chia Nhỏ Công Việc Phức Tạp Thành Công Việc Đơn Giản**
   - Sử dụng phân loại mục đích để xác định hướng dẫn quan trọng.
   - Tóm tắt hoặc lọc trước đối thoại cho ứng dụng đối thoại dài.

5. **Đưa Mô Hình Thời Gian "Nghĩ"**
   - Hướng dẫn mô hình tự giải quyết vấn đề trước khi kết luận.
   - Sử dụng giả tưởng nội tâm để che giấu quá trình lập luận.

6. **Thử Nghiệm Các Thay Đổi Một Cách Hệ Thống**
   - Đánh giá đầu ra với sự tham khảo đến các câu trả lời chuẩn vàng.

7. **Đưa Ra Lệnh Cho Mô Hình Tự Nhiên (Natural Language Prompting)**
   - Sử dụng câu chuyện hoặc ví dụ để mô tả yêu cầu một cách tự nhiên.
   - Thách thức mô hình với yêu cầu sáng tạo và không có hướng dẫn chi tiết.

*Mỗi chiến lược có thể được triển khai với các chiến thuật cụ thể, và bạn có thể thử nghiệm những ý tưởng sáng tạo không được đại diện.*


# Các kỹ thuật giúp chatGPT luôn trả về đúng
## -> Mô tả đầy đủ
- Ví dụ: How do I add numbers in Excel?
-> Thay vào đó: How do I add up a row of dollar amounts in Excel? I want to do this automatically for a whole sheet of rows with all the totals ending up on the right in a column called "Total".
## -> Yêu cầu mô hình nhận dạng một nhân vật
- SYSTEM
Khi tôi yêu cầu sự giúp đỡ để viết một cái gì đó, bạn sẽ trả lời bằng một tài liệu chứa ít nhất một câu chuyện hài hước hoặc bình luận chơi trong mỗi đoạn văn.
- USER
Viết một lá thư cảm ơn đến nhà cung cấp ốc thép của tôi vì giao hàng đúng hẹn và trong thời gian ngắn. Điều này đã giúp chúng tôi giao một đơn hàng quan trọng.
## -> Sử dụng ký tự phân đoạn để chỉ rõ các phần khác nhau của đầu vào
- Ký tự phân đoạn như ba dấu ngoặc kép, thẻ XML, tiêu đề phần, v.v.
- USER
Tóm tắt văn bản được phân đoạn bằng ba dấu ngoặc kép bằng một haiku.

"""chèn văn bản ở đây"""

- SYSTEM
Bạn sẽ được cung cấp với một cặp bài viết (được phân đoạn bằng thẻ XML) về cùng một chủ đề. Đầu tiên tóm tắt các argument của từng bài viết. Sau đó chỉ ra bài viết nào đưa ra một lập luận tốt hơn và giải thích tại sao.

- USER
<article> chèn bài viết đầu tiên ở đây </article>

<article> chèn bài viết thứ hai ở đây </article>

## Chỉ rõ các bước cần thiết để hoàn thành một nhiệm vụ
- SYSTEM
Sử dụng các hướng dẫn bước theo dõi sau để phản hồi cho đầu vào của người dùng.

Bước 1 - Người dùng sẽ cung cấp cho bạn văn bản trong ba dấu ngoặc kép. Tóm tắt văn bản này trong một câu với một tiền tố nói "Tóm tắt: ".

Bước 2 - Dịch tóm tắt từ Bước 1 sang tiếng Tây Ban Nha, với một tiền tố nói "Dịch: ".
USER
"""chèn văn bản ở đây"""

## Cung cấp ví dụ
- SYSTEM
Trả lời một cách đồng nhất về phong cách.
- USER
Giáo dục tôi về lòng kiên nhẫn.

- ASSISTANT
Dòng sông đào sâu thung lũng sâu nhất bắt nguồn từ một nguồn nước khiêm tốn; bản giao hưởng lớn

- USER
Teach me about the ocean.

##  Yêu cầu mô hình trả lời với một độ dài mong muốn
- USER
Tóm tắt văn bản được phân đoạn bằng ba dấu ngoặc kép khoảng 50 từ.

"""chèn văn bản ở đây"""
- USER
Tóm tắt văn bản được phân đoạn bằng ba dấu ngoặc kép trong 2 đoạn.

"""chèn văn bản ở đây"""


- USER
Tóm tắt văn bản được phân đoạn bằng ba dấu ngoặc kép trong 3 điểm đánh dấu.

"""chèn văn bản ở đây"""

##  Cung cấp văn bản tham chiếu
- SYSTEM
Sử dụng các bài viết được phân đoạn bằng ba dấu ngoặc kép để trả lời câu hỏi. Nếu câu trả lời không thể được tìm thấy trong các bài viết, hãy viết "Không tìm thấy câu trả lời."
- USER
<chèn bài viết, mỗi bài viết được phân đoạn bằng ba dấu ngoặc kép>

Câu hỏi: <chèn câu hỏi ở đây>

## Hướng dẫn mô hình trả lời với các trích dẫn từ văn bản tham chiếu

- SYSTEM
Sử dụng các bài viết được phân đoạn bằng ba dấu ngoặc kép để trả lời câu hỏi. Nếu câu trả lời không thể được tìm thấy trong các bài viết, hãy viết "Không tìm thấy câu trả lời."
- USER
<chèn bài viết, mỗi bài viết được phân đoạn bằng ba dấu ngoặc kép>

Câu hỏi: <chèn câu hỏi ở đây>

## Hướng dẫn mô hình trả lời với các trích dẫn từ văn bản tham chiếu

- SYSTEM
Bạn sẽ được cung cấp với một văn bản được phân đoạn bằng ba dấu ngoặc kép và một câu hỏi. Nhiệm vụ của bạn là trả lời câu hỏi chỉ bằng cách sử dụng văn bản được cung cấp và trích dẫn các đoạn văn (nếu có) của văn bản được cung cấp mà bạn đã sử dụng để trả lời câu hỏi. Nếu văn bản không chứa thông tin cần thiết để trả lời câu hỏi, hãy đơn giản viết: "Thông tin không đủ." Nếu có câu trả lời cho câu hỏi, nó phải được chú thích bằng một trích dẫn. Sử dụng định dạng sau để trích dẫn các đoạn văn liên quan ({"citation": …}).
- USER
"""<chèn tài liệu ở đây>"""

Câu hỏi: <chèn câu hỏi ở đây>

## Chia nhỏ nhiệm vụ phức tạp thành các nhiệm vụ đơn giản hơn

- SYSTEM
Bạn sẽ được cung cấp các truy vấn dịch vụ khách hàng. Phân loại mỗi truy vấn vào một danh mục chính và một danh mục phụ. Cung cấp đầu ra của bạn dưới dạng định dạng json với các khóa: primary và secondary.

Các danh mục chính: Billing, Technical Support, Account Management, hoặc General Inquiry.

Danh mục phụ cho Billing:
- Hủy đăng ký hoặc nâng cấp
- Thêm phương thức thanh toán
- Giải thích về chi phí
- Khiếu nại về chi phí

Danh mục phụ cho Technical Support:
- Sửa lỗi
- Tương thích với thiết bị
- Cập nhật phần mềm

Danh mục phụ cho Account Management:
- Đặt lại mật khẩu
- Cập nhật thông tin cá nhân
- Đóng tài khoản
- Bảo mật tài khoản

Danh mục phụ cho General Inquiry:
- Thông tin về sản phẩm
- Giá cả
- Phản hồi
- Nói chuyện với con người
- USER
Tôi cần cài đặt lại kết nối internet của mình.

# Từ các yêu cầu trên hệ thống sẽ xử lý

# SYSTEM
Bạn sẽ được cung cấp các truy vấn dịch vụ khách hàng yêu cầu sửa lỗi trong ngữ cảnh hỗ trợ kỹ thuật. Giúp khách hàng bằng cách:

- Yêu cầu họ kiểm tra xem tất cả các cáp từ/đến bộ định tuyến có được kết nối không. Lưu ý rằng cáp thường bị lỏng lẻo theo thời gian.
- Nếu tất cả các cáp đều được kết nối và vấn đề vẫn tồn tại, hãy hỏi họ về mô hình bộ định tuyến họ đang sử dụng.
- Bây giờ, bạn sẽ hướng dẫn họ cách khởi động lại thiết bị của họ:
-- Nếu số hiệu mô hình là MTD-327J, hãy hướng dẫn họ nhấn nút đỏ và giữ nó trong 5 giây, sau đó đợi 5 phút trước khi kiểm tra kết nối.
-- Nếu số hiệu mô hình là MTD-327S, hãy hướng dẫn họ rút ra và cắm lại, sau đó đợi 5 phút trước khi kiểm tra kết nối.
- Nếu vấn đề của khách hàng vẫn tồn tại sau khi khởi động lại thiết bị và đợi 5 phút, hãy kết nối họ với hỗ trợ kỹ thuật bằng cách xuất {"Yêu cầu hỗ trợ kỹ thuật"}.
- Nếu người dùng bắt đầu đặt câu hỏi không liên quan đến chủ đề này, xác nhận liệu họ có muốn kết thúc cuộc trò chuyện hiện tại về việc sửa lỗi và phân loại yêu cầu của họ theo kế hoạch phân loại chính/secondary sau:

<chèn kế hoạch phân loại chính/secondary ở trên>
USER
Tôi cần cài đặt lại kết nối internet của mình.


## Đối với ứng dụng trò chuyện yêu cầu cuộc trò chuyện rất dài, tóm tắt hoặc lọc các lượt trò chuyện trước đó

## Tóm tắt văn bản dài theo từng phần và xây dựng một tóm tắt đầy đủ theo cách đệ quy

## Để mô hình "suy nghĩ"
## Hướng dẫn mô hình làm việc ra giải pháp của chính mình trước khi đưa ra kết luận

- SYSTEM
Xác định xem giải pháp của sinh viên có đúng hay không.
USER
Tuyên bố vấn đề: Tôi đang xây dựng một cài đặt năng lượng mặt trời và tôi cần sự giúp đỡ trong việc tính toán tài chính.
- Giá đất là $100 / foot vuông
- Tôi có thể mua các tấm pin mặt trời với giá $250 / foot vuông
- Tôi đàm phán một hợp đồng bảo trì sẽ tốn cho tôi một khoản cố định là $100k mỗi năm và thêm $10 / foot vuông
Tổng chi phí cho năm đầu tiên của hoạt động là một hàm của số foot vuông.

Giải pháp của sinh viên: Hãy ký hiệu x là kích thước cài đặt trong foot vuông.
1. Chi phí đất: 100x
2. Chi phí pin mặt trời: 250x
3. Chi phí bảo trì: 100,000 + 100x
Tổng chi phí: 100x + 250x + 100,000 + 100x = 450x + 100,000
- ASSISTANT
Giải pháp của sinh viên là chính xác.


- SYSTEM
Đầu tiên, hãy làm rõ giải pháp của bạn cho vấn đề. Đừng dựa vào giải pháp của sinh viên vì nó có thể không chính xác. Đặt tất cả công việc của bạn cho bước này trong ba dấu ngoặc kép (""").

Bước 2 - So sánh giải pháp của bạn với giải pháp của sinh viên và đánh giá xem giải pháp của sinh viên có đúng hay không. Đặt tất cả công việc của bạn cho bước này trong ba dấu ngoặc kép (""").

Bước 3 - Nếu sinh viên mắc một lỗi, xác định gợi ý nào bạn có thể đưa cho sinh viên mà không tiết lộ câu trả lời. Đặt tất cả công việc của bạn cho bước này trong ba dấu ngoặc kép (""").

Bước 4 - Nếu sinh viên mắc một lỗi, cung cấp gợi ý từ bước trước đó cho sinh viên (ngoài ba dấu ngoặc kép). Thay vì viết "Bước 4 - ..." viết "Gợi ý:".
- USER
Tuyên bố vấn đề: <chèn tuyên bố vấn đề>

Giải pháp của sinh viên: <chèn giải pháp của sinh viên>

## Hoặc có thể đạt được điều này thông qua một chuỗi các câu truy vấn trong đó tất cả trừ cái cuối cùng đều được ẩn đối với người dùng cuối cùng.

- USER
<chèn tuyên bố vấn đề>


- SYSTEM
So sánh giải pháp của bạn với giải pháp của sinh viên và đánh giá xem giải pháp của sinh viên có đúng hay không.
USER
Tuyên bố vấn đề: """<chèn tuyên bố vấn đề>"""

Giải pháp của bạn: """<chèn giải pháp do mô hình tạo ra>"""

Giải pháp của sinh viên: """<chèn giải pháp của sinh viên>"""


- SYSTEM
Bạn là một giáo viên toán. Nếu sinh viên mắc một lỗi, hãy đề xuất một gợi ý cho sinh viên một cách không tiết lộ câu trả lời. Nếu sinh viên không mắc lỗi, đơn giản chỉ cần động viên họ bằng một bình luận khích lệ.
- USER
Tuyên bố vấn đề: """<chèn tuyên bố vấn đề>"""

Giải pháp của bạn: """<chèn giải pháp do mô hình tạo ra>"""

Giải pháp của sinh viên: """<chèn giải pháp của sinh viên>"""

Phân tích: """<chèn phân tích do mô hình tạo ra từ bước trước>"""

## Hỏi mô hình xem nó có bỏ sót điều gì trong các lượt trước không


- SYSTEM
Bạn sẽ được cung cấp một tài liệu được giới hạn bởi dấu ngoặc ba. Nhiệm vụ của bạn là chọn những đoạn trích liên quan đến câu hỏi sau: "Những sự thay đổi mô phỏng quan trọng đã xảy ra trong lịch sử trí tuệ nhân tạo."

Đảm bảo rằng các đoạn trích chứa đầy đủ ngữ cảnh cần thiết để giải thích chúng - nói cách khác, không trích xuất các đoạn nhỏ thiếu ngữ cảnh quan trọng. Cung cấp đầu ra dưới dạng định dạng JSON như sau:

[{"excerpt": "..."},
...
{"excerpt": "..."}]
- USER
"""<chèn tài liệu ở đây>"""

- ASSISTANT
[{"excerpt": "mô hình viết một đoạn trích ở đây"},
...
{"excerpt": "mô hình viết một đoạn trích khác ở đây"}]



- USER
Còn các đoạn trích nào liên quan không? Hãy chắc chắn không lặp lại các đoạn trích. Đồng thời đảm bảo rằng các đoạn trích chứa đầy đủ ngữ cảnh cần thiết để hiểu chúng - nói cách khác, không trích xuất các đoạn nhỏ thiếu ngữ cảnh quan trọng.

## Sử dụng tìm kiếm dựa trên embedding để thực hiện truy xuất thông tin tri thức một cách hiệu quả

## Sử dụng thực thi mã để thực hiện các phép tính chính xác hơn hoặc gọi các API bên ngoài

- SYSTEM
Bạn có thể viết và thực thi mã Python bằng cách đặt nó trong dấu nháy ba, ví dụ: ```mã ở đây```. Sử dụng điều này để thực hiện các phép tính.
- USER
Tìm tất cả các nghiệm có giá trị thực của đa thức sau: 3*x**5 - 5*x**4 - 3*x**3 - 7*x - 10.


- SYSTEM
Bạn có thể viết và thực thi mã Python bằng cách đặt nó trong dấu nháy ba. Lưu ý rằng bạn có quyền truy cập vào module sau để giúp người dùng gửi tin nhắn cho bạn bè của họ:

```python
import message
message.write(to="John", message="Hey, muốn gặp sau giờ làm việc không?")
```

## Cho mô hình quyền truy cập vào các hàm cụ thể
## Kiểm thử thay đổi một cách có hệ thống
## Đánh giá đầu ra của mô hình dựa trên câu trả lời chuẩn vàng
-> OpenAI Evals là một framework mã nguồn mở cung cấp các công cụ để tạo ra các đánh giá tự động.
- SYSTEM
Bạn sẽ nhận được văn bản được giới hạn bởi dấu nháy ba và được cho là câu trả lời cho một câu hỏi. Hãy kiểm tra xem thông tin sau có được chứa trực tiếp trong câu trả lời không:

- Neil Armstrong là người đầu tiên bước chân lên mặt trăng.
- Ngày Neil Armstrong đầu tiên bước chân lên mặt trăng là ngày 21 tháng 7 năm 1969.

Đối với mỗi điểm này, thực hiện các bước sau:

1 - Lặp lại điểm đó.
2 - Cung cấp một trích dẫn từ câu trả lời gần nhất với điểm này.
3 - Xem xét liệu ai đó đọc trích dẫn đó mà không biết chủ đề có thể suy luận trực tiếp điểm đó hay không. Giải thích tại sao hoặc tại sao không trước khi đưa ra quyết định.
4 - Ghi "có" nếu câu trả lời cho câu hỏi 3 là có, ngược lại

## Dưới đây là một ví dụ về đầu vào khi cả hai điểm đều được đáp ứng:
SYSTEM
<chèn thông điệp hệ thống ở trên>
USER
"""Neil Armstrong nổi tiếng vì là người đầu tiên chạm chân lên Mặt Trăng. Sự kiện lịch sử này diễn ra vào ngày 21 tháng 7 năm 1969, trong suốt nhiệm vụ Apollo 11."""

## Dưới đây là một ví dụ về đầu vào khi chỉ có một điểm được đáp ứng:

- SYSTEM
<chèn thông điệp hệ thống ở trên>
- USER
"""Neil Armstrong tạo nên lịch sử khi bước ra khỏi mô-đun vũ trụ, trở thành người đầu tiên đi bộ trên mặt trăng."""

## Dưới đây là một ví dụ về đầu vào khi không có điểm nào được đáp ứng:


- SYSTEM
<chèn thông điệp hệ thống ở trên>
- USER
"""Trong mùa hè '69, hành trình hùng vĩ,
Apollo 11, táo bạo như tay huyền thoại.
Armstrong bước một bước, lịch sử hiện lên,
"Một bước nhỏ," anh ta nói, vì một thế giới mới."""


- SYSTEM
Sử dụng các bước sau để phản hồi vào đầu vào của người dùng. Hãy lặp lại đầy đủ mỗi bước trước khi tiếp tục. Ví dụ: "Bước 1: Lý giải...".

Bước 1: Lý giải từng bước xem thông tin trong câu trả lời đã nộp so với câu trả lời chuyên gia có thể là: không giao nhau, bằng nhau, là một tập con, là một tập siêu, hoặc giao nhau (tức là có một số giao điểm nhưng không phải là tập con/tập siêu).

Bước 2: Lý giải từng bước xem câu trả lời đã nộp có mâu thuẫn với bất kỳ khía cạnh nào của câu trả lời chuyên gia không.

Bước 3: Xuất một đối tượng JSON có cấu trúc như: {"loại_chồng_chéo": "không_giao_nhau" hoặc "bằng_nhau" hoặc "tập_con" hoặc "tập_siêu" hoặc "giao_nhau", "mâu_thuẫn": true hoặc false}

# Production best practices
-> Sau khi nhập thông tin thanh toán, bạn sẽ có một giới hạn sử dụng được phê duyệt là $100 mỗi tháng, do OpenAI đặt ra.

-> Best practices for API key safety

# Scaling your solution architecture
- Horizontal scaling
- Vertical scaling
- Caching
- Load balancing

-> số lượng token được tạo ra như là [max_tokens * max(n, best_of)]
-> stream: true 


# Safety best practices
response = client.completions.create(
  model="gpt-3.5-turbo-instruct",
  prompt="This is a test",
  max_tokens=5,
  user="user_123456"
)

# Limited
- giới hạn tần suất, OpenAI có thể ngăn chặn loại hoạt động này.
- kiểm soát số lượng yêu cầu mà một người dùng có thể thực hiện, OpenAI đảm bảo rằng số lượng người có cơ hội sử dụng API mà không gặp sự giảm tốc độ.
- Bằng cách đặt giới hạn tần suất, OpenAI có thể giúp duy trì trải nghiệm mượt mà và nhất quán cho tất cả người dùng.
- Giới hạn tần suất được đo lường theo năm cách: RPM (yêu cầu mỗi phút), RPD (yêu cầu mỗi ngày), TPM (token mỗi phút), TPD (token mỗi ngày), và IPM (hình ảnh mỗi phút). Giới hạn tần suất có thể bị chạm trán ở bất kỳ tùy chọn nào tùy thuộc vào điều gì xảy ra trước. Ví dụ, bạn có thể gửi 20 yêu cầu chỉ với 100 token đến điểm cuối ChatCompletions và điều đó sẽ đầy giới hạn của bạn (nếu RPM của bạn là 20), ngay cả khi bạn không gửi 150k token (nếu giới hạn TPM của bạn là 150k) trong những 20 yêu cầu đó.

# Free Limited:

MODEL	RPM	RPD	TPM	TPD
gpt-3.5-turbo	3	200	40,000	0

# Tier1

MODEL	RPM	RPD	TPM	TPD
gpt-4	500	10,000	10,000	-
gpt-4-1106-preview *	500	10,000	150,000	500,000

# Gói cao cấp nhất 10.000$

MODEL	RPM	RPD	TPM	TPD
gpt-4	10,000	-	300,000	-
gpt-4-1106-preview *	10,000	-	600,000	-
gpt-4-vision-preview *	3000	50,000	300,000	-
gpt-3.5-turbo	10,000	-	2,000,000	-
text-embedding-ada-002	10,000	-	10,000,000	-
whisper-1	500	-	-	-
tts-1	500	-	-	-
tts-1-hd	20	-	-	-
dall-e-2	500 img/min	-	-	-
dall-e-3	50 img/min	-	-	-

# Mã Lỗi API

MÃ	TỔNG QUAN
401 - Xác thực Không Hợp Lệ	Nguyên Nhân: Xác thực không hợp lệ. Giải Pháp: Đảm bảo rằng bạn đang sử dụng chính xác API key và tổ chức yêu cầu.


Thông báo lỗi này cho biết thông tin xác thực của bạn không hợp lệ. Điều này có thể xảy ra vì một số lý do như sau:

Bạn đang sử dụng một API key đã bị thu hồi.

Bạn đang sử dụng một API key khác với API key được gán cho tổ chức yêu cầu.

Bạn đang sử dụng một API key không có quyền cần thiết cho điểm cuối mà bạn đang gọi.
Để khắc phục lỗi này, vui lòng thực hiện các bước sau:

Kiểm tra xem bạn có đang sử dụng API key và ID tổ chức chính xác trong phần tiêu đề yêu cầu của bạn. Bạn có thể tìm thấy API key và ID tổ chức của mình trong cài đặt tài khoản.

Nếu bạn không chắc chắn liệu API key của mình có hợp lệ hay không, bạn có thể tạo một cái mới. Hãy đảm bảo thay thế API key cũ bằng API key mới trong các yêu cầu của bạn và tuân theo hướng dẫn thực hành tốt của chúng tôi.

401 - API key Không Đúng	Nguyên Nhân: API key yêu cầu không chính xác. Giải Pháp: Đảm bảo rằng API key được sử dụng là chính xác, làm sạch bộ nhớ cache trình duyệt của bạn, hoặc tạo một API key mới.

Có một lỗi chính tả hoặc có dấu cách thừa trong API key của bạn.

Bạn đang sử dụng một API key thuộc về tổ chức khác.

Bạn đang sử dụng một API key đã bị xóa hoặc vô hiệu hóa.

Một API key cũ đã bị thu hồi có thể được lưu trữ trong bộ nhớ địa phương.
Để khắc phục lỗi này, vui lòng thực hiện các bước sau:

Thử xóa bộ nhớ cache và cookies của trình duyệt, sau đó thử lại.

Kiểm tra xem bạn có đang sử dụng API key chính xác trong phần tiêu đề yêu cầu của bạn.

Nếu bạn không chắc chắn liệu API key của mình có chính xác hay không, bạn có thể tạo một cái mới. Hãy đảm bảo thay thế API key cũ trong mã nguồn của bạn và tuân theo hướng dẫn thực hành tốt của chúng tôi.

401 - Bạn phải là thành viên của một tổ chức để sử dụng API	Nguyên Nhân: Tài khoản của bạn không thuộc một tổ chức nào. Giải Pháp: Liên hệ với chúng tôi để được thêm vào một tổ chức mới hoặc yêu cầu quản lý tổ chức mời bạn vào tổ chức.

Thông báo lỗi này cho biết tài khoản của bạn không thuộc về một tổ chức nào đó. Điều này có thể xảy ra vì một số lý do như sau:

Bạn đã rời khỏi hoặc bị loại bỏ khỏi tổ chức trước đó của bạn.

Tổ chức của bạn đã bị xóa.
Để khắc phục lỗi này, vui lòng thực hiện các bước sau:

Nếu bạn đã rời khỏi hoặc bị loại bỏ khỏi tổ chức trước đó, bạn có thể yêu cầu một tổ chức mới hoặc được mời vào một tổ chức hiện tại.

Để yêu cầu một tổ chức mới, hãy liên hệ với chúng tôi qua help.openai.com.

Chủ sở hữu tổ chức hiện tại có thể mời bạn tham gia tổ chức của họ thông qua trang Team.

429 - Đạt đến giới hạn tần suất yêu cầu	Nguyên Nhân: Bạn đang gửi các yêu cầu quá nhanh. Giải Pháp: Ðiều chỉnh tần suất yêu cầu. Đọc hướng dẫn về giới hạn tần suất.

Bạn đang sử dụng một vòng lặp hoặc một kịch bản tạo yêu cầu thường xuyên hoặc đồng thời.

Bạn đang chia sẻ mã API của mình với người dùng hoặc ứng dụng khác.

Bạn đang sử dụng một kế hoạch miễn phí có giới hạn tần suất thấp.
Để khắc phục lỗi này, vui lòng thực hiện các bước sau:

Giảm tần suất yêu cầu và tránh tạo ra cuộc gọi không cần thiết hoặc trùng lặp.

Nếu bạn đang sử dụng một vòng lặp hoặc một kịch bản, hãy đảm bảo triển khai một cơ chế backoff hoặc logic thử lại tôn trọng giới hạn tần suất và các tiêu đề phản hồi. Bạn có thể đọc thêm về chính sách giới hạn tần suất và các biện pháp phòng tránh tốt nhất trong hướng dẫn về giới hạn tần suất của chúng tôi.

Nếu bạn đang chia sẻ tổ chức của mình với người dùng khác, hãy lưu ý rằng các giới hạn được áp dụng cho mỗi tổ chức chứ không phải cho mỗi người dùng. Điều này đáng xem xét khi kiểm tra về việc sử dụng của đồng đội vì nó sẽ đóng góp vào giới hạn.

Nếu bạn đang sử dụng một kế hoạch miễn phí hoặc có giới hạn thấp, xem xét nâng cấp lên một kế hoạch trả tiền theo yêu cầu có giới hạn tần suất cao hơn. Bạn có thể so sánh các hạn chế của mỗi kế hoạch trong hướng dẫn về giới hạn tần suất của chúng tôi.

429 - Bạn đã vượt quá hạn mức hiện tại, vui lòng kiểm tra kế hoạch và chi tiết thanh toán của bạn	Nguyên Nhân: Bạn đã hết tín dụng hoặc đã đạt đến giới hạn chi tiêu hàng tháng tối đa của mình. Giải Pháp: Mua thêm tín dụng hoặc tìm hiểu cách tăng giới hạn của bạn.

Thông báo lỗi này cho biết bạn đã vượt quá giới hạn sử dụng hàng tháng cho API hoặc đối với khách hàng trả trước, bạn đã sử dụng hết tất cả các khoản tín dụng của mình. Bạn có thể xem giới hạn sử dụng tối đa của mình trên trang giới hạn. Điều này có thể xảy ra vì một số lý do như sau:

Bạn đang sử dụng một dịch vụ có quy mô lớn hoặc phức tạp, tiêu tốn nhiều tín dụng hoặc mã thông báo.

Ngân sách hàng tháng của bạn đặt quá thấp so với việc sử dụng của tổ chức của bạn.
Để khắc phục lỗi này, vui lòng thực hiện các bước sau:

Kiểm tra việc sử dụng hiện tại của tài khoản của bạn và so sánh với các giới hạn của tài khoản.

Nếu bạn đang sử dụng một kế hoạch miễn phí, xem xét nâng cấp lên một kế hoạch trả tiền để có được giới hạn cao hơn.

500 - Máy chủ gặp lỗi khi xử lý yêu cầu của bạn	Nguyên Nhân: Có vấn đề trên máy chủ của chúng tôi. Giải Pháp: Thử lại yêu cầu sau một thời gian đợi ngắn và liên hệ với chúng tôi nếu vấn đề vẫn tiếp tục. Kiểm tra trang trạng thái.



503 - Engine đang quá tải, vui lòng thử lại sau	Nguyên Nhân: Máy chủ của chúng tôi đang trải qua lưu lượng lớn. Giải Pháp: Vui lòng thử lại yêu cầu sau một thời gian đợi ngắn.

Thông báo lỗi này cho biết rằng máy chủ của chúng tôi đang trải qua lưu lượng cao và không thể xử lý yêu cầu của bạn trong lúc này. Điều này có thể xảy ra vì một số lý do như sau:

Có một sự tăng đột ngột hoặc đột ngột trong nhu cầu sử dụng dịch vụ của chúng tôi.

Có bảo dưỡng hoặc cập nhật được lên lịch hoặc không được lên lịch trên máy chủ của chúng tôi.

Có sự cố hoặc sự cố không mong muốn trên máy chủ của chúng tôi.
Để khắc phục lỗi này, vui lòng thực hiện các bước sau:

Thử lại yêu cầu của bạn sau một thời gian ngắn. Chúng tôi khuyến nghị sử dụng chiến lược trễ mỗi lần lỗi hoặc một logic thử lại tôn trọng các tiêu đề phản hồi và giới hạn tần suất. Bạn có thể đọc thêm về các biện pháp an toàn tốt nhất về giới hạn tần suất của chúng tôi.

Kiểm tra trang trạng thái của chúng tôi để cập nhật hoặc thông báo về dịch vụ và máy chủ của chúng tôi.

Nếu bạn vẫn gặp phải lỗi này sau một khoảng thời gian hợp lý, vui lòng liên hệ chúng tôi để được hỗ trợ thêm. Chúng tôi xin lỗi vì mọi sự bất tiện và đánh giá sự kiên nhẫn và hiểu biết của bạn.

# LOẠI LƯỢT CẬP TỔNG QUAN
- APIConnectionError Nguyên nhân: Có vấn đề khi kết nối với dịch vụ của chúng tôi.
Giải pháp: Kiểm tra cài đặt mạng, cấu hình proxy, chứng chỉ SSL hoặc quy tắc tường lửa của bạn.
- APITimeoutError Nguyên nhân: Yêu cầu đã quá thời gian.
Giải pháp: Thử lại yêu cầu của bạn sau một thời gian ngắn và liên hệ với chúng tôi nếu vấn đề vẫn tiếp tục.
- AuthenticationError Nguyên nhân: API key hoặc token của bạn không hợp lệ, đã hết hạn hoặc đã bị thu hồi.
Giải pháp: Kiểm tra API key hoặc token của bạn và đảm bảo rằng nó đúng và đang hoạt động. Bạn có thể cần tạo một cái mới từ bảng điều khiển tài khoản của bạn.
- BadRequestError Nguyên nhân: Yêu cầu của bạn bị định dạng sai hoặc thiếu một số tham số bắt buộc, chẳng hạn như một token hoặc một đầu vào.
Giải pháp: Tin nhắn lỗi sẽ hướng dẫn bạn về lỗi cụ thể đã xảy ra. Kiểm tra tài liệu cho phương thức API cụ thể bạn đang gọi và đảm bảo bạn đang gửi các tham số hợp lệ và đầy đủ. Bạn cũng có thể cần kiểm tra mã hóa, định dạng hoặc kích thước của dữ liệu yêu cầu của bạn.
- ConflictError Nguyên nhân: Người dùng khác đã cập nhật nguồn tài nguyên.
Giải pháp: Thử lại việc cập nhật tài nguyên và đảm bảo không có yêu cầu nào khác đang cố gắng cập nhật nó.
- InternalServerError Nguyên nhân: Vấn đề từ phía chúng tôi.
Giải pháp: Thử lại yêu cầu của bạn sau một thời gian ngắn và liên hệ với chúng tôi nếu vấn đề vẫn tiếp tục.
- NotFoundError Nguyên nhân: Tài nguyên được yêu cầu không tồn tại.
Giải pháp: Đảm bảo bạn sử dụng đúng bộ nhận diện tài nguyên.
- PermissionDeniedError Nguyên nhân: Bạn không có quyền truy cập vào tài nguyên được yêu cầu.
Giải pháp: Đảm bảo bạn đang sử dụng đúng API key, ID tổ chức và ID tài nguyên.
- RateLimitError Nguyên nhân: Bạn đã vượt quá giới hạn tần suất đã được gán.
Giải pháp: Chậm rãi các yêu cầu của bạn. Đọc thêm trong Hướng dẫn về Giới hạn Tần suất của chúng tôi.
- UnprocessableEntityError Nguyên nhân: Không thể xử lý yêu cầu mặc dù định dạng là đúng.
Giải pháp: Vui lòng thử lại yêu cầu.

# Code mẫu xử lý lỗi:
import openai
from openai import OpenAI
client = OpenAI()

try:
  #Make your OpenAI API request here
  response = client.completions.create(
    prompt="Hello world",
    model="gpt-3.5-turbo-instruct"
  )
except openai.APIError as e:
  #Handle API error here, e.g. retry or log
  print(f"OpenAI API returned an API Error: {e}")
  pass
except openai.APIConnectionError as e:
  #Handle connection error here
  print(f"Failed to connect to OpenAI API: {e}")
  pass
except openai.RateLimitError as e:
  #Handle rate limit error (we recommend using exponential backoff)
  print(f"OpenAI API request exceeded rate limit: {e}")
  pass



# Lỗi không giải quyết được

Nếu vấn đề vẫn tiếp tục, hãy liên hệ với đội hỗ trợ của chúng tôi qua cuộc trò chuyện và cung cấp thông tin sau:

Model bạn đang sử dụng
Thông điệp lỗi và mã lỗi bạn nhận được
Dữ liệu yêu cầu và tiêu đề bạn đã gửi
Thời điểm và múi giờ của yêu cầu của bạn
Bất kỳ chi tiết liên quan nào có thể giúp chúng tôi chẩn đoán vấn đề

# Diễn đàn Cộng đồng của chúng tôi

# Các loại bỏ trong mô hình:
Cập nhật mô hình theo từng bước

Như đã thông báo vào tháng 3 năm 2023, chúng tôi thường xuyên phát hành các phiên bản mới của gpt-4 và gpt-3.5-turbo.

Mỗi phiên bản mô hình có ngày được đánh dấu bằng đuôi -MMDD; ví dụ, gpt-4-0613. Tên mô hình không có ngày, ví dụ, gpt-4, thường sẽ chỉ đến phiên bản mới nhất (ví dụ, gpt-4 sẽ chỉ đến gpt-4-0613). Người dùng của tên mô hình không có ngày sẽ nhận được thông báo qua email thông thường 2 tuần trước khi bất kỳ thay đổi nào diễn ra.

Sau khi một phiên bản mới được ra mắt, các phiên bản cũ thường sẽ bị loại bỏ 3 tháng sau.

# 2023-11-06: Chat model updates
- On November 6th, 2023, we announced the release of an updated GPT-3.5-Turbo model (which now comes by default with 16k context) along with deprecation of gpt-3.5-turbo-0613 and gpt-3.5-turbo-16k-0613.

SHUTDOWN DATE	LEGACY MODEL	LEGACY MODEL PRICE	RECOMMENDED REPLACEMENT
2024-06-13	gpt-3.5-turbo-0613	$0.0015 / 1K input tokens + $0.0020 / 1K output tokens	gpt-3.5-turbo-1106


# Việc tạo một hành động cho một GPT đòi hỏi 3 bước:

1. Xây dựng một API
2. Tài liệu hóa API trong định dạng OpenAPI YAML hoặc JSON
3. Tiếp cận Schema cho GPT của bạn trong giao diện người dùng ChatGPT

openapi: 3.0.1
info:
  title: TODO Action
  description: An action that allows the user to create and manage a TODO list using a GPT.
  version: 'v1'
servers:
  - url: https://example.com
paths:
  /todos:
    get:
      operationId: getTodos
      summary: Get the list of todos
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/getTodosResponse'
components:
  schemas:
    getTodosResponse:
      type: object
      properties:
        todos:
          type: array
          items:
            type: string
          description: The list of todos.



# Action authentication
# request={'grant_type': 'authorization_code', 'client_id': 'YOUR_CLIENT_ID', 'client_secret': 'YOUR_CLIENT_SECRET', 'code': 'abc123', 'redirect_uri': 'https://chat.openai.com/aip/g-some_gpt_id/oauth/callback'}

# { "access_token": "example_token", "token_type": "bearer", "refresh_token": "example_token", "expires_in": 59 }

# Plugin
Truy xuất thông tin thời gian thực; ví dụ: điểm số thể thao, giá cổ phiếu, tin tức mới nhất, v.v.
Truy xuất thông tin cơ sở dữ liệu; ví dụ: tài liệu công ty, ghi chú cá nhân, v.v.
Hỗ trợ người dùng thực hiện các hành động; ví dụ: đặt phòng khách sạn, đặt đồ ăn, v.v.
Nếu bạn muốn có một ví dụ đang chạy khi bạn đọc qua tài liệu và tìm hiểu thêm về các plugin, bạn có thể bắt đầu với repo khởi đầu nhanh của plugin của chúng tôi.