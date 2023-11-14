<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Configuración de codificación de caracteres -->
    <meta charset="UTF-8">

    <!-- Configuración para la compatibilidad con Internet Explorer -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Configuración de la vista del dispositivo -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Enlace al archivo de estilo CSS para la página de acceso y registro -->
    <link rel="stylesheet" href="../css/style.css">

    <!-- Preconexión a Google Fonts para mejorar la velocidad de carga -->
    <link rel=" preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Enlace al archivo de estilos de Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

    <!-- Enlace a la fuente Roboto desde Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <!-- Enlace al icono de la página -->
    <link rel="shortcut icon" href="/img/Mano.png" type="image/x-icon" id="x-icon">

    <!-- Enlace al archivo de estilos de boxicons para íconos -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>

    <!-- Título de la página -->
    <title>Bienvenido a World Music</title>

</head>

<body>

    <form method="post">

        <h2>BIENVENIDO A WORLD MUSIC</h2>

        <p>The Music is good vibes</p>

        <div class="input-wrapper">
            <input type="text" name="name" placeholder="Nombre">
            <span class="input-icon bi bi-person-fill"></span>
        </div>

        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <span class="input-icon bi bi-envelope-fill"></span>
        </div>

        <div class="input-wrapper">
            <input type="text" name="direction" placeholder="Dirección">
            <span class="input-icon bi bi-geo-alt-fill"></span>
        </div>

        <div class="input-wrapper">
            <input type="tel" name="phone" placeholder="Telefono">
            <span class="input-icon bi bi-phone-fill"></span>
        </div>

        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Contraseña">
            <span class="input-icon bi bi-key-fill"></span>
        </div>

        <input class="btn" type="submit" name="register" value="Enviar">

    </form>

    <?php
    include("registrar.php");
    ?>


</body>

</html>