function createItemsList(data) {
  const itemsList = document.createElement("ul");
  itemsList.classList.add("items");

  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("linkCursor");
    listItem.innerHTML = `
      <header>
        <span class="author">${item.author}</span>
        <span class="time">${item.time}</span>
        <span class="theme">${item.theme}</span>
      </header>
      <section>
        <header>${item.title}</header>
        <p>${item.content}</p>
        <div><img src="${item.imgSrc}" alt="community" /></div>
      </section>
      <footer>
        <span class="fa fa-eye">${item.views}</span>
        <span class="fa fa-thumbs-o-up">${item.likes}</span>
        <span class="fa fa-commenting-o">${item.comments}</span>
      </footer>
    `;
    itemsList.appendChild(listItem);
  });

  return itemsList;
}
