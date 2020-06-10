function createPost(){
  let commenter = document.getElementById(`commenterName`).value;
  let comment = document.getElementById(`commentText`).value;
  let commentTemplate =
  `<div class="comment><p><%= comment %></p>,p>Posted By:<span class"commenter"><%=commenter %></span></p></div>`;
  let templateFn = _.template(commentTemplate);
}
