<?php
include("conexion.php");

if (isset($_POST['register'])) {
    if (
        strlen($_POST['name']) >= 1 &&
        strlen($_POST['email']) >= 1 &&
        strlen($_POST['direction']) >= 1 &&
        strlen($_POST['phone']) >= 1 &&
        strlen($_POST['password']) >= 1
    ) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $direction = trim($_POST['direction']);
        $phone = trim($_POST['phone']);
        $password = trim($_POST['password']);
        $fecha = date("d/m/y");
        $consulta = "INSERT INTO datos (nombre, email, direccion, telefono, contraseña, fecha)
            VALUES ('$name', '$email', '$direction', '$phone', '$password', '$fecha')";
        $resultado = mysqli_query($conex, $consulta);

        if ($resultado) {
            // Redirige al usuario a la página deseada
            header("Location: /html/index.html");
            exit; // Asegúrate de terminar la ejecución del script después de la redirección
        } else {
?>
            <h3 class="error">Ocurrió un error</h3>
        <?php
        }
    } else {
        ?>
        <h3 class="error">Completa todos los campos!</h3>
<?php
    }
}

?>