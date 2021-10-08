<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Password reset</title>
</head>
<body>
     Change Your Password <a href="http://localhost:3000/reset/{{ $data }}">Click Here</a>
    <h5>Reset Code: {{$data}}</h5>
</body>
</html>