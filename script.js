// Sample Posts Data (Aap Admin Panel se new posts add karenge to yahan updates hoon gi)
const posts = [
  {
    title: "How AI is Changing Content Creation in 2026",
    category: "Artificial Intelligence",
    date: "Oct 23, 2026",
    summary: "Discover how modern generative AI tools are helping creators produce high-quality articles faster than ever...",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600",
    link: "#"
  },
  {
    title: "Top 5 Security Practices for Online Creators",
    category: "Cybersecurity",
    date: "Oct 20, 2026",
    summary: "Protect your blogs, digital assets, and social accounts with these essential security tips for online managers...",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
    link: "#"
  },
  {
    title: "Understanding Organic Traffic & SEO Strategy",
    category: "Tech News",
    date: "Oct 18, 2026",
    summary: "Learn how to rank higher on search engines and bring targeted US audience to your blog organically...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    link: "#"
  }
];

// Load Posts into Container
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('postsContainer');
  if (container) {
    container.innerHTML = posts.map(post => `
      <article class="card">
        <div class="card-img" style="background-image: url('${post.image}');"></div>
        <div class="card-body">
          <span class="category">${post.category}</span>
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <div class="card-footer">
            <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
            <a href="${post.link}" class="read-more">Read More &rarr;</a>
          </div>
        </div>
      </article>
    `).join('');
  }
});