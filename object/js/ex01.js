var posts = [
  {
    title: "Bài viết 1",
    thumbnail:
      "https://fastly.picsum.photos/id/787/500/300.jpg?hmac=_n0X4bzKsegouwOqIbajrf01jYobChiQBxc6yxhFaac",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti adipisci laudantium, explicabo nam unde cupiditate fugit commodi deserunt ut illum perferendis? Officia, quae doloremque quasi vero in laudantium veritatis.",
  },
];

var html = `<div class="post-item"> 
${posts
  .map(function (post, index) {
    return `<div class="post-item">
        <img 
            src="${post.thumbnail}"
            alt="${post.title}"
            class="${index % 2 !== 0 ? "right" : ""}"
        />
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        </div>;
    `;
  })
  .join("")}
</div>;
`;
document.write(html);
