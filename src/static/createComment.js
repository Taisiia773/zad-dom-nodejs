document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
  
    if (commentForm) {
      commentForm.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        const header = document.getElementById("header").value;
        const body = document.getElementById("body").value;
        const userId = user.id;
        const postId = 1;
  
        const data = { header, body, userId, postId };
  
        try {
          const response = await fetch("/comment/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
  
          if (response) {
            alert("Comment created");
          } else {
            alert("Failed to create comment");
          }
        } catch (error) {
          console.error("Error:", error);
          alert(error);
        }
      });
    }
  });