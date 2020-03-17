interface Action {
    type: string;
  }

  {
    type: '[Auth API] Login Success'
  }

  {
    type: '[Login Page] Login',
    username: string;
    password: string;
  }