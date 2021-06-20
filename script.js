async function login(){
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let errors = [];

  if( !email.trim() ){
    errors.push("Email vazio");
  }
  if( !password.trim() ){
    errors.push("Senha vazia");
  }

  if ( errors.length === 0){
    let req = await fetch('http://127.0.0.1:3000/signin',{
      method: 'POST',
      body: JSON.stringify({
        // email: 'alisson@mail.com',
        // password: '123456'
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let retorno = await req.json()

    if ( !retorno.error ){      
      await console.log(retorno);
      localStorage.setItem('poesia-user_id', retorno.user.id);
      localStorage.setItem('poesia-token', retorno.token);
      window.location.href = 'index.html';
    } else {
      alert(retorno.error);
    }
    
  } else {
    alert(errors.join('\n'));
  }
}