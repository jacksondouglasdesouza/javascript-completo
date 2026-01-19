exports.paginaContato = (req, res) => {
   res.send(`
      <h1>Contact Page</h1><p>This is the contact page.</p>
      <form action="/" method="POST">
         <label for="name">Name:</label><br>
         <input type="text" id="name" name="name"><br>
         <label for="email">Email:</label><br>
         <input type="email" id="email" name="email"><br>
         <label for="message">Message:</label><br>
         <textarea id="message" name="message"></textarea><br>
      
         <button type="submit">Send</button>
      </form>
      `);
};

exports.trataPostContato = (req, res) => {
   res.send(`Contact form received! Thank you!`);
};
