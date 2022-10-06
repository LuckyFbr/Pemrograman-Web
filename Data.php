<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="background: #caf0f8">
    <div class="container">
        <div>
            <h1 style="text-align: center">INFORMASI PEMBELIAN</h1>
            Nama <?php echo $_GET["nama"]; ?><br>
            Email: <?php echo $_GET["email"]; ?><br>
            Nama barang: <?php echo $_GET["barang"]; ?><br>
            Jumlah: <?php echo $_GET["jumlah"]; ?><br>
            Alamat: <?php echo $_GET["alamat"]; ?><br>
        </div>
    </div>
</body>

</html>