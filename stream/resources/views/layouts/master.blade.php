<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css" />
    <title>Vue With Webpack</title>
    <!-- Fonts -->
    <link href="/css/app.css" rel="stylesheet" type="text/css">
</head>
<body>
    {{ csrf_field() }}
    <div id="app">
        <nav class="is-boxed">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view></router-view>
    </div>
    <script src="/js/app.js"></script>
</body>
</html>