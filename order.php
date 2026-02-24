<!DOCTYPE html>
<html>
<head>
    <title>Confirmation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $produit = $_POST['product'];
    $qte = $_POST['quantity'];
    $prix = $_POST['price'];
    $total = $qte * $prix;
    ?>

    <h2>Merci <?php echo $produit; ?>!</h2>
    <p><?php echo $qte; ?> kg x <?php echo $prix; ?> RWF</p>
    <h3>Total: <?php echo $total; ?> RWF</h3>
    <a href="index.html">← Nouvelle commande</a>
</body>
</html>